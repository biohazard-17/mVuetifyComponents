<template>
    <v-main>
        <v-card >
            <v-radio-group v-model="sideMenuGroup">
                <v-radio label="Radio button" value="1"></v-radio>
            </v-radio-group>
        </v-card>
        <v-card class="bg-primary2" height="100vh">
            <SideMenuA></SideMenuA>
        </v-card>
    </v-main>
</template>
<script setup>
import { ref } from 'vue';
const sideMenuGroup = ref("");


import SideMenuA from '@/components/SideMenuA.vue';
</script>