import { LOGNAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ url }) => {
	try {
		const queryParams = extractQueryParams(url.searchParams);
		const ghUrl = githubUrl(queryParams);
		const response = await fetch(
			ghUrl, {
			method: 'GET',
			headers: {
				'ContentType': 'application/json'
			}
		}
		);

		const data: GithubResponse = await response.json();
		const repositories = formatRepositories(data);

		return {
			repositories: repositories,
			...queryParams
		};
	} catch (error) {
		console.error(error);
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		processFormData(formData);
	}
} satisfies Actions;

function extractQueryParams(searchParams?: URLSearchParams) {
	let query: string = "";
	let language: string = "";

	if (searchParams != null) {
		const searchParamQuery = searchParams.get("query");
		if (searchParamQuery && searchParamQuery.trim().length > 0) {
			query = searchParamQuery.trim();
		}

		const searchParamLanguage = searchParams.get("language");
		if (searchParamLanguage && searchParamLanguage.trim().length > 0) {
			language = searchParamLanguage.trim();
		}

		const queryParams: QueryParams = {
			query: query,
			language: language
		}

		return queryParams;
	} else {
		return undefined;
	}
}

function githubUrl(queryParams?: QueryParams) {
	let githubQuery = "";

	if (queryParams) {
		if (queryParams.query.length > 0) {
			let encodedQuery = encodeURIComponent(queryParams.query);
			githubQuery = githubQuery.concat(encodedQuery);
		}

		if (queryParams.language.length > 0) {
			if (githubQuery.length > 0) {
				githubQuery = githubQuery.concat("%20");
			}
			let encodedLanguage = encodeURIComponent(queryParams.language);
			githubQuery = githubQuery.concat(`language:${encodedLanguage}`)
		}
	}

	if (githubQuery.length > 0) {
		githubQuery = githubQuery.concat("%20");
	}

	githubQuery = githubQuery.concat("stars:%3E=500%20fork:true");

	const url = `https://api.github.com/search/repositories?q=${githubQuery}&sort=stars&per_page=100`
	console.log(url);
	return url;
}

function formatRepositories(repositories: GithubResponse) {
	const items = repositories.items;
	let formattedRepositories: Repository[] = [];

	items.forEach((element, i) => {
		let repository: Repository = {
			order: i + 1,
			name: element.full_name,
			url: element.html_url,
			description: formatDescription(element.description),
			stars: element.stargazers_count,
			language: element.language
		}

		formattedRepositories.push(repository);
	});

	return formattedRepositories;
}

function formatDescription(description: string) {
	const maximumCharacters = 120;

	if (typeof (description) !== 'string') {
		return ""
	}

	if (description.length <= maximumCharacters) { return description; }

	return description.slice(0, maximumCharacters - 3) + "..."
}

function processFormData(formData: FormData) {
	const query = formData.get("query")?.toString() ?? "";
	const language = formData.get("language")?.toString() ?? "";

	let queryStringPrefix = "/?";
	let queryString = `${queryStringPrefix}`;

	if (query.length > 0) {
		queryString = queryString.concat(`query=${encodeURIComponent(query)}`);
	}

	if (language.length > 0) {
		if (query.length > queryStringPrefix.length) {
			queryString = queryString.concat("&")
		}

		queryString = queryString.concat(`language=${encodeURIComponent(language)}`);
	}
	throw redirect(302, queryString);
}

type Repository = {
	order: number,
	name: string,
	url: string,
	description: string,
	stars: number,
	language: string
}

type QueryParams = {
	query: string,
	language: string
}

type GithubResponse = {
	items: GithubApiRepository[]
}

type GithubApiRepository = {
	full_name: string,
	html_url: string,
	description: string,
	language: string,
	stargazers_count: number
}
