let apiKey: string | null = null;
let initialized: boolean = false;
const baseUrl: string = 'https://api.idle-mmo.com/v1';

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
export async function makeApiRequest(method: string, endpoint: string, options: RequestInit = {}): Promise<any> {
    ensureInitialized();

    const url = `${baseUrl}/${endpoint}`;
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers
    };

    console.log(url, method, headers, options)

    const response = await fetch(url, {
        method,
        headers
    })
    if (response.status === 400) {
        throw new Error('Bad Request: See error code for details.');
    }
    if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration and try again.');
    }
    if (response.status === 403) {
        throw new Error('Insufficient permissions or account banned.');
    }
    if (response.status === 404) {
        throw new Error('Endpoint or entity does not exist.');
    }
    if (response.status === 422) {
        throw new Error('Validation failed. Check the errors field for details.');
    }
    if (response.status === 429) {
        throw new Error('Rate limit exceeded.');
    }

    if (response.status === 200) {
        return await response.json();
    }

    throw new Error(`Unexpected response status: ${response.status}`);
}
