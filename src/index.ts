/**
 * IdleMMO API client class
 */
import {configure} from './api.js';

import {authCheck} from './endpoints/auth.js';

import {getDungeons, getWorldBosses, getEnemies} from './endpoints/combat.js';
import {inspectItem, itemMarketHistory, searchItem} from "./endpoints/items.js";
import {ItemMarketHistoryType} from "./types.js";

export * from './types.js';


class IdleMMO {
    async authCheck() {
        return authCheck();
    }

    async getWorldBosses() {
        return getWorldBosses();
    }
    async getDungeons() {
        return getDungeons();
    }
    async getEnemies() {
        return getEnemies();
    }


    async searchItem(query = {}) {
        return searchItem(query);
    }
    async inspectItem(hashedId = "") {
        return inspectItem(hashedId);
    }
    async itemMarketHistory(hashedId = "", options: {tier: number, type: ItemMarketHistoryType}) {
        return itemMarketHistory(hashedId, options);
    }

}

const idlemmo = new IdleMMO();

export {
    configure,

    authCheck,

    getWorldBosses,
    getDungeons,
    getEnemies,

    searchItem,
    inspectItem,
    itemMarketHistory,
};
export default idlemmo

//configure("");
//const hashedId = (await searchItem({query: "branch"})).items[0].hashed_id;
//console.log(await itemMarketHistory(hashedId, {tier: 1, type: "listings"}))