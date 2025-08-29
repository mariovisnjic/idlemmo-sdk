let apiKey: string | null = null;
let initialized: boolean = false;
const baseUrl: string = 'https://api.idlemmo.com/v1';

// Configuration interface
export interface IdleMMOConfig {
  apiKey: string;
}

export function configure(apiKeyValue: string): void {
  apiKey = apiKeyValue;
  initialized = true;
}

export function ensureInitialized(): void {
  if (!initialized || !apiKey) {
    throw new Error('IdleMMO API not configured. Call configure() with your API key first.');
  }
}

/**
 * Make authenticated API request
 */
export async function makeApiRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
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
