<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStarshipsSearch } from '../composables/useStarshipSearch';
import StarshipCardFull from '../components/ui/StarshipCardFull.vue';

const currentStarshipName = useRoute().params.slug as string
const currentStarship = ref()
const starshipsError = ref()

onMounted(async () => {
    try {
        const starshipsResponse = await useStarshipsSearch(currentStarshipName)

        if (starshipsResponse) {
            currentStarship.value = starshipsResponse
        }
    } catch (error) {
        starshipsError.value = error as string
    }
})

</script>

<template>
    <div class="starship_about_layout">
        <StarshipCardFull v-if="currentStarship" :starship="currentStarship" />
    </div>
</template>

<style scoped></style>
