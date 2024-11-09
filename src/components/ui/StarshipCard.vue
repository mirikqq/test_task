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
    <div class="starship-card">
        <div class="starship-card_title">
            <h5>{{ starship.name }}</h5>
            <img src="/public/rocket.svg" alt="roketka">
        </div>
        <div class="starship-card_body">
            <ul class="starship-card_body-properties">
                <li>
                    <span>Class: </span>
                    <span>{{ starship.starship_class }}</span>
                </li>
                <li>
                    <span>Model: </span>
                    <span>{{ starship.model }}</span>
                </li>
                <li>
                    <span>Hyperdrive Rating: </span>
                    <span>{{ starship.hyperdrive_rating }}</span>
                </li>
                <li>
                    <span>Crew: </span>
                    <span>{{ starship.crew }}</span>
                </li>
                <li>
                    <span>Passengers: </span>
                    <span>{{ starship.passengers }}</span>
                </li>
            </ul>

            <div class="starship-card_body-cost">
                <p>Credits cost:</p>
                <p>{{ starship.cost_in_credits }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.starship-card {
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    * {
        user-select: none;
    }

    .starship-card_body {

        .starship-card_body-properties {
            list-style: url('/public/property.svg');
        }

        .starship-card_body-cost {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
            margin-top: auto;
        }
    }

    .starship-card_title {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
}
</style>
