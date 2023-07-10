<template>
  <v-app dark1 class="mwrap" >
    <!--<v-main class="bg-analogous3">
      <Presentation id="home"></Presentation>
      <div class="mt-5 mb-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#304FFE" fill-opacity="1" d="M0,224L34.3,202.7C68.6,181,137,139,206,106.7C274.3,75,343,53,411,53.3C480,53,549,75,617,117.3C685.7,160,754,224,823,234.7C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>

      <AboutMeCopy id="me"></AboutMeCopy>
      <div class="mt-n2 mb-5" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#304FFE" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,197.3C274.3,181,343,139,411,106.7C480,75,549,53,617,74.7C685.7,96,754,160,823,165.3C891.4,171,960,117,1029,128C1097.1,139,1166,213,1234,240C1302.9,267,1371,245,1406,234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
      </div>
      
      <Services id="services"></Services>
      
      <div class="mt-n2 mb-5" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#304FFE" fill-opacity="1" d="M0,96L34.3,128C68.6,160,137,224,206,224C274.3,224,343,160,411,112C480,64,549,32,617,37.3C685.7,43,754,85,823,106.7C891.4,128,960,128,1029,160C1097.1,192,1166,256,1234,240C1302.9,224,1371,128,1406,80L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
      
      <Showcase id="gallery"></Showcase>
      
      <div class="mt-n2 mb-5" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#304FFE" fill-opacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,101.3C274.3,96,343,96,411,112C480,128,549,160,617,149.3C685.7,139,754,85,823,58.7C891.4,32,960,32,1029,74.7C1097.1,117,1166,203,1234,245.3C1302.9,288,1371,288,1406,288L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
      </div>
    </v-main>
    <VMagicMenuCopy></VMagicMenuCopy>-->
    <!--<PokeApi class="h-100"></PokeApi>-->
    <Login></Login>
  </v-app>
</template>

<script setup>
//import Presentation from './components/Presentation.vue'
//import AboutMeCopy from './components/AboutMeCopy.vue';
//import VMagicMenuCopy from './components/VMagicMenuCopy.vue';
//import Services from './components/Services.vue';
//import Showcase from './components/Showcase.vue';
import PokeApi from './components/PokeApi.vue';
import Login from './components/Login.vue';

document.title = "BH_17"
</script>
<style scoped>
.mwrap{
  background-image: url('./assets/bg_1s.svg') !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
}
</style>