import { configure } from './api.js';
import * as endpoints from './endpoints/index.js';
export * from './types.js';

class IdleMMO {
    constructor() {
        // @ts-ignore
        Object.assign(this, endpoints);
    }
}

const idlemmo = new IdleMMO();

export default idlemmo;
export { IdleMMO, idlemmo, configure };

export * from './endpoints/index.js';
