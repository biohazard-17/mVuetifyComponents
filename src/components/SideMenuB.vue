<template>
    <v-card class="bg-primary mPanel pt-4" >

        <!--<div @click="expanded = !expanded" :class="{ drawer: expanded }"
            class="menuBtn d-flex flex-column align-center justify-center">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
        </div>-->
        <div class="d-flex flex-column justify-start align-start px-2">
            <span v-for="link in links" :key="link.target" :class="{ active: link.trigger }"
                v-on:mouseenter="link.trigger = !link.trigger" v-on:mouseleave="link.trigger = !link.trigger"
                :style=link.style class="justify-center align-center d-flex my-2 list">
                <v-btn @click="scroll(link.target)" class="icon " :icon=link.icon :color="link.trigger ? link.clr : 'black'"
                    variant="text">
                </v-btn>
                <v-tooltip offset="40" activator="parent" location="end">{{ link.text }}</v-tooltip>
                
            </span>
            <div class="indicator bg-primary2" style="--clr:#37474f"></div>

        </div>


    </v-card>
</template>
<script setup>
import { ref } from 'vue';

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

.list.active .icon {
    transform: translateX(32px);
    transition: 0.5s;
}
.icon{
    transition: 0.5s;
}

.mPanel {
    position: fixed;
    height: 100%;
    overflow: visible;
}

.indicator {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 16px;
    left: 32px;
    border-radius: 50%;
    transition: 0.5s;
    z-index: -1000;
    opacity: 0;
}
.indicator::after,
.indicator::before{
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: transparent;
    border-radius: 50%;
    left: 8px;
}
.indicator::after{
    top: -22px;
    box-shadow: 11px 10px var(--clr);
    z-index: -1000;
}
.indicator::before{
    bottom: -22px;
    box-shadow: 11px -10px var(--clr);
    z-index: -1000;
}
.list:nth-child(1).active~.indicator {
    transform: translateY(calc(64px * 0));
    transition: 0.5s;
    opacity: 1;
}
.list:nth-child(2).active~.indicator {
    transform: translateY(calc(64px * 1));
    transition: 0.5s;
    opacity: 1;
}
.list:nth-child(3).active~.indicator {
    transform: translateY(calc(64px * 2));
    transition: 0.5s;
    opacity: 1; 
}
.list:nth-child(4).active~.indicator {
    transform: translateY(calc(64px * 3));
    transition: 0.5s;
    opacity: 1;
}
.list:nth-child(5).active~.indicator {
    transform: translateY(calc(64px * 4));
    transition: 0.5s;
    opacity: 1;
}



</style>