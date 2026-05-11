import { makeApiRequest } from '../api.js';
import { WorldLocation } from '../types.js';

export const getWorldLocations = async (): Promise<WorldLocation[]> => {
    const response = await makeApiRequest('GET', 'world/locations/list');
    return response.locations;
}
