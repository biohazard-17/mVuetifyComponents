<template>
    <v-card >
        <v-app-bar color="bg1" style="overflow: visible;" >
            <v-app-bar-nav-icon :ripple="false" class="hidden-sm-and-up" icon="mdi-dots-vertical" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title color="accent" style="font-size: 1.5em;">BIOHAZARD_17</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-card flat color="transparent" class="hidden-sm-and-down  d-sm-flex px-5 me-5 rounded-0" style="height: 64px;overflow: visible;">
                <span 
                :class="{ active: home }" v-on:mouseenter="home=true" v-on:mouseleave="home=false" 
                style="--clr:#76FF03" class="home list justify-center align-center d-flex">
                    <v-btn @click="scroll('home')" class="icon text-grey" icon="mdi-home-outline"></v-btn>
                    <span class="texttt text-grey text-uppercase">Home</span>
                </span>
                <span 
                :class="{ active: account }" v-on:mouseenter="account=true" v-on:mouseleave="account=false" 
                style="--clr:#00B0FF" class="list justify-center align-center d-flex">
                    <v-btn @click="scroll('me')" class="icon text-grey" icon="mdi-account-circle"></v-btn>
                    <span class="texttt text-grey text-uppercase">Me</span>
                </span>
                <span 
                :class="{ active: servises }" v-on:mouseenter="servises=true" v-on:mouseleave="servises=false" 
                style="--clr:#00B0FF" class="list justify-center align-center d-flex">
                    <v-btn class="icon text-grey" icon="mdi-credit-card-outline"></v-btn>
                    <span class="texttt text-grey text-uppercase">services</span>
                </span>
                <span :class="{ active: gallery }" v-on:mouseenter="gallery=true" v-on:mouseleave="gallery=false" 
                style="--clr:#00B0FF"
                class="list justify-center align-center d-flex">
                    <v-btn  class="icon text-grey" icon="mdi-image-multiple-outline"></v-btn>
                    <span class="texttt text-grey text-uppercase">showcase</span>
                </span>
                <span :class="{ active: contact }" v-on:mouseenter="contact=true" v-on:mouseleave="contact=false" 
                style="--clr:#FF3D00"
                class="list justify-center align-center d-flex">
                    <v-btn  class="icon text-grey" icon="mdi-email-outline"></v-btn>
                    <span class="texttt text-grey text-uppercase">contact</span>
                </span>
                <div class="indicator"></div>
                
            </v-card>
        </v-app-bar>
        <v-navigation-drawer color="background" class="hidden-sm-and-up" v-model="drawer" location="left">
            <v-col class="d-flex flex-column">
                <v-btn @click="scroll('home')" color="accent" class="justify-start " variant="text" prepend-icon="mdi-home-outline">home</v-btn>
                <v-btn @click="scroll('me')" color="text2" class="justify-start " variant="text" prepend-icon="mdi-account-circle-outline">me</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-credit-card-outline">Services</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-image-multiple-outline">Showcase</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-email-outline">Contact</v-btn>
            </v-col>
        </v-navigation-drawer>
    </v-card>
</template>
<script>

export default {
    data: () => ({
        drawer: false,
        home: false,
        account: false,
        servises: false,
        gallery: false,
        contact: false,
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
<style scoped>
.texttt{
    position: absolute;
    font-size: 0.3em;
    font-weight: 300;
    letter-spacing: 1px;
    transform: translateY(-20px);
    opacity: 0;
    
}
.list.active .texttt,.home.list.active .texttt{
    font-size: 0.75em;
    transform: translateY(-12px);
    opacity: 1;
    color: white !important;
    transition: 0.6s;
    padding: 0px 10px;
    border-radius: 10px;
    color: black !important;
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
.active.list .icon, .home.active.list .icon{
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
    transform: translateY(32px);
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