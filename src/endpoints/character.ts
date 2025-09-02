import {makeApiRequest} from '../api.js';
import {
    AltCharacter,
    Character, CharacterCurrentAction,
    CharacterEffect,
    CharacterMetrics, CharacterMuseumParams, CharacterPet, MuseumItem,
    Pagination
} from "../types.js";


export const getCharacterInformation = async (hashed_id: string): Promise<Character> => {
    if (!hashed_id) throw new Error('Character hashed_id required')
    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/information`)
    return characterResponse.character;
}

export const getCharacterMetrics = async (hashed_id: string): Promise<CharacterMetrics> => {
    if (!hashed_id) throw new Error('Character hashed_id required')
    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/metrics`)
    return characterResponse.metrics;
}

export const getCharacterEffects = async (hashed_id: string): Promise<CharacterEffect[]> => {
    if (!hashed_id) throw new Error('Character hashed_id required')
    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/effects`)
    return characterResponse.effects;
}

export const getCharacterAltCharacters = async (hashed_id: string): Promise<AltCharacter[]> => {
    if (!hashed_id) throw new Error('Character hashed_id required')
    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/characters`)
    return characterResponse.characters;
}

export const getCharacterMuseum = async (hashed_id: string, params?: CharacterMuseumParams): Promise<{ items: MuseumItem[], pagination: Pagination }> => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.category) queryParams.append('category', params.category);

    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/museum?${queryParams.toString()}`)

    return {items: characterResponse.items, pagination: characterResponse.pagination};
}

// UNSTABLE ENDPOINT!!!
export const getCharacterAction = async (hashed_id: string): Promise<CharacterPet[]> => {
    return await makeApiRequest('GET', `character/${hashed_id}/current-action`)
}

export const getCharacterPets = async (hashed_id: string): Promise<CharacterCurrentAction> => {
    const characterResponse = await makeApiRequest('GET', `character/${hashed_id}/pets`)

    return characterResponse.pets;
}