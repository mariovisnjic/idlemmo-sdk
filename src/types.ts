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