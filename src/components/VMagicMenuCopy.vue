<template>
    <v-card >
        <v-app-bar color="bg1" style="overflow: visible;" >
            <v-app-bar-nav-icon :ripple="false" class="hidden-sm-and-up" icon="mdi-dots-vertical" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title color="accent" style="font-size: 1.5em;">BIOHAZARD_17</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-card 
            flat color="transparent" 
            class="hidden-sm-and-down  d-sm-flex px-5 me-5 rounded-0" style="height: 64px;overflow: visible;">
                <span 
                v-for="link in links" :key="link.target"
                :class="{ active: link.trigger }" v-on:mouseenter="link.trigger=true" v-on:mouseleave="link.trigger=false" 
                :style= link.style class="list justify-center align-center d-flex"
                >
                    <v-btn @click="scroll(link.target)" class="icon text-grey" :icon=link.icon></v-btn>
                    <span class="texttt font-weight-light px-2 py-0 text-grey text-uppercase">{{link.text}}</span>
                </span>
                
                <div class="indicator"></div>
                
            </v-card>
        </v-app-bar>
        <v-navigation-drawer color="background" class="hidden-sm-and-up" v-model="drawer" location="left">
            <v-col class="d-flex flex-column" v-for="link in links" :key="link.target">
                <v-btn @click="scroll(link.target)" 
                :color= link.clr
                class="justify-start icon" variant="text"
                ><v-icon start>{{ link.icon }}</v-icon>{{ link.text }}</v-btn>
            </v-col>
        </v-navigation-drawer>
    </v-card>
</template>
<script>

export default {
    data: () => ({
        drawer: false,
        links:[
            {clr:"#76FF03",target:"home", text:"Home",style:"--clr: #76FF03", icon:"mdi-home-outline", trigger:false},
            {clr:"#00B0FF",target:"me", text:"About Me",style:"--clr: #00B0FF", icon:"mdi-account-circle-outline", trigger:false},
            {clr:"#00B0FF",target:"services", text:"Services",style:"--clr: #00B0FF", icon:"mdi-credit-card-outline", trigger:false},
            {clr:"#00B0FF",target:"gallery", text:"Showcase",style:"--clr: #00B0FF", icon:"mdi-image-multiple-outline", trigger:false},
            {clr:"#FF3D00",target:"contact", text:"Contact",style:"--clr: #FF3D00", icon:"mdi-email-outline", trigger:false},
        ]
    }),
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods:{
        scroll(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"});
        }
    }
}
</script>
<style lang="scss" scoped>
.texttt{
    position: absolute;
    font-size: 0.3em;
    letter-spacing: 1px;
    transform: translateY(-20px);
    opacity: 0;
}
.list.active .texttt{
    font-size: 0.7em;
    transform: translateY(-12px);
    opacity: 1;
    color: black !important;
    transition: 0.6s;
    border-radius: 10px;
    background: var(--clr);
}
.list{
    width: 64px !important;
    background: transparent;
    z-index: 1000 !important;
    transition: 0.5s;
}

.icon{
    font-size: 1.2em;
    background: transparent !important;
}
.active.list .icon{
    color: var(--clr) !important;
    transform: translateY(32px);
    transition: 0.6s;
}
.indicator{
    width: 64px;
    height: 64px;
    background: #111;
    position: absolute;
    border-radius: 50%;
    transition: 0.5s;
}
.indicator::before,.indicator::after{
    content: '';
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    width: 24px;
    height: 24px;
}
.indicator::before{
    top: 32px;
    left: -22px;
    box-shadow: 9px -11px #111;
}
.indicator::after{
    top: 32px;
    right: -22px;
    box-shadow: -9px -11px #111;
}
.list:nth-child(2).active~.indicator {
    transform: translateX(calc(64px * 0)) translateY(32px);
    transition: 0.5s;
}
.list:nth-child(3).active~.indicator {
    transform: translateX(calc(64px * 1)) translateY(32px);
    transition: 0.5s;

}
.list:nth-child(4).active~.indicator {
    transform: translateX(calc(64px * 2)) translateY(32px);
    transition: 0.5s;
}
.list:nth-child(5).active~.indicator {
    transform: translateX(calc(64px * 3)) translateY(32px);
    transition: 0.5s;
}
.list:nth-child(6).active~.indicator {
    transform: translateX(calc(64px * 4)) translateY(32px);
    transition: 0.5s;
}
</style>