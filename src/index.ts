/**
 * IdleMMO API client class
 */
import {configure} from './api.js';

import {authCheck} from './endpoints/auth.js';

import {getDungeons, getWorldBosses, getEnemies} from './endpoints/combat.js';
import {inspectItem, itemMarketHistory, searchItem} from "./endpoints/items.js";

import {getGuildConquestView, getGuildConquestZoneInspection} from "./endpoints/guild.js";
import {getShrineProgress} from "./endpoints/shrine.js";
import {ItemMarketHistoryType} from "./types.js";
import {getGuildInformation} from "./endpoints/guild.js";

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
    async inspectItem(hashed_id = "") {
        return inspectItem(hashed_id);
    }
    async itemMarketHistory(hashed_id: string, tier: number, type: ItemMarketHistoryType = "listings") {
        return itemMarketHistory(hashed_id, tier, type);
    }

    async getGuildInformation(id: number) {
        return getGuildInformation(id);
    }
    async getGuildConquestView(season_number?: number) {
        return getGuildConquestView(season_number);
    }
    async getGuildConquestZoneInspection(zone_id: number, season_number?: number) {
        return getGuildConquestZoneInspection(zone_id, season_number);
    }

    async getShrineProgress() {
        return getShrineProgress();
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

    getGuildInformation,
    getGuildConquestView,
    getGuildConquestZoneInspection,

    getShrineProgress
};
export default idlemmo

//configure("");
//console.log(await getGuildConquestZoneInspection(4))