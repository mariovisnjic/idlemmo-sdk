/**
 * IdleMMO API client class
 */
import { configure } from './api.js';
import { getUsers } from './users.js';

class IdleMMO {
  /**
   * Get users from the IdleMMO API
   */
  async getUsers() {
    return getUsers();
  }

}

// Single instance of the client
const idlemmo = new IdleMMO();

// Re-export everything
export { configure, getUsers };
export default idlemmo;
