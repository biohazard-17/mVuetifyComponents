<template>
    <v-card flat class="mt-n8" color="analogous2">
        <div class="text-h3 text-md-h2 font-weight-black text-center text-accent">Check out this:</div>
        <v-expansion-panels>
            <v-expansion-panel class="bg-transparent">
                <v-expansion-panel-title class="text-h4">
                    Ilustrations
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-carousel hide-delimiters progress="accent" :interval="interval" height="300">
                        <template v-slot:prev="{ props }">
                            <v-btn variant="outlined" color="accent" @click="props.onClick" icon="mdi-chevron-left"></v-btn>
                        </template>
                        <template v-slot:next="{ props }">
                            <v-btn variant="outlined" color="accent" @click="props.onClick" icon="mdi-chevron-right"></v-btn>
                        </template>
                        <v-carousel-item transition="fade-transition" v-for="di in DIs" :key=di>
                            <v-card flat class="h-100 pa-2 bg-transparent d-flex align-center justify-center fill-height">
                                <div>
                                    <v-img :height="250" aspect-ratio="1/1" :src="`${di.src}.png`">
                                        <v-btn class="card-title bg-transparent text-black" target="blank" flat :href=di.link>
                                            Find me here </v-btn>
                                    </v-img>
                                </div>
                            </v-card>
                        </v-carousel-item>
                    </v-carousel>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

    </v-card>
</template>
<script setup>
import { ref } from 'vue';
const interval = 3000;
const reveal = ref(false)
const DIs = ref([
    { src: "DI_1", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_2", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_3", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_4", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_5", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_6", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_7", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_8", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
    { src: "DI_9", link: "https://www.pinterest.com/biohazard17_/lowpolyart/" },
])
</script>
<style scoped>
.card-title {
    position: absolute;
    z-index: 3000;
    width: 100%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    bottom: 0;
}
</style>