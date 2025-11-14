import {makeApiRequest} from '../api.js';
import {Pagination, PetExchangeMarketListing} from "../types.js";

export const getPetsExchangeListings = async (): Promise<{listings: PetExchangeMarketListing[], pagination: Pagination}> => {
    const exchangeResponse = await makeApiRequest('GET', 'pets/companion-exchange/listings');
    return {listings: exchangeResponse.listings, pagination: exchangeResponse.pagination};
}