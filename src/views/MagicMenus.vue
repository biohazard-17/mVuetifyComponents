<template>
    <v-main >    
        <div class="d-flex flex-column justify-start my-8" >
            <span class="text-h5 text-center w-100">Magic Menu type <strong>A</strong> displayed on top</span>
            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                <MenuTypeA side="top"></MenuTypeA>
            </v-card>
        </div>
        <div style="height: 32px;"></div>
        <div class="d-flex flex-column justify-start my-8" >
            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                <MenuTypeA side="bottom"></MenuTypeA>
            </v-card>
            <span class="text-h5 text-center w-100">Magic Menu type <strong>A</strong> displayed on bottom</span>
        </div>
        <div class="my-8" style="height: 600px; width: 64px !important;">
            <v-card class="bg-primary py-4" style="overflow: visible;">
                <MenuTypeA side="start"></MenuTypeA>
            </v-card>
            <span class="text-h5 text-center w-100">Magic Menu type <strong>A</strong> displayed on bottom</span>
        </div>
        
    </v-main>   
</template>

<script setup>
import MenuTypeA from '@/components/MenuTypeA.vue';
</script>

<style scoped>

</style>