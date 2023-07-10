<template>
    <v-card flat class="d-flex ma-auto bg-transparent rounded-0" height="500px" width="300px">
        <v-card :class="{ active: login }" flat class="mlogin d-none w-100 h-100 pa-4 pt-6 rounded-0 bg-transparent">
            <div class="text-h3 text-center text-white">long time no see</div>
            <v-form v-model="formLogin" class=" pt-3 bg-transparent" flat @submit.prevent="validateLogin">
                <v-text-field v-model="lUser" :rules="required" clearable density="compact" label="User or Email address"
                    prepend-inner-icon="mdi-email-outline" variant="outlined" color="text">
                </v-text-field>
                <v-text-field v-model="lPassword" :rules="required" clearable density="compact" label="Password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    color="text">
                </v-text-field>
                <v-btn :disabled="!formLogin" type="submit" class="w-100 mb-7" variant="outlined" color="accent">Continue</v-btn>
                <div class="or text-center ">
                    <span>or</span>
                    <div class="line1"></div>
                    <div class="line2"></div>
                </div>
                <v-row class="d-flex justify-center">
                    <v-col cols="6" class="d-flex justify-center">
                        <v-btn class="w-100" variant="text">
                            <v-avatar style="width: 32px !important; height: 32px !important;" image="google.svg"></v-avatar>
                        </v-btn>
                    </v-col>
                    <v-col cols="6" class="d-flex justify-center">
                        <v-btn class="w-100" variant="text">
                            <v-avatar style="width: 32px !important; height: 32px !important;" image="facebook.svg"></v-avatar>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>

            <div class="d-flex flex-column mt-auto mb-5">
                <span class="d-flex text-black">Don't have an account:</span>
                <v-btn @click="login = false" color="complementary" variant="outlined">Register</v-btn>
            </div>
        </v-card>
        <v-card :class="{ active: !login }" flat class="mregister d-none w-100 h-100 pa-4 pt-6 rounded-0 bg-transparent">
            <div class="text-h3 text-center text-black">Welcome</div>
            <v-form v-model="form" class="pt-3 bg-transparent" flat>
                <v-text-field v-model="user" :rules="required" clearable density="compact" label="Username"
                    prepend-inner-icon="mdi-account-outline" variant="outlined" color="white">
                </v-text-field>
                <v-text-field v-model="email" required :rules="emailRules" clearable density="compact" label="Email"
                    type="email" placeholder="johndoe@gmail.com" prepend-inner-icon="mdi-email-outline" variant="outlined"
                    color="white">
                </v-text-field>
                <v-text-field v-model="pass" :rules="passwordRules" clearable density="compact" label="Password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    color="white">
                </v-text-field>
                <v-text-field v-model="confirMPass" :rules="confirmPasswordRules" clearable density="compact" label="Repeat Password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    color="white">
                </v-text-field>
                <v-btn :disabled="!form" type="submit" class="w-100 mb-7" variant="outlined"
                    color="accent2">Continue</v-btn>
            </v-form>
            <div class="d-flex flex-column mt-auto mb-5">
                <span class="d-flex text-black">Already registered:</span>
                <v-btn @click="login = true" color="complementary" variant="outlined">Login</v-btn>
            </div>
        </v-card>

    </v-card>
</template>
<script setup>
import { ref } from 'vue';
//ref data
const formLogin = ref(false)
const lUser = ref("");
const lPassword = ref("");

let form = ref(false);
let email = ref("");
let user = ref("");
let pass = ref("");
let confirMPass = ref("");

let visible = ref(false)
let login = ref(true);

const emailRules = [
    value => {
        if (value) return true;
        return 'Field is required';
    },
    value => {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) return true
        return 'Invalid E-mail address';
    }
];
const confirmPasswordRules = [
    value => {
        if (value) return true;
        return 'Field is required';
    },
    value => {
        if (value === pass.value) return true;
        return "Passwords do not match";
    }
];
const passwordRules = [
    value => {
        if (value) return true;
        return 'Field is required';
    },
    value => {
        if (value.length >= 8) return true
        return "Password must contain at least 8 characters"
    },
    value => {
        if (/[A-Z]+/.test(value)) return true;
        return "Password must contain 1 capital letter at least"
    },
    value => {
        if (/[a-z]+/.test(value)) return true;
        return "Password must contain 1 small letter at least"
    },
    value => {
        if (/[_*.$"]/.test(value)) return true;
        return "Password must contain 1 special character at least (i.e: (_*.$\"))"
    },
    value => {
        if (/[0-9]/.test(value)) return true;
        return "Password must contain 1 digit"
    },
];
const required = [
    value => !!value || 'Field is required'
];

function validateLogin(){
    console.log(lUser.value);
    console.log(lPassword.value);
}

</script>
<style scoped>
.mregister{
    border-radius: 0 40px !important;
}
.mlogin{
    border-radius: 40px 0 !important;
}
.active {
    display: flex !important;
    flex-direction: column;
    backdrop-filter: blur(7px) saturate(90%);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%,rgba(255, 255, 255, 0.2) 5%,rgba(255, 255, 255, 0.2) 95% ,rgba(255, 255, 255, 0.3) 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.3);
    
}
.or {
    display: flex;
    flex-direction: column;
}

.or .line1 {
    width: 40%;
    background: white;
    height: 1px;
    position: absolute;
    left: 16px;
}

.or .line2 {
    width: 40%;
    background: white;
    height: 1px;
    right: 16px;
    position: absolute;
}

.or span {
    position: relative;
    color: white;
    transform: translateY(-15px);
    font-size: 1.2em;
    
}
</style>