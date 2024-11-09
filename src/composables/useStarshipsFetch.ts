import { useFetch } from "./useFetch.ts";
import { type StarShipsResponse } from "../interfaces/starship.ts";

export const useStarshipsFetch = async (
    page?: string | null
): Promise<StarShipsResponse> => {
    try {
        return (await useFetch(`starships/${page ? `?page=${page}` : ""}`, {
            method: "GET",
        })) as unknown as StarShipsResponse;
    } catch (error) {
        console.error("Ошибка при получении звездных кораблей:", error);
        throw error;
    }
};
