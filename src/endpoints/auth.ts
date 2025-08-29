import { makeApiRequest } from '../api.js';

export const authCheck = async () => {
    return await makeApiRequest('auth/check');
}