import { makeApiRequest } from './api.js';

/**
 * Get users from the IdleMMO API
 */
export async function getUsers() {
  return makeApiRequest('users');
}
