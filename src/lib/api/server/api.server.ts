import { Hono } from 'hono';
import { router } from './router.server';
import { createHonoEndpoints } from 'ts-rest-hono';
import { contract } from '../contract';
import { apiReference } from '@scalar/hono-api-reference';
import { generateOpenApiDoc } from './openapi.server';

import { API_NAMESPACE } from '..';
const SPEC_FILENAME = 'spec.json';

const app = new Hono();
createHonoEndpoints(contract, router, app);

app.get('/' + SPEC_FILENAME, (c) => {
	return c.json(generateOpenApiDoc());
});

app.get(
	'/reference',
	apiReference({
		spec: {
			url: `/${API_NAMESPACE}/${SPEC_FILENAME}`
		}
	})
);

export const api = new Hono().route('/' + API_NAMESPACE, app);
