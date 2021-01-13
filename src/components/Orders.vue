<template>
  <div class="row m-0 orders-page">
    <div class="orders-bar">
      <div class="news-orders side-buttons rounded-top" :class="{'bg-dark' : ($store.state.actualPage == 1)}"
        @click="$router.push('/orders/new-orders')">
        <b-icon icon="receipt" class="text-light h3 icon-button"></b-icon>
      </div>
      <div class="news-orders side-buttons" :class="{'bg-dark' : ($store.state.actualPage == 2)}"
        @click="$router.push('/orders/history')">
        <b-icon icon="clock-history" class="text-light h3 icon-button"></b-icon>
      </div>
      <div class="news-orders side-buttons rounded-bottom" :class="{'bg-dark' : ($store.state.actualPage == 3)}"
        @click="$router.push('/orders/settings')">
        <b-icon icon="three-dots-vertical" class="text-light h3 icon-button"></b-icon>
      </div>
    </div>
    <div class="col">
      <!-- content here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Orders',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .orders-page {
    background-color: rgb(216, 216, 235);
  }

  .orders-bar {
    width: 100px;
    height: calc(100vh - 30px);
    margin-top: 17px;
    margin-bottom: 15px;
  }

  .news-orders {
    height: 33%;
    width: 100%;
  }

  .side-buttons {
    background-color: rgb(19, 19, 19);
  }

  .side-buttons:hover {
    background-color: #23272B;
  }

  .icon-button {
    margin-top: 13vh;
  }
</style>