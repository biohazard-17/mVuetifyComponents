<template>
    <v-card flat color="analogous2" class="pa-5 rounded-0">
        <div class="text-h2 text-md-h1 font-weight-black text-center text-accent2 mb-3">Who am I?</div>
        <v-row>
            <v-col cols="12" sm="4" lg="6" class="d-flex justify-center align-center ">
                <div><v-img src="../assets/avatar-black.svg" :aspect-ratio="1 / 1" :width="300"></v-img></div>
            </v-col>
            <v-col cols="12" sm="8" lg="6" class="d-flex flex-column align-center justify-center">
                <div class="text-h6 text-md-h5 text-center wrap my-3">
                    The name: <span class="text-accent">Reynier López</span>
                    , for the world: <span class="text-accent">BIOHAZARD_17</span>
                    I'm a self taught Grafic Designer, UI/UX enthusiast, Digital Ilustrator, AI researcher, and a
                    Programming Teacher.
                    A forever student, always learning, always improving. I've been working in the field of Grafic Design
                    for a long
                    time now, trying to re-invent the wheel in a better fashion.
                    In my humble opinion, making digital art is not work, is a way of living
                </div>
            </v-col>
        </v-row>
        <v-row>

            <div class="text-h4 text-md-h3 text-center w-100">SKILLS:</div>
            <div class="scale text-h5 text-center w-100 pt-4 text-center">
                <span class="text-accent4 pe-16">Low </span><span class="px-3"></span><span
                    class="text-accent ps-16">High</span>
            </div>
            <div class="scale text-h5 text-center w-100 pb-4">&#128169; | &#128546; | &#128528; | &#128580; | &#128526;</div>
            <v-expansion-panels variant="inset">
                <v-expansion-panel v-for="skill in skills" :key="skill.id"
                    style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        {{ skill.name }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item v-for="li in skill.list"><span v-html="li.a"></span>{{ li.b }}</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
        <v-row class="py-4">
            <div class="text-h4 text-md-h3 text-center w-100 mt-1 text-uppercase">Comunication:</div>
            <v-row class="my-1">
                <v-col v-for="lang in langs" :key="lang.lang" cols="12" sm="4"
                    class="d-flex align-center flex-column justify-center">
                    <div class="text-h5 font-weight-bold text-white text-center mb-4">{{ lang.lang }}</div>
                    <v-progress-circular :rotate=lang.deg :model-value="lang.level" :size="200" :width="15" :color=lang.clr
                        class="font-weight-bold">
                        {{ lang.text }}
                    </v-progress-circular>
                </v-col>
            </v-row>
        </v-row>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';
const langs = ref([
    { deg: 35,clr: "#76FF03", text: "Native", level: 100, lang: "Spanish" },
    { deg: 158,clr: "#00B0FF", text: "B1 certificated", level: 40, lang: "English" },
    { deg: 278,clr: "#D50000", text: "Below A1", level: 10, lang: "German" }
]);
const skills = ref([
    {
        name: "Digita arts", id: "DA", list: [
            { a: "&#128526; ", b: "Low Poly Drawing" },
            { a: "&#128580; ", b: "Image Editing" },
            { a: "&#128528; ", b: "Color Theory" },
            { a: "&#128546; ", b: "Branding" },
            { a: "&#128526; ", b: "Font Making" },
        ]
    },
    {
        name: "Grafic Design", id: "DD", list: [
            { a: "&#128526; ", b: "Modeling" },
            { a: "&#128580; ", b: "Sculpting" },
            { a: "&#128580; ", b: "Texturing" },
            { a: "&#128528; ", b: "UV Unwrap" },
            { a: "&#128546; ", b: "Retopology" },
            { a: "&#128580; ", b: "Low Poly Modeling" },
            { a: "&#128546; ", b: "Rendering" },
            { a: "&#128169; ", b: "Compositing" },
        ]
    },
    {
        name: "Computer Science", id: "CS", list: [
            { a: "&#128580; ", b: "Programming" },
            { a: "&#128580; ", b: "ML" },
            { a: "&#128580; ", b: "Reinforcement Learning" },
            { a: "&#128528; ", b: "UI/UX" },
            { a: "&#128546; ", b: "Database" },
        ]
    },
    {
        name: "Softwares", id: "SW", list: [
            { a: "&#128526; ", b: "Blender" },
            { a: "&#128526; ", b: "Inkscape" },
            { a: "&#128528; ", b: "Photoshop" },
            { a: "&#128580; ", b: "Zbrush" },
            { a: "&#128580; ", b: "QTcreator" },
            { a: "&#128580; ", b: "MS Office" },
            { a: "&#128580; ", b: "Font Forge" },
        ]
    },
    {
        name: "Programming Languages", id: "PL", list: [
            { a: "&#128580; ", b: "C++" },
            { a: "&#128546; ", b: "C#" },
            { a: "&#128528; ", b: "Py" },
            { a: "&#128528; ", b: "Java" },
            { a: "&#128528; ", b: "JS" },
        ]
    },
]);
</script>
<style scoped></style>