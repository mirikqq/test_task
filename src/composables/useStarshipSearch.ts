import { useFetch } from "./useFetch.ts";
import { StarShipsResponse } from "../interfaces/starship.ts";

export const useStarshipsSearch = async (searchQuery: string) => {
    try {
        return (await useFetch(searchQuery, {
            method: "GET",
        })) as unknown as StarShipsResponse;
    } catch (error) {
        console.error("Ошибка при получении звездных кораблей:", error);
        throw error;
    }
};
