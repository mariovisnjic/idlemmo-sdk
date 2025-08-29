

let apiKey: string | null = null;
let initialized: boolean = false;
const baseUrl: string = 'https://api.idlemmo.com/v1';

// Configuration interface
interface IdleMMOConfig {
  apiKey: string;
}

export function configure(apiKeyValue): void {
  apiKey = apiKeyValue;
  initialized = true;
}

function ensureInitialized(): void {
  if (!initialized || !apiKey) {
    throw new Error('IdleMMO API not configured. Call configure() with your API key first.');
  }
}

/**
 * Make authenticated API request
 */
async function makeApiRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
  ensureInitialized();
  
  const url = `${baseUrl}/${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    ...options.headers
  };

  // Mock implementation - in a real scenario, use fetch or another HTTP client
  console.log(`Making API request to ${url} with API key ${apiKey}`);
  
  // Simulate API response
  return Promise.resolve({ success: true, data: [] });
}

/**
 * IdleMMO API client class
 */
class IdleMMO {
  /**
   * Get users from the IdleMMO API
   */
  async getUsers() {
    return makeApiRequest('users');
  }

  /**
   * Get status from the IdleMMO API
   */
  async getStatus() {
    return makeApiRequest('status');
  }
}

// Single instance of the client
const idlemmo = new IdleMMO();

// Export API methods directly
export const getUsers = () => idlemmo.getUsers();
export const getStatus = () => idlemmo.getStatus();

// Export the client instance as default
export default idlemmo;
