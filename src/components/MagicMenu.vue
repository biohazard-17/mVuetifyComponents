<template>
    <v-card flat class="bg-transparent rounded-0 mWrapper" :class="side, variant,{collapsible : collapsible}" >
        <span v-for="link in links" :key="link.target" :class="{ active: link.trigger }"
            v-on:mouseenter="link.trigger = true" v-on:mouseleave="link.trigger = false" :style=link.style
            class="list_item">
            <v-btn @click="scroll(link.target)" 
            class="icon" :icon=link.icon 
            variant="text"
            :style="link.style"
            :color="link.trigger ? link.clr : itemColor"
            :class="colorized"
            ></v-btn>
            <span class="MMLabel font-weight-light px-2 py-0 text-grey text-uppercase">{{ link.text }}</span>
        </span>

        <div :class="indicator" class="indicator" :style="indicatorBG"></div>
    </v-card>
</template>
<script setup>
import { ref, defineProps, computed } from 'vue';
import { colors } from '@/mcolors';

const props = defineProps({
    side: {
        type: String,
        default: 'top',
    },
    indicator: {
        type: Boolean,
        default:true,
    },
    colorized: {
        type: Boolean,
        default:false,
    },
    collapsible: {
        type: Boolean,
        default:false,
    },
    itemColor:{
        type:String,
        default: colors.shades.black,
    },
    variant:{
        type:String,
        default: 'A',
    },
    indicatorBG:{
        type:String,
        default: colors.greyBlue.darken4,
    },
})
//props
const side = computed(()=>{return props.side})
//active icon with bg color
const colorized = computed(()=>{return props.colorized?'colorized':'normal'})
//color displayed by the icon 
const itemColor = computed(()=>{return props.itemColor})
//type of items
const variant = computed(()=>{return `type${props.variant}`})
//presence of the indicator
const indicator = computed(()=>{
    if(variant.value === 'typeD') return 'hide'
    return props.indicator?'':'hide'
});
const indicatorBG = computed(()=>{
    return `--bg-clr:${props.indicatorBG}`
})

//data
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
@import url('../styles/Magic Menu Styles/BaseStyles.css');
@import url('../styles/Magic Menu Styles/TopStyles.css');
@import url('../styles/Magic Menu Styles/BottomStyles.css');
@import url('../styles/Magic Menu Styles/StartStyles.css');
@import url('../styles/Magic Menu Styles/EndStyles.css');

</style>