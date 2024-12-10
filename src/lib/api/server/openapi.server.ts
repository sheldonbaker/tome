import { generateOpenApi } from '@ts-rest/open-api';
import { contract } from '../contract';

export const generateOpenApiDoc = () => {
	return generateOpenApi(
		contract,
		{
			info: {
				title: 'Posts API',
				version: '1.0.0'
			}
		},
		{
			jsonQuery: true
		}
	);
};
