// @ts-nocheck
export async function load() {
	try {
		const response = await fetch(
			'https://api.github.com/search/repositories?q=stars:%3E=500%20fork:true&sort=stars&per_page=10', {
			method: 'GET',
			headers: {
				'ContentType': 'application/json'
			}
		}
		);

		const data = await response.json();
		const repositories = formatRepositories(data);
		return { repositories: repositories };
	} catch (err) {
		console.error(err);
	}
}

function formatRepositories(repositories) {
	const items = repositories.items;
	let formattedRepositories = [];

	items.forEach((element, i) => {
		let repository = {
			order: i + 1,
			name: element.name,
			author: element.owner.login,
			url: element.html_url,
			description: element.description,
			stars: element.stargazers_count,
			language: element.language
		}

		formattedRepositories.push(repository);
	});

	return formattedRepositories;
}
