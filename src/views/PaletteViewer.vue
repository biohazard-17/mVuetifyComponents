<template>
    <v-main>
        <v-row>
            <v-col cols="1" >
                <div class="d-flex flex-column align-center justify-center bg-background w-100">
                    <div v-for="(color, index) in colors" :key="index" class="color-item ma-1 " :class="color">
                        <v-tooltip activator="parent" location="end">{{ color }}</v-tooltip>
                    </div>
                </div>
            </v-col>
            <v-col cols="11">
                <div class="d-flex flex-column py-6" >
                    <v-card class="d-flex flex-column" rounded="lg">
                        <span class="text-h3 text-center bg-red">Buttons</span>
                        <div class="d-flex justify-space-evenly py-3">
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="text">text</v-btn>
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="tonal">tonal</v-btn>
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="outlined">outlined</v-btn>
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="plane">plane</v-btn>
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="elevated">elevated</v-btn>
                            <v-btn color="accent" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="flat">flat</v-btn>
                        </div>
                        <div class="d-flex justify-space-evenly py-3">
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="text">text</v-btn>
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="tonal">tonal</v-btn>
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="outlined">outlined</v-btn>
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="plane">plane</v-btn>
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="elevated">elevated</v-btn>
                            <v-btn color="analogous" append-icon="mdi-home" prepend-icon="mdi-magnify" variant="flat">flat</v-btn>
                        </div>
                    </v-card>
                </div>
                <div class="d-flex flex-column py-6">
                    <v-card color="background" class="d-flex flex-column" rounded="lg">
                        <span class="text-h3 text-center bg-red">Text boxes</span>
                        <div class="d-flex justify-space-evenly py-3">
                            <v-text-field label="Text-field" variant="outlined" type="text" color="analogous" size="compact"></v-text-field>
                            <v-text-field label="Text-field" type="password" color="analogous" size="compact"></v-text-field>
                        </div>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-main>
</template>
<script setup>
import { ref } from 'vue';



const customDarkColors = {
    background: "bg-background",
    success: "bg-success",
    error: "bg-error",
    warning: "bg-warning",
    info: "bg-info",
    accent: "bg-accent",
    triadic1: "bg-triadic1",
    triadic2: "bg-triadic2",
    tetradic1: "bg-tetradic1",
    tetradic2: "bg-tetradic2",
    tetradic3: "bg-tetradic3",
    analogous: "bg-analogous",
    brand: "bg-brand",
    textEmphasis: "bg-textEmphasis",
    textOpposite: "bg-textOpposite",
}
let colors = customDarkColors;
</script>
<style scoped>
.color-item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid white;
}
</style>
