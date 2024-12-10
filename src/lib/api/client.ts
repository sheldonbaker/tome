import { contract } from '$lib/api';
import type { LoadEvent } from '@sveltejs/kit';
import { initClient } from '@ts-rest/core';
import { API_NAMESPACE } from './index';

export const makeClient = (event: LoadEvent) => {
	const client = initClient(contract, {
		baseUrl: event.url.origin + '/' + API_NAMESPACE,
    api: async (args) => {
      const response = await event.fetch(args.path, {
        method: args.method,
        headers: args.headers,
        body: args.body,
        ...args.fetchOptions
      })

      return {
        status: response.status,
        body: await response.json(),
        headers: response.headers
      }
    },
	});

	return client;
};
