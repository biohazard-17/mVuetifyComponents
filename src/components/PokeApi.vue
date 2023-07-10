<template>
    <v-card class="bg-transparent rounded-0" flat>
        <v-row>
            <v-col cols="10">
                <v-text-field v-model="pokemonId" color="red" label="Click to search"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn color="accent2" @click="findPokemon" icon="mdi-magnify" :loading="loading"></v-btn>
            </v-col>
        </v-row>
        <v-row v-if="readyPokemon">
            <v-col cols="12" >
                <v-card height="300px" width="250px" class="pokemonImg d-flex flex-column rounded-0 ma-auto bg-transparent" >
                    <div class="pokemonName text-center">{{ pokemonName }}</div>
                    <v-img height="200px" :src="pokemonImg" :lazy-src="pokemonImg" :alt="pokemonName"></v-img>
                    <div class="pokemonType text-center">{{ pokemonType }}</div>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const pokeApi = ' https://pokeapi.co/api/v2/pokemon/';
var pokemonName = ref('');
var pokemonImg = ref('');
var pokemonType = ref('');
const pokemonId = ref('');
var readyPokemon = ref(false);
const loading = ref(false)

function findPokemon() {
    readyPokemon.value = false
    loading.value = true
    return axios.get(`${pokeApi}${pokemonId.value}`).then(r => {
        pokemonName = r.data.name
        pokemonType = r.data.types[0].type.name
        pokemonImg = r.data.sprites.front_default
        readyPokemon.value = true;
        loading.value = false
    }).catch(error => {
        alert('ohh bummer we could\'n find your pokemon \n' + error)
    })
}

</script>

<style scoped>

.pokemonName , .pokemonType{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
}

</style>