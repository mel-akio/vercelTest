<template>
    <div class="login">
        <img class="col-md-6 col-xl-4 mb-3" alt="Black and White logo" src="../assets/bnw-logo.png">
        <b-form-group id="input-group-2" label-for="input-2" class="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
            <b-form-input class="border border-light mail-input" id="input-2" placeholder="Adresse e-mail" 
            v-model="email" required>
            </b-form-input>
            <b-form-input class="border border-light rounded-bottom pwd-input" style="margin-top: -1px;" id="input-2" placeholder="Mot de passe" type="password"
            v-model="pwd" required>
            </b-form-input>
            <b-button variant="success col-12 mt-3 login-btn" @click="$router.push('/orders/new-orders')">Connexion</b-button>
            <p class="text-light mt-2">Mot de passe oublié ?</p>
        </b-form-group>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                email: 'restaurant@blackandwhite.com',
                pwd: '12345678'
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        background-color: black;
        height: 100vh;
        padding-top: 25vh;
    }

    .login-btn {
        font-size: 1.2em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        border-radius: 3px;
    }

    .mail-input {
        border-radius: 3px 3px 0px 0px;
    }
    .pwd-input {
        border-radius: 0px 0px 3px 3px;
    }
</style>