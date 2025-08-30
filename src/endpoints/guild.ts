import { makeApiRequest } from '../api.js';
import {Guild, Zone} from "../types.js";

export const getGuildInformation = async (id: number): Promise<Guild> => {
    if (!id) throw new Error('Guild ID is required');
    const guildResponse = await makeApiRequest('GET', `guild/${id}/information`);
    return guildResponse.guild;
}
export const getGuildConquestView = async (season_number?: number): Promise<Record<string, Zone>> => {
    const queryParams = new URLSearchParams();
    if (season_number) queryParams.append('season_number', season_number.toString());

    const guildResponse = await makeApiRequest('GET', `guild/conquest/view?${queryParams.toString()}`);
    return guildResponse.zones;
}
export const getGuildConquestZoneInspection = async (zone_id: number, season_number?: number): Promise<Zone> => {
    if (!zone_id) throw new Error('Zone ID is required');

    const queryParams = new URLSearchParams();
    if (season_number) queryParams.append('season_number', season_number.toString());

    const guildResponse = await makeApiRequest('GET', `guild/conquest/zone/${zone_id}/inspect?${queryParams.toString()}`);
    return guildResponse.zone;
}