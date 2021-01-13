<template>
    <div class="bg-light shadow-sm order-details">
        <div :class="{'bg-warning' : (order.state == 1), 'bg-success' : (order.state == 2)}"
            style="height: 7px; background-color: rgb(208, 208, 208);"></div>
        <div class="d-flex justify-content-between border-bottom mb-3 py-2 px-4">
            <div>
                <div class="h5 font-weight-bold">
                    {{ order.name }}
                </div>
                <div class="h5">
                    {{ order.id }}
                </div>
            </div>
            <div>
                <div class="h5 font-weight-bold">
                    {{ order.hourOfOrder }}
                </div>
                <div class="h5 text-secondary">
                    {{ order.timeElapsed }}
                </div>
            </div>
        </div>
        <div class="col-12 px-4" id="articles" v-for="(item, key) in order.items" :key="key">
            <div class="d-flex justify-content-start mb-2">
                <div class="h5 font-weight-bold mr-4">
                    {{ item.similarItems }}
                </div>
                <div class="col-12">
                    <div class="h5 font-weight-bold"> {{ item.mainCourse }}</div>
                    <div v-if="item.sideDish" class="ml-3">- {{ item.sideDish }}</div>
                    <div v-if="item.drink" class="ml-3">- {{ item.drink }}</div>
                    <div v-if="item.note" class="note p-1 pl-3">
                        <b-icon icon="exclamation-circle" class="mr-2"></b-icon> {{ item.note }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="order.state == 0" class="mt-4 bottom-button col">
            <div class="position-relative text-center">
                <b-button variant="dark rounded-0 py-2 px-4" class="black" @click="order.state = 1;">
                    <h4>
                        <b-icon icon="play" class="pt-1 mr-1"></b-icon>Commencer
                    </h4>
                </b-button>
            </div>
        </div>
        <div v-else-if="order.state == 1" class="mt-4 bottom-button col">
            <div class="position-relative text-center">
                <b-button variant="dark rounded-0 py-2 px-4" class="black" @click="order.state = 2;">
                    <h4>
                        <b-icon icon="check2-circle" class="pt-1 mr-2"></b-icon>Commande prête
                    </h4>
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrderDetails',
        props: {
            order: Object
        },
        methods: {

        }

    }
</script>

<style scoped>
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

    .order-details {
        height: calc(100vh - 130px);
        overflow: scroll;
    }

    .bottom-button {
        position: absolute;
        bottom: 1em;
        left: 0;
    }

    .note {
        background-color: rgba(196, 41, 41, 0.365);
    }
</style>