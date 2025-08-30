import { makeApiRequest } from '../api.js';
import {ShrineProgressItem} from "../types.js";

export const getShrineProgress = async (): Promise<ShrineProgressItem[]> => {
    const itemResponse = await makeApiRequest('GET', `shrine/progress`)
    return itemResponse.progress;
}
