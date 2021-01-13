<template>
    <div class="mt-5 pt-5">
        <h2 class="font-weight-bold"> ACCÈS GÉRANT </h2>
        <div class="mt-3">
            <b-form-group id="input-group-2" label-for="input-2" class="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                <b-form-input class="border border-light mail-input" id="input-2" placeholder="Adresse e-mail"
                    v-model="email" required>
                </b-form-input>
                <b-form-input class="border border-light rounded-bottom pwd-input" style="margin-top: -1px;"
                    id="input-2" placeholder="Mot de passe" type="password" v-model="pwd" required>
                </b-form-input>
                <b-button variant="success col-12 mt-3 login-btn">Connexion
                </b-button>
                <p class="mt-2">Mot de passe oublié ?</p>
            </b-form-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        mounted() {
            this.$store.state.actualPage = 3
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mail-input {
        border-radius: 3px 3px 0px 0px;
    }

    .pwd-input {
        border-radius: 0px 0px 3px 3px;
    }
</style>