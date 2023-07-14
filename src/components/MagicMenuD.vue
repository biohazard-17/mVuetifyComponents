<template>
    <v-card flat color="transparent" class="hidden-sm-and-down  d-sm-flex align-center px-5 me-5 rounded-0"
        style="height: 64px;overflow: visible;">
        <span v-for="link in links" :key="link.target" :class="{ active: link.trigger }"
            v-on:mouseenter="link.trigger = true" v-on:mouseleave="link.trigger = false" :style=link.style
            class="list justify-center align-center d-flex">
            <v-btn @click="scroll(link.target)" class="icon bg-primary" :icon=link.icon></v-btn>
            <span class="texttt font-weight-light px-2 py-0 text-grey text-uppercase">{{ link.text }}</span>
        </span>

    </v-card>
</template>
<script setup>
import { ref } from 'vue';
// import { defineProps } from 'vue';


const links = ref([
    { clr: "#76FF03", target: "home", text: "Home", style: "--clr: #76FF03", icon: "mdi-home-outline", trigger: false },
    { clr: "#00B0FF", target: "me", text: "About Me", style: "--clr: #00B0FF", icon: "mdi-account-circle-outline", trigger: false },
    { clr: "#00B0FF", target: "services", text: "Services", style: "--clr: #00B0FF", icon: "mdi-credit-card-outline", trigger: false },
    { clr: "#00B0FF", target: "gallery", text: "Showcase", style: "--clr: #00B0FF", icon: "mdi-image-multiple-outline", trigger: false },
    { clr: "#FF3D00", target: "contact", text: "Contact", style: "--clr: #FF3D00", icon: "mdi-email-outline", trigger: false },
]);

function scroll(refName){
    //** */ const element = document.getElementById(refName);
    //** */ element.scrollIntoView({ behavior: "smooth" });
    console.log(refName)
}
</script>
<style scoped>
.texttt {
    position: absolute;
    font-size: 0.3em;
    letter-spacing: 1px;
    top: 2px;
    opacity: 0;
}

.list.active .texttt {
    font-size: 0.7em;
    opacity: 1;
    color: black !important;
    transition:font-size 0.6s;
    border-radius: 10px;
    background: var(--clr);
}

.list {
    width: 64px !important;
    background: transparent;
    z-index: 1000 !important;
    transition: 0.5s;
}

.icon {
    font-size: 1.2em;
}

.active.list .icon {
    color: var(--clr) !important;
    transition: 0.6s;
    font-size: 1em;
    transform: scale(130%) translateY(20px);
}
.active.list{
    margin-left: 20px;
    margin-right: 20px;
}

</style>