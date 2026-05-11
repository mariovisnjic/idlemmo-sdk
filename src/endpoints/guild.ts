import {makeApiRequest} from '../api.js';
import {Guild, GuildEnergizingPoolResponse, GuildHall, GuildMember, Zone} from "../types.js";

export const getGuildInformation = async (id: number): Promise<Guild> => {
    if (!id) throw new Error('Guild ID is required');
    const guildResponse = await makeApiRequest('GET', `guild/${id}/information`);
    return guildResponse.guild;
}
export const getGuildMembers = async (id: number): Promise<GuildMember[]> => {
    if (!id) throw new Error('Guild ID is required');
    const guildResponse = await makeApiRequest('GET', `guild/${id}/members`);
    return guildResponse.members;
}
export const getGuildEnergizingPool = async (id: number): Promise<GuildEnergizingPoolResponse> => {
    if (!id) throw new Error('Guild ID is required');
    return await makeApiRequest('GET', `guild/${id}/energizing-pool/information`);
}
export const getGuildHall = async (id: number): Promise<GuildHall> => {
    if (!id) throw new Error('Guild ID is required');
    const guildResponse = await makeApiRequest('GET', `guild/${id}/hall`);
    return guildResponse.guild_hall;
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
