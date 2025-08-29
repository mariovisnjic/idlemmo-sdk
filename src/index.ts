/**
 * IdleMMO API client class
 */
import {configure} from './api.js';

import {authCheck} from './endpoints/auth.js';

import {getDungeons, getWorldBosses, getEnemies} from './endpoints/combat.js';

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

}

const idlemmo = new IdleMMO();

export {
    configure,

    authCheck,

    getWorldBosses,
    getDungeons,
    getEnemies,
};
export default idlemmo

//configure("copyfromenv");
//console.log(await getEnemies());