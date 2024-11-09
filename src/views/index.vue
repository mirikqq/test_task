<script setup lang="ts">
import SearchBar from "../components/ui/SearchBar.vue"
import StarshipCard from "../components/ui/StarshipCard.vue";
import { onMounted, ref } from "vue";
import { useStarshipsFetch } from "../composables/useStarshipsFetch.ts";
import { Starship, type StarShipsResponse } from "../interfaces/starship.ts";
import { useStarshipsSearch } from "../composables/useStarshipSearch.ts";

const starships = ref<StarShipsResponse | null>(null)
const starshipsError = ref<string | boolean>(false)
const isLoading = ref<boolean>(true)

const fetchStarships = async (page?: string | null) => {
    // Я бы написал реактивные композаблы - но к сожалению очень мало времени после работы остается :(
    // по этому try catch

    isLoading.value = true

    let currentPage

    if (page) {
        currentPage = new URL(page).searchParams.get('page')
    }

    try {
        const starshipsResponse = await useStarshipsFetch(currentPage)

        if (starshipsResponse.count) {
            isLoading.value = false
            starships.value = starshipsResponse
        }
    } catch (error) {
        starshipsError.value = error as string
    }
}

const search = async (query: string) => {
    isLoading.value = true
    const currentQuery = query.startsWith('http') ? query : `https://swapi.dev/api/starships/?search=${query}`

    try {
        const starshipsResponse = await useStarshipsSearch(currentQuery) as StarShipsResponse | Starship

        if (starshipsResponse) {
            if (query.startsWith('http')) {
                starships.value!.results = [starshipsResponse as Starship]
            } else {
                starships.value = starshipsResponse as StarShipsResponse
            }
            isLoading.value = false
        }
    } catch (error) {
        starshipsError.value = error as string
    }
}

onMounted(async () => {
    await fetchStarships()
})
</script>

<template>
    <div class="starship-layout">
        <div class="starship-layout-searchbar">
            <SearchBar @search="search" class="starship-layout-searchbar_bar" />
        </div>
        <div class="starship-layout_container">
            <div v-if="!isLoading || starships?.results.length" v-for="starship in starships?.results"
                class="starship-layout_container_link">
                <RouterLink class="starship-layout_container_link-unstyled"
                    :to="{ name: 'StarshipPage', params: { slug: starship.url.match(/starships\/(\d+)\//)![0] } }">
                    <StarshipCard :starship="starship" />
                </RouterLink>
            </div>
            <div class="starship-layout-searchbar_loader" v-else-if="isLoading && !starshipsError">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                        opacity=".5" />
                    <path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
                        <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite"
                            to="360 12 12" type="rotate" />
                    </path>
                </svg>
            </div>
        </div>
        <div v-if="starshipsError" class="starship-layout_error">
            <p>{{ starshipsError }}</p>
        </div>
        <div class="starship-layout-pages">
            <button @click="fetchStarships(starships?.previous)"
                :disabled="(!starships?.previous || isLoading)">prev</button>
            <button @click="fetchStarships(starships?.next)" :disabled="(!starships?.next || isLoading)">next</button>
        </div>
    </div>
</template>

<style scoped>
.starship-layout {
    width: 100%;

    .starship-layout-searchbar {

        .starship-layout-searchbar_bar {
            margin: auto;
        }

    }

    .starship-layout_container {
        position: relative;
        gap: 5dvw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 48px;

        .starship-layout_container_link {
            .starship-layout_container_link-unstyled {
                text-decoration: none;
                color: inherit;
            }
        }

        .starship-layout-searchbar_loader {
            position: absolute;
            left: 49%;
        }
    }

    .starship-layout-pages {
        margin-top: 48px;

        &:not(:first-child) button {
            margin-left: 8px;
        }

        & .disabled {
            cursor: default;
            opacity: 0.2;
            user-select: none;
        }
    }
}
</style>
