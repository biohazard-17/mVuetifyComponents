<template>
    <v-card class="w-100 d-flex justify-center pa-2 bg-transparent" flat>
        <v-card class="pa-0 mwrapper rounded-0" flat>
            <v-img width="300px" height="300px" src="DI_2.png"></v-img>
            <div class="mcover"></div>
        </v-card>
    </v-card>
</template>

<script setup>

</script>
<style scoped>
.mwrapper{
    width: 300px !important;
    height: 300px !important;
    max-width: 300px !important;
    max-height: 300px !important;
    border-radius: 50% !important;
}
.mcover{
    width: 300px !important;
    height: 300px !important;
    background-image: url("../assets/avatar-frame-1.svg");
    background-size: 300px;
    position: absolute;
    top: 0;
    left: 0;
}

</style>