<template>
    <v-card flat color="transparent" class="my-4">
        <div class="text-h3 text-md-h2 font-weight-black text-center text-accent">What do i offer?..</div>
        <v-row class="d-flex pa-1 my-2">
            <v-col cols="12" sm="6" md="4" v-for="service in services" :key="service.id">
                <v-card height="200px" class="pe-2" rounded="lg" >
                    <v-card-text>
                        <div>Service:</div>
                        <p class="text-h4 text-text text-center">
                            {{ service.text }}
                        </p>
                        <v-row class="d-flex align-center my-auto">
                            <v-col cols="10">
                                <v-btn class="w-100 rounded-pill" color="complementary" variant="outlined"
                                    :href=service.refUrl>{{ service.linkName }}</v-btn>
                            </v-col>
                            <v-col cols="2">
                                <v-avatar :image=service.img></v-avatar>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn prepend-icon="mdi-dots-horizontal" variant="text" class="w-100" color="analogous3" @click="service.trigger = true">
                            
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <v-card v-if=service.trigger class="d-flex flex-column justify-space-between v-card--reveal" style="height: 100%;">
                            <v-card-text class=" pb-0 text-subtitle-1 font-weight-normal text-justify">
                                {{ service.description }}
                                
                            </v-card-text>
                            <v-card-actions class="pt-0">
                                <v-btn variant="outline" width="100%" prepend-icon="mdi-close" color="error" @click="service.trigger = false">
                                    
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

    </v-card>
</template>
<script setup>
import { ref } from 'vue';

const reveal = ref(false)
const services = ref([
    {
        id: "DI", text: "Digital Ilustrator", refUrl: "https://www.pinterest.com/biohazard17_/lowpolyart/", trigger:false,
        linkName: "Check My Pinterest", img: "pinterest.svg",
        description: "My digital art services range from custom illustrations, business card design, iconography and more, all with high quality and reliability."
    },
    {
        id: "gd", text: "3D Artist", refUrl: "https://www.renderhub.com/BIOHAZARD17", trigger:false,
        linkName: "Check My Renderhub", img: 'www.svg',
        description: "Are you a game developer, or do you need assets for your next rendering project? I offer you 3d modelling services with high quality textures, adapted to your developer needs and above all, !!!! MAGNIFICENT !!!!"
    },
    { 
        id: "ai", text: "AI/RL Mentor", refUrl: "#", trigger:false,
        linkName: "Contact me", img: '', 
        description: "Do you need help with your AI models? or are you just entering this world? with experience in developing AI models for private companies, don't hesitate to contact me, remember: that reinforced learning code is not going to program itself; e-mail me and get your data ready." 
    },
    { 
        id: "fe", text: "Frontend dev", refUrl: "https://github.com/biohazard-17", trigger:true,
        linkName: "Check My Github", img: "github.svg", 
        description: "Do you have a great business idea but you need your own sales site? or do you need a custom blog? My frontend developer services are for you, with great quality and great domain of current technologies. Your website is just an e-mail away." 
    },

]);
</script>

<style .scoped>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
    background: rgba(146, 137, 137, 0.6);
    backdrop-filter: blur(5px);
}
</style>