<template>
    <v-card flat color="transparent" class="hidden-sm-and-down  d-sm-flex align-end px-5 me-5 rounded-0 pb-1"
        style="height: 70px;overflow: visible;">
        <span v-for="link in links" :key="link.target" :class="{ active: link.trigger }"
            v-on:mouseenter="link.trigger = true" v-on:mouseleave="link.trigger = false" :style=link.style
            class="list justify-center align-center d-flex">
            <v-btn @click="scroll(link.target)" class="icon bg-primary" :icon=link.icon></v-btn>
            <span class="texttt font-weight-light px-2 py-0 text-grey text-uppercase">{{ link.text }}</span>
        </span>

        <div class="indicator bg-primary2" style="--clr:#37474f"></div>
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
    transform: translateY(20px);
    opacity: 0;
}

.list.active .texttt {
    font-size: 0.7em;
    transform: translateY(40px);
    opacity: 1;
    color: black !important;
    transition: 0.6s;
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
}

.indicator {
    width: 64px;
    height: 64px;
    position: absolute;
    border-radius: 50%;
    transition: 0.5s;
    box-shadow: 0 10px var(--clr);
    top: 10px;
}

.indicator::before,
.indicator::after {
    content: '';
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    /**opacity: 0; */
}

.indicator::before {
    top: 12px;
    left: -47px;
    box-shadow: 24px 18px var(--clr);
}

.indicator::after {
    top: 12px;
    right: -47px;
    box-shadow: -24px 18px var(--clr);
}

/** 
.list.active~.indicator::after, .list.active~.indicator::before{
    opacity: 1;
    transition: 1s;
}
.list.active~.indicator{
    opacity: 1;
}
*/
.list:nth-child(2).active~.indicator {
    transform: translateX(calc(64px * 0));
    transition: 0.5s;
}

.list:nth-child(3).active~.indicator {
    transform: translateX(calc(64px * 1));
    transition: 0.5s;

}

.list:nth-child(4).active~.indicator {
    transform: translateX(calc(64px * 2));
    transition: 0.5s;
}

.list:nth-child(5).active~.indicator {
    transform: translateX(calc(64px * 3));
    transition: 0.5s;
}

.list:nth-child(6).active~.indicator {
    transform: translateX(calc(64px * 4));
    transition: 0.5s;
}</style>