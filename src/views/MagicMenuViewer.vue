<template>
    <v-main>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Magic Menu type A
                </v-expansion-panel-title>
                <v-expansion-panel-text class="d-flex flex-row ">
                    <div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu colorized side="top"></MagicMenu>
                            </v-card>
                        </div>
                        <div class="d-flex justify-space-between">
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu  side="start"></MagicMenu>
                                </v-card>
                            </div>
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu  colorized side="end"></MagicMenu>
                                </v-card>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu item-color="white" side="bottom"></MagicMenu>
                            </v-card>
                        </div>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Magic Menu type B
                </v-expansion-panel-title>
                <v-expansion-panel-text class="d-flex flex-row bg-primary2">
                    <div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B" variant="B" colorized side="top"></MagicMenu>
                            </v-card>
                        </div>
                        <div class="d-flex justify-space-between">
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="B"  side="start"></MagicMenu>
                                </v-card>
                            </div>
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="B" colorized side="end"></MagicMenu>
                                </v-card>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B" variant="B" item-color="white" side="bottom"></MagicMenu>
                            </v-card>
                        </div>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Magic Menu type C
                </v-expansion-panel-title>
                <v-expansion-panel-text class="d-flex flex-row bg-primary2">
                    <div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B" variant="C" colorized side="top"></MagicMenu>
                            </v-card>
                        </div>
                        <div class="d-flex justify-space-between">
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="C" side="start"></MagicMenu>
                                </v-card>
                            </div>
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center py-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="C" colorized side="end"></MagicMenu>
                                </v-card>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B"  variant="C" item-color="white" side="bottom"></MagicMenu>
                            </v-card>
                        </div>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Magic Menu type D
                </v-expansion-panel-title>
                <v-expansion-panel-text class="d-flex flex-row bg-primary2">
                    <div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B" variant="D" colorized side="top"></MagicMenu>
                            </v-card>
                        </div>
                        <div class="d-flex justify-space-between">
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center my-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="D" side="start"></MagicMenu>
                                </v-card>
                            </div>
                            <div class="d-flex flex-column justify-start mb-10">
                                <v-card class="bg-primary d-flex justify-center my-10" style="overflow: visible;">
                                    <MagicMenu :indicator-b-g="B" variant="D" colorized side="end"></MagicMenu>
                                </v-card>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-start mb-10">
                            <v-card class="bg-primary d-flex justify-center" style="overflow: visible;">
                                <MagicMenu :indicator-b-g="B"  variant="D" item-color="white" side="bottom"></MagicMenu>
                            </v-card>
                        </div>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            
        </v-expansion-panels>
        <div style="height: 32px;"></div>
    </v-main>
</template>

<script setup>
import { colors } from '@/mcolors';
import MagicMenu from '@/components/MagicMenu.vue';
import {ref} from 'vue'

const B = ref(colors.greyBlue.darken3)
</script>

<style scoped></style>