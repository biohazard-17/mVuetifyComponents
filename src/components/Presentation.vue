<template>
    <v-card class="w-100 content-border d-flex align-center justify-center py-16">
        <v-row>
            <v-col class="d-sm-flex align-center justify-center flex-column text-center">
                <div class="text-h3 pb-2">Hello there,</div>
                <div class="text-h3 text-accent">I'am Reynier</div>
                <div class="text-h6 font-weight-thin" style="letter-spacing: 2px !important;">digital artist &designer</div>
            </v-col>
            <v-col class="mb-10 d-flex align-center justify-center ">
                <div>
                    <v-avatar 
                    style="background:#263238; border-radius: 50%;" 
                    size="200"
                    image="../assets/avatar-black.svg">
                    </v-avatar>
                </div>
            </v-col>
        </v-row>
        <v-row class="d-block"
        style="position: absolute; bottom: 3em;">
            <v-btn 
            prepend-icon="mdi-email-outline" 
            color="complementary" 
            variant= "outlined"
            rounded>
                Contact me
            </v-btn>
        </v-row>
    </v-card>
</template>
<script>
export default{

}
</script>
<style scoped>
.content-border{
    background: #000;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
    color: white;
}
</style>