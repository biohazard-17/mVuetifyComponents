<template>
    <v-card>
        <v-app-bar color="primary" flat style="border-bottom: 3px solid black;">
            <v-toolbar-title>Vuetify 3 components viewer</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn ><router-link to="/" class="text-decoration-none text-accent">Home</router-link></v-btn>
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" icon="mdi-dots-vertical"></v-btn>
                </template>
                <v-list class="bg-primary">
                    <v-list-item>
                        <v-btn color="primary2" ><router-link to="/Menus" class="text-decoration-none text-analogous text-white">Magic Menus</router-link></v-btn>
                        <v-btn color="primary2" ><router-link to="/SidePanels" class="text-decoration-none text-analogous text-white">Side Panels</router-link></v-btn>
                        <v-btn color="primary2" ><router-link to="/MagicMenus" class="text-decoration-none text-analogous text-white">MagicMenus</router-link></v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        
        <router-view></router-view>

    </v-card>
</template>

<script setup>

</script>
<style scoped>

</style>