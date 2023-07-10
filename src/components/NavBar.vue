<template>
    <v-card>
        <v-app-bar color="background">
            <v-app-bar-nav-icon icon="mdi-dots-vertical" class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Biohazard_17</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down" >
                <v-btn color="accent" variant="text" prepend-icon="mdi-home-outline">home</v-btn>
                <v-btn variant="text" prepend-icon="mdi-account-circle-outline">about</v-btn>
                <v-btn variant="text" prepend-icon="mdi-credit-card-outline">Services</v-btn>
                <v-btn variant="text" prepend-icon="mdi-image-multiple-outline">Showcase</v-btn>
                <v-btn variant="text" prepend-icon="mdi-email-outline">Contact</v-btn>
            </div>
        </v-app-bar>
        <v-navigation-drawer color="background" class="hidden-md-and-up" v-model="drawer" location="left">
            <v-col class="side_navigation">
                <v-btn color="accent" class="justify-start " variant="text" prepend-icon="mdi-home-outline">home</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-account-circle-outline">about</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-credit-card-outline">Services</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-image-multiple-outline">Showcase</v-btn>
                <v-btn color="text2" class="justify-start " variant="text" prepend-icon="mdi-email-outline">Contact</v-btn>
            </v-col>
        </v-navigation-drawer>


    </v-card>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
        }
    }
}
</script>
<style scoped>
.side_navigation{
    display: flex;
    flex-direction: column;
}
</style>