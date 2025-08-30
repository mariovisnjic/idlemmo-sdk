import { makeApiRequest } from '../api.js';

export const authCheck = async () => {
    return await makeApiRequest('GET', 'auth/check');
}