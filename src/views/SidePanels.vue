<template>
    <v-main>
        
        <v-card class="d-flex justify-space-between">
            <v-card class="bg-primary2 w-100" height="100vh">
                <SideMenuA></SideMenuA>
            </v-card>
            <v-card class="bg-primary2 w-100 " height="100vh">
                <SideMenuB></SideMenuB>
            </v-card>
            <v-card class="bg-primary2 w-100 " height="100vh">
                <SideMenuC></SideMenuC>
            </v-card>
        </v-card>
    </v-main>
</template>
<script setup>
import { ref } from 'vue';
const sideMenuGroup = ref("");


import SideMenuA from '@/components/SideMenuA.vue';
import SideMenuB from '@/components/SideMenuB.vue';
import SideMenuC from '@/components/SideMenuC.vue';
</script>