import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	const url = 'api.github.com';
	const response = await resolve(event);

	if (event.request.method === 'OPTIONS') {
		return new Response(null, {
			headers: {
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
				'Access-Control-Allow-Origin': url,
			}
		});
	}

	response.headers.append('Access-Control-Allow-Origin', url);

	return response;
};

