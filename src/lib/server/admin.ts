import { SECRET_API_KEY } from '$env/static/private';
import { PUBLIC_APPWRITE_PROJECTID, PUBLIC_APPWRITE_ENDPOINT } from '$env/static/public';

import sdk from 'node-appwrite';

export const client = new sdk.Client();

client
	.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
	.setProject(PUBLIC_APPWRITE_PROJECTID)
	.setKey(SECRET_API_KEY);
