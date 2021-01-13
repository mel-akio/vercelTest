<template>
    <div class="row m-0 mt-3">
        <div class="text-left col-md-5 mb-2">
            <p class="h5 pt-5 mb-4">Commandes</p>
            <div class="orders-list">
                <div class="slide-in-blurred-bottom" v-for="(order, key) in $store.state.orders" :key="key">
                    <transition name="slide-fade">
                        <b-button v-if="order.state < 2" @click="$store.state.selectedOrder = key"
                            variant="col-12 py-2 mt-2" class="col-12 text-left shadow-sm" :class="{'btn-warning' : (order.state == 1), 'btn-light' : (order.state == 0), 
                            'border-select' : ($store.state.selectedOrder == key)}">
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
                            <small class="ml-3 px-1">
                                <div class="dot" :class="{'dot-red' : (order.state == 0), 'dot-blue' : (order.state == 1)}"></div>
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
        name: 'NewOrders',
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
            this.$store.state.actualPage = 1
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .note {
        background-color: rgb(255, 17, 0);
    }

    .dot {
        margin-top: 8px;
        height: 7px;
        width: 7px;
        border-radius: 100%;
        position: absolute;
    }

    .dot-red {
        background-color: #ff0000;
        filter: drop-shadow(0 0 3px #ff1100);
    }
    .dot-blue {
        background-color: #00b3ff;
        filter: drop-shadow(0 0 3px #00b3ff);
    }

    .orders-list {
        height: calc(100vh - 130px);
        overflow: scroll;
    }

    .border-select {
        border: 3px solid #343A40 !important;
    }

    .btn {
        border-radius: 2px;
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

    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(-100%);
        margin-bottom: -75px;
        opacity: 0;

    }

    .slide-in-blurred-bottom {
        -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-bottom {
        0% {
            -webkit-transform: translateY(130vh) scaleY(2.5) scaleX(0.2);
            transform: translateY(130vh) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            opacity: 0;
        }

        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-bottom {
        0% {
            -webkit-transform: translateY(130vh) scaleY(2.5) scaleX(0.2);
            transform: translateY(130vh) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            opacity: 0;
        }

        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 1;
        }
    }
</style>