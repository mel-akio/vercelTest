<template>
    <div class="row m-0 mt-3">
        <div class="text-left col-md-5 mb-2">
            <p class="h5 pt-5 mb-4">Historique des commandes</p>
            <div class="orders-list">
                <div v-for="(order, key) in $store.state.orders" :key="key">
                    <transition name="slide-fade">
                        <b-button v-if="order.state >= 2" @click="$store.state.selectedOrder = key" variant="col-12 py-2 mt-2"
                            class="col-12 text-left shadow-sm btn-success"
                            :class="{'border-select' : ($store.state.selectedOrder == key)}">
                            <div class="d-flex justify-content-start mt-2">
                                <div class="text-medium ml-3 m-0 p-0">
                                    {{order.id}}
                                </div>
                                <div class="h5 ml-4 m-0 p-0 font-weight-bold">
                                    {{order.name}}
                                </div>
                                <div class="text-right col m-0 p-0 font-weight-bold">
                                    {{order.hourOfOrder}}
                                </div>
                            </div>
                            <small class="ml-3">
                                {{states[order.state]}}
                            </small>
                        </b-button>
                    </transition>
                </div>
            </div>
        </div>
        <div class="col col-md-7 text-left">
            <p class="h5 pt-5 mb-4">Détails</p>
            <OrderDetails :order="$store.state.orders[$store.state.selectedOrder]"></OrderDetails>
        </div>
    </div>
</template>

<script>
    import OrderDetails from './OrderDetails';

    export default {
        components: {
            OrderDetails
        },
        name: 'OrdersHistory',
        data: function () {
            return {
                states: [
                    'En attente',
                    'Préparation',
                    'Terminé',
                ]
            }
        },
        mounted() {
            this.$store.state.actualPage = 2
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        border-radius: 2px;
    }

    .orders-list {
        height: calc(100vh - 130px);
        overflow: scroll;
    }

    .border-select {
        border: 3px solid #218838 !important;
    }

    .black {
        background-color: black;
        color: #f5f5f5;
    }

    .black:hover {
        color: #ffffff;
    }

    .bottom-button {
        position: absolute;
        bottom: 10px;
        left: 0;
    }
</style>