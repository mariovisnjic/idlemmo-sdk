export interface WorldBoss {
    id: number;
    name: string;
    image_url: string;
    level: number;
    location: {
        id: number;
        name: string;
    };
    loot: {
        hashed_item_id: string;
        name: string;
        image_url: string | null;
        quality: string;
        quantity: number;
        chance: number;
    }[];
    status: "IN_PROGRESS" | "READY_FOR_LOBBY" | "RESPAWNING";
    battle_starts_at: string | null;
    battle_ends_at: string | null;
}

export interface Dungeon {
    id: number;
    name: string;
    description: string | null;
    image_url: string;
    level_required: number;
    difficulty: number;
    length: number;
    cost: number;
    shards: number;
    completion_requirement: number;
    location: {
        id: number;
        name: string;
    };
    loot: {
        hashed_item_id: string;
        name: string;
        image_url: string | null;
        quality: string;
        quantity: number;
        chance: number;
    }[];
    experience: {
        skills: Record<string, number>;
    };
}

export interface Enemy {
    id: number;
    name: string;
    image_url: string;
    level: number;
    experience: number;
    health: number;
    chance_of_loot: number;
    location: {
        id: number;
        name: string;
    };
    loot: {
        hashed_item_id: string;
        name: string;
        image_url: string | null;
        quality: string;
        quantity: number;
        chance: number;
    }[];
}

export interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
}

export interface Item {
    hashed_id: string;
    name: string;
    description: string | null;
    image_url: string;
    type: string;
    quality: string;
    vendor_price: number | null;
}

export interface ItemSearchParams {
    query?: string;
    type?: string;
    page?: number;
}

export type ItemType =
    | 'BOW'
    | 'RECIPE'
    | 'HELMET'
    | 'CHEST'
    | 'SWORD'
    | 'GREAVES'
    | 'SHIELD'
    | 'BOOTS'
    | 'DAGGER'
    | 'SPECIAL'
    | 'FELLING_AXE'
    | 'PICKAXE'
    | 'BAIT'
    | 'EMPTY_CRYSTAL'
    | 'VIAL'
    | 'ESSENCE_CRYSTAL'
    | 'CRAFTING_MATERIAL'
    | 'UPGRADE_STONE'
    | 'CHESTPLATE';


export type ItemMarketHistoryType = "listings" | "orders";


export interface MarketHistoryData {
    date: string;
    average_price: number;
    total_sold: number;
}

export interface LatestSoldItem {
    item: {
        hashed_id: string;
        name: string;
        image_url: string;
    };
    tier: number;
    quantity: number;
    price_per_item: number;
    total_price: number;
    sold_at: string;
}

export interface Guild {
    id: number;
    name: string;
    tag: string;
    description: string | null;
    experience: number;
    level: number;
    icon_url: string | null;
    background_url: string | null;
    member_count: number;
    season_position: number | null;
    marks: number;
}


export interface GuildBasic {
    id: number;
    name: string;
    tag: string | null;
    icon_url: string;
    background_url?: string;
}

export interface ActiveAssault {
    guild: GuildBasic;
    kills: number;
    experience: number;
    starts_at: string;
    ends_at: string;
}

export interface ZoneGuild {
    id: number;
    position: number;
    kills: string;
    experience: string;
    contributions: null;
    guild: GuildBasic;
}

export interface Zone {
    location: {
        id: number;
        key: string;
        name: string;
        image_url: string;
    };
    contributions: null;
    status: string;
    colour: string | null;
    kills: number;
    experience: number;
    guilds_count: number;
    active_assaults: ActiveAssault[];
    guilds: ZoneGuild[];
}

export interface ShrineProgressEffect {
    target: string;
    attribute: string;
    value: number;
    value_type: string;
}

export interface ShrineTier {
    key: string;
    name: string;
}

export interface ShrineProgressItem {
    id: number;
    tier: ShrineTier;
    effects: ShrineProgressEffect[];
    current_value: number;
    target_value: number;
    target_remaining: number;
    percentage: number;
    goal_reached_at: string | null;
    is_active: boolean;
    in_progress: boolean;
    can_activate: boolean;
}