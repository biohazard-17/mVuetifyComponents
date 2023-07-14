<template>
    <v-main>
        <v-card class="bg-primary2" height="100%">
            <div class="text-center">Magic Menu version A</div>
            <div class="bg-primary d-flex align-center justify-center mb-16">
                <MagicMenuA></MagicMenuA>
            </div>
            <div class="text-center">Magic Menu version B</div>
            <div class="bg-primary d-flex align-center justify-center mb-16">
                <MagicMenuB></MagicMenuB>
            </div>
            <div class="text-center">Magic Menu version C</div>
            <div class="bg-primary d-flex align-center justify-center mb-16">
                <MagicMenuC></MagicMenuC>
            </div>
            <div class="text-center">Magic Menu version D</div>
            <div class="bg-primary d-flex align-center justify-center mb-16">
                <MagicMenuD></MagicMenuD>
            </div>
        </v-card>
    </v-main>
</template>
<script setup>
import MagicMenuA from '@/components/MagicMenuA.vue';
import MagicMenuB from '@/components/MagicMenuB.vue';
import MagicMenuC from '@/components/MagicMenuC.vue';
import MagicMenuD from '@/components/MagicMenuD.vue';
</script>