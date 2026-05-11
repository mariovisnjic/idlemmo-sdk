# IdleMMO SDK

A lightweight, promise-based TypeScript/JavaScript wrapper for the IdleMMO public API.

- Written in TypeScript (types bundled)
- Simple function-per-endpoint API
- Works in Node.js and modern bundlers

> **Note:** Some endpoints are marked **UNSTABLE** and may change without notice.

> When in doubt consult official documentation at https://web.idle-mmo.com/settings/api

---

## Installation

```bash
npm install idlemmo-sdk
```

---

## Quick Start

```ts
import { configure } from 'idlemmo-js-wrapper';

// Call this once during app startup
configure('YOUR_API_KEY_HERE');
```

Then call any endpoint:

```ts
import {
  authCheck,
  getWorldBosses,
  searchItem,
  inspectItem,
  itemMarketHistory,
  getCharacterInformation,
  getCharacterMetrics,
  getCharacterEffects,
  getCharacterAltCharacters,
  getCharacterMuseum,
  getCharacterAction,      // UNSTABLE
  getCharacterPets,
  getGuildInformation,
  getGuildMembers,
  getGuildEnergizingPool,
  getGuildHall,
  getGuildConquestView,
  getGuildConquestZoneInspection,
  getShrineProgress,
  getWorldLocations,
} from 'idlemmo-js-wrapper';

(async () => {
  const ok = await authCheck();
  const bosses = await getWorldBosses();
  const items = await searchItem({ query: 'sword', page: 1 });
})();
```

---

## Usage Examples

### Auth

```ts
import { authCheck } from 'idlemmo-js-wrapper';

const result = await authCheck();
// Handle boolean/response per your API configuration
```

### Items

```ts
import { searchItem, inspectItem, itemMarketHistory } from 'idlemmo-js-wrapper';

const { items, pagination } = await searchItem({ query: 'potion', page: 2 });
const item = await inspectItem('<item_hashed_id>');
const { history_data, latest_sold } = await itemMarketHistory('<item_hashed_id>', 3, 'AVERAGE');
```

### Combat

```ts
import { getDungeons, getWorldBosses, getEnemies } from 'idlemmo-js-wrapper';

const dungeons = await getDungeons();
const bosses = await getWorldBosses();
const enemies = await getEnemies();
```

### Character

```ts
import {
  getCharacterInformation,
  getCharacterMetrics,
  getCharacterEffects,
  getCharacterAltCharacters,
  getCharacterMuseum,
  getCharacterAction, // UNSTABLE
  getCharacterPets, 
} from 'idlemmo-js-wrapper';

const character = await getCharacterInformation('<character_hashed_id>');
const metrics = await getCharacterMetrics('<character_hashed_id>');
const effects = await getCharacterEffects('<character_hashed_id>');
const alts = await getCharacterAltCharacters('<character_hashed_id>');
const { items, pagination } = await getCharacterMuseum('<character_hashed_id>', {
  page: 1,
  category: 'PETS',
});

// UNSTABLE:
const action = await getCharacterAction('<character_hashed_id>');
```

### Guild

```ts
import {
  getGuildInformation,
  getGuildMembers,
  getGuildEnergizingPool,
  getGuildHall,
  getGuildConquestView,
  getGuildConquestZoneInspection,
} from 'idlemmo-js-wrapper';

const guild = await getGuildInformation(12345);
const members = await getGuildMembers(12345);     // members now include `hashed_id`
const pool = await getGuildEnergizingPool(12345);
const hall = await getGuildHall(12345);
const conquest = await getGuildConquestView(12345);
const zone = await getGuildConquestZoneInspection(12345, 7);
```

### World

```ts
import { getWorldLocations } from 'idlemmo-js-wrapper';

// All dates in the forecast are UTC.
const locations = await getWorldLocations();
```

### Shrine

```ts
import { getShrineProgress } from 'idlemmo-js-wrapper';

const progress = await getShrineProgress();
```

### Pets

```ts
import { getPetsExchangeListings } from 'idlemmo-js-wrapper';

const { listings, pagination } = await getPetsExchangeListings();
```



---

## API Reference

Types are exported and available via TypeScript intellisense. Below is a concise reference of function signatures, parameters, and return types.  
Refer to your IDE for full type details (e.g., `Character`, `Item`, `Guild`, etc.).

All functions return **Promises**.

### Auth

- **authCheck(): Promise<any>**
    - Params: none
    - Returns: API response indicating auth status

### Combat

- **getDungeons(): Promise<Dungeon[]>**
    - Params: none
    - Returns: list of dungeons

- **getWorldBosses(): Promise<WorldBoss[]>**
    - Params: none
    - Returns: list of world bosses

- **getEnemies(): Promise<Enemy[]>**
    - Params: none
    - Returns: list of enemies

### Items

- **searchItem(params?: ItemSearchParams): Promise<{ items: Item[]; pagination: Pagination }>**
    - Params:
        - `params.query?: string`
        - `params.type?: string`
        - `params.page?: number`
    - Returns:
        - `items`: matching items
        - `pagination`: pagination info

- **inspectItem(hashed_id: string): Promise<Item>**
    - Params:
        - `hashed_id: string` (required)
    - Returns: a single item

- **itemMarketHistory(hashed_id: string, tier: number, type: ItemMarketHistoryType): Promise<{ history_data: MarketHistoryData[]; latest_sold: LatestSoldItem[] }>**
    - Params:
        - `hashed_id: string` (required)
        - `tier: number` (required)
        - `type: ItemMarketHistoryType` (required, e.g., `'AVERAGE' | 'MIN' | 'MAX'`)
    - Returns:
        - `history_data`: aggregated history points
        - `latest_sold`: latest sales list

### Character

- **getCharacterInformation(hashed_id: string): Promise<Character>**
- **getCharacterMetrics(hashed_id: string): Promise<CharacterMetrics>**
- **getCharacterEffects(hashed_id: string): Promise<CharacterEffect[]>**
- **getCharacterAltCharacters(hashed_id: string): Promise<AltCharacter[]>**
- **getCharacterMuseum(hashed_id: string, params?: CharacterMuseumParams): Promise<{ items: MuseumItem[]; pagination: Pagination }>**
- **getCharacterAction(hashed_id: string): Promise<CharacterCurrentAction>** *(UNSTABLE)*
- **getCharacterPets(hashed_id: string): Promise<CharacterPet[]>** — each pet now includes `total_experience` and a full stat breakdown (`agility`, `accuracy`, `protection`, `max_stamina`, `attack_power`, `movement_speed`, `critical_chance`, `critical_damage`, plus `strength`, `defence`, `speed`)

### Guild

- **getGuildInformation(id: number): Promise<Guild>**
- **getGuildMembers(id: number): Promise<GuildMember[]>** — each member includes `hashed_id`
- **getGuildEnergizingPool(id: number): Promise<GuildEnergizingPoolResponse>**
- **getGuildHall(id: number): Promise<GuildHall>**
- **getGuildConquestView(season_number?: number): Promise<Record<string, Zone>>**
- **getGuildConquestZoneInspection(zone_id: number, season_number?: number): Promise<Zone>**

### World

- **getWorldLocations(): Promise<WorldLocation[]>** — locations with weather forecast (dates in UTC)

### Pets

- **getPetsExchangeListings(): Promise<{ listings: PetExchangeMarketListing[]; pagination: Pagination }>**
    - Params: none
    - Returns:
        - `listings`: list of pet exchange listings
        - `pagination`: pagination info

### Shrine

- **getShrineProgress(): Promise<ShrineProgressItem[]>**

---

## Errors

- Functions validate required parameters and throw an `Error` if missing (e.g., `hashed_id`).
- Network/API errors are propagated as rejected promises.

---

## TypeScript

This package ships with TypeScript definitions. You can import types as needed:

```ts
import type {
  Character,
  CharacterMetrics,
  CharacterEffect,
  AltCharacter,
  CharacterMuseumParams,
  MuseumItem,
  Pagination,
  Item,
  ItemSearchParams,
  MarketHistoryData,
  LatestSoldItem,
  ItemMarketHistoryType,
  Dungeon,
  WorldBoss,
  Enemy,
  Guild,
  GuildMember,
  GuildMembersResponse,
  GuildEnergizingPool,
  GuildEnergizingPoolResponse,
  GuildHall,
  GuildHallBlueprint,
  GuildHallUpgrade,
  GuildHallSlots,
  GuildConquestView,
  GuildConquestZoneInspection,
  ShrineProgressItem,
  WorldLocation,
  WeatherForecastDay,
  WeatherWindow,
  PetStats,
  PetEvolution
} from 'idlemmo-js-wrapper';
```

---

## Configuration

```ts
configure('YOUR_API_KEY_HERE');
```

---

## License

MIT