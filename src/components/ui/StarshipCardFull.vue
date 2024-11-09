<script setup lang="ts">
import { type Starship } from '../../interfaces/starship';

defineProps({
    starship: {
        type: Object as () => Starship,
        required: true
    }
})
</script>

<template>
    <div class="starship-card_full">
        <div class="starship-card_full_title">
            <h5>{{ starship.name }}</h5>
            <img src="/public/rocket.svg" alt="roketka">
        </div>
        <div class="starship-card_full_body">
            <ul class="starship-card_full_body-properties">
                <li>
                    <span>MGLT: </span>
                    <span>{{ starship.MGLT }}</span>
                </li>
                <li>
                    <span>Cargo capacity: </span>
                    <span>{{ starship.cargo_capacity }}</span>
                </li>
                <li>
                    <span>Consumables: </span>
                    <span>{{ starship.consumables }}</span>
                </li>
                <li>
                    <span>Cost: </span>
                    <span>{{ starship.cost_in_credits }}</span>
                </li>
                <li>
                    <span>Created: </span>
                    <span>{{ starship.created }}</span>
                </li>
                <li>
                    <span>Crew: </span>
                    <span>{{ starship.crew }}</span>
                </li>
                <li>
                    <span>Edited: </span>
                    <span>{{ starship.edited }}</span>
                </li>
                <li>
                    <span>Films: </span>
                    <span>{{ starship.films }}</span>
                </li>
                <li>
                    <span>Hyperdrive Rating: </span>
                    <span>{{ starship.hyperdrive_rating }}</span>
                </li>
                <li>
                    <span>Manufacturer: </span>
                    <span>{{ starship.manufacturer }}</span>
                </li>
                <li>
                    <span>Max speed: </span>
                    <span>{{ starship.max_atmosphering_speed }}</span>
                </li>
                <li>
                    <span>Model: </span>
                    <span>{{ starship.model }}</span>
                </li>
                <li>
                    <span>Name: </span>
                    <span>{{ starship.name }}</span>
                </li>
                <li>
                    <span>Passengers: </span>
                    <span>{{ starship.passengers }}</span>
                </li>
                <li>
                    <span>Pilots: </span>
                    <span>{{ starship.pilots }}</span>
                </li>
                <li>
                    <span>Class: </span>
                    <span>{{ starship.starship_class }}</span>
                </li>
                <li>
                    <span>URLS: </span>
                    <span>{{ starship.url }}</span>
                </li>
            </ul>

            <div class="starship-card_full_body-cost">
                <p>Credits cost:</p>
                <p>{{ starship.cost_in_credits }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.starship-card_full {
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    .starship-card_full_body {

        .starship-card_full_body-properties {
            list-style: url('/public/property.svg');
        }

        .starship-card_full_body-cost {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
            margin-top: auto;
        }
    }

    .starship-card_full_title {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid;
    }
}
</style>
