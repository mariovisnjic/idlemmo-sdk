import { makeApiRequest } from '../api.js';
import {Dungeon, Enemy, WorldBoss} from "../types.js";

export const getWorldBosses = async (): Promise<WorldBoss[]> => {
    const bossesList = await makeApiRequest('GET', 'combat/world_bosses/list');
    return bossesList.world_bosses;
}

export const getDungeons = async (): Promise<Dungeon[]> => {
    const dungeonsList = await makeApiRequest('GET', 'combat/dungeons/list');
    return dungeonsList.dungeons;
};

export const getEnemies = async (): Promise<Enemy[]> => {
    const enemiesList = await makeApiRequest('GET', 'combat/enemies/list');
    return enemiesList.enemies;
};