<template>
    <v-card flat class="bg-transparent rounded-0 mWrapper" :class="side" >
        <span v-for="link in links" :key="link.target" :class="{ active: link.trigger }"
            v-on:mouseenter="link.trigger = true" v-on:mouseleave="link.trigger = false" :style=link.style
            class="list_item">
            <v-btn @click="scroll(link.target)" class="icon" :icon=link.icon></v-btn>
            <span class="MMLabel font-weight-light px-2 py-0 text-grey text-uppercase">{{ link.text }}</span>
        </span>

        <div class="indicator bg-primary" style="--clr:#263238"></div>
    </v-card>
</template>
<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
    side: {
        type: String,
        default: 'top',
    },
})

//const side = ref(props.side)
const side = computed(()=>{return props.side})

const links = ref([
    { clr: "#76FF03", target: "home", text: "Home", style: "--clr: #76FF03", icon: "mdi-home-outline", trigger: false },
    { clr: "#00B0FF", target: "me", text: "About Me", style: "--clr: #00B0FF", icon: "mdi-account-circle-outline", trigger: false },
    { clr: "#00B0FF", target: "services", text: "Services", style: "--clr: #00B0FF", icon: "mdi-credit-card-outline", trigger: false },
    { clr: "#00B0FF", target: "gallery", text: "Showcase", style: "--clr: #00B0FF", icon: "mdi-image-multiple-outline", trigger: false },
    { clr: "#FF3D00", target: "contact", text: "Contact", style: "--clr: #FF3D00", icon: "mdi-email-outline", trigger: false },
]);

function scroll(refName) {
    //** */ const element = document.getElementById(refName);
    //** */ element.scrollIntoView({ behavior: "smooth" });
    console.log(refName)
}
</script>

<style scoped>
@import url('../styles/MagicMenusBaseStyles.css');
@import url('../styles/MagicMenusTopStyles.css');
@import url('../styles/MagicMenusBottomStyles.css');
@import url('../styles/MagicMenusStartStyles.css');

.top.mWrapper,
.bottom.mWrapper {
    display: flex;
    height: 64px; 
    overflow: visible;
}
.start.mWrapper,
.end.mWrapper {
    display: flex;
    flex-direction: column;
    width: 64px !important;
    overflow: visible;
    
}

.top.mWrapper .list_item, 
.bottom.mWrapper .list_item{
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.start.mWrapper .list_item, 
.end.mWrapper .list_item{
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>