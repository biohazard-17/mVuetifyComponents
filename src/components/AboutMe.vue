<template>
    <v-card flat color="transparent" class="pa-5">
        <v-row>
            <div class="text-h2 text-md-h1 font-weight-black text-center text-accent2">Who am I?</div>
            <v-divider :thickness="2" color="accent2"></v-divider>
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

            <v-divider :thickness="2" color="accent2"></v-divider>
        </v-row>
        <v-row>

            <div class="text-h4 text-md-h3 text-center w-100">SKILLS:</div>
            <div class="scale text-h5 text-center w-100 pt-4 text-center">
                <span class="text-accent4 pe-16">Low </span><span class="px-3"></span><span
                    class="text-accent ps-16">High</span>
            </div>
            <div class="scale text-h5 text-center w-100 pb-4">
                &#128169; | &#128546; | &#128528; | &#128580; | &#128526;
                <!--💩         😥        😐          🙄         😎-->
            </div>
            <v-expansion-panels variant="inset">
                <v-expansion-panel style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        Digital Arts
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item prepend-icon="mdi-star">Low Poly Drawing</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Image Editing</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Color Theory</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Branding</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Font Creation</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        Grafic Design
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item prepend-icon="mdi-star">Modeling</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Sculpting</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Texturing</v-list-item>
                            <v-list-item prepend-icon="mdi-star">UV unwrap</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Retopology</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Low poly</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Rendering</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Compositing</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        Computer Science
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item prepend-icon="mdi-star">Programming</v-list-item>
                            <v-list-item prepend-icon="mdi-star">ML</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Reinforcement learning</v-list-item>
                            <v-list-item prepend-icon="mdi-star">UI/UX</v-list-item>
                            <v-list-item prepend-icon="mdi-star">DataBase Design</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        Softwares
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item prepend-icon="mdi-star">Blender</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Inkscape</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Photoshop</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Zbrush</v-list-item>
                            <v-list-item prepend-icon="mdi-star">QTcreator</v-list-item>
                            <v-list-item prepend-icon="mdi-star">MS Office</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Font Forge</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="max-height: 250px !important; overflow-y: auto;">
                    <v-expansion-panel-title class="text-accent4 text-subtitle-1 bg-transparent">
                        Programming Languages
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact">
                            <v-list-item prepend-icon="mdi-star">C++</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Py</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Js</v-list-item>
                            <v-list-item prepend-icon="mdi-star">Java</v-list-item>
                            <v-list-item prepend-icon="mdi-star">C#</v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
        <v-row class="py-4">
            <v-divider :thickness="2" color="accent2"></v-divider>
            <div class="text-h4 text-md-h3 text-center w-100 mt-1 text-uppercase">Comunication:</div>
            <v-row class="my-1">
                <v-col 
                v-for="lang in langs" :key="lang.lang"
                cols="12" md="4" class="d-flex align-center flex-column justify-center">
                    <div class="text-h5 font-weight-bold text-white text-center mb-4">{{ lang.lang }}</div>
                    <v-progress-circular
                    :model-value="lang.level"
                    :size="200"
                    :width="10"
                    :color=lang.clr
                    class="font-weight-bold">
                    {{ lang.text }}
                    </v-progress-circular>
                </v-col>
                
            </v-row>
            <v-divider :thickness="2" color="accent2"></v-divider>
        </v-row>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        langs:[
            {clr:"#76FF03",text:"Native", level:100, lang:"Spanish"},
            {clr:"#00B0FF",text:"B1 certificated", level:40, lang:"English"},
            {clr:"#D50000",text:"Below A1", level:10, lang:"German"}
        ],
    }),
}
</script>
<style scoped></style>