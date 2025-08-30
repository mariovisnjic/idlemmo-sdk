import { makeApiRequest } from '../api.js';
import {
    Dungeon,
    Enemy,
    Item,
    ItemMarketHistoryType,
    ItemSearchParams, LatestSoldItem,
    MarketHistoryData,
    Pagination,
    WorldBoss
} from "../types.js";

export const searchItem = async (params?: ItemSearchParams): Promise<{ items: Item[], pagination: Pagination }> => {
    if (!params?.query && !params?.type) throw new Error('Query or type is required');

    const queryParams = new URLSearchParams();
    if (params?.query) queryParams.append('query', params.query);
    if (params?.type) queryParams.append('type', params.type);
    if (params?.page) queryParams.append('page', params.page.toString());

    return await makeApiRequest('GET', `item/search?${queryParams.toString()}`);
}

export const inspectItem = async (hashedId: string): Promise<Item> => {
    if (!hashedId) throw new Error('Item hashedId required')
    const itemResponse = await makeApiRequest('GET', `item/${hashedId}/inspect`)
    return itemResponse.item;
}

export const itemMarketHistory = async (hashedId: string, {tier, type}: {
    tier: number,
    type: ItemMarketHistoryType
}): Promise<{
    history_data: MarketHistoryData[];
    latest_sold: LatestSoldItem[];
}> => {
    if (!hashedId || !tier || !type) throw new Error('Item hashedId required')

    const queryParams = new URLSearchParams();
    if (tier) queryParams.append('tier', tier.toString());
    if (type) queryParams.append('type', type);

    const itemResponse = await makeApiRequest('GET', `item/${hashedId}/market-history?${queryParams.toString()}`)
    return {history_data: itemResponse.history_data, latest_sold: itemResponse.latest_sold};
}