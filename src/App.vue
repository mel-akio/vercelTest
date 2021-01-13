<template>
  <div id="app">
    <router-view></router-view>
    <notifications group="order" animation-type="css" width="50%" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        fakeUsername: [
          'F.Malik',
          'B.Thomas',
          'J.Combale',
          'T.Ibrahim',
          'N.Farious',
          'B.Lens',
          'B.David'
        ]
      }
    },
    mounted() {
      const audio = new Audio(require('./assets/notif.mp3'))

      this.$router.push('/login')
      let i = 0;

      setInterval(() => {
        i++
        // audio.load()
        audio.play()
        this.$store.state.orders.push({
          name: this.fakeUsername[i % 7],
          id: 'E891' + i,
          hourOfOrder: '17h' + (19 + i),
          timeElapsed: '8min',
          state: 0,
          items: [{
            mainCourse: 'Menu mexico',
            similarItems: 2,
            sideDish: 'Frites grandes',
            drink: 'Grand Coca-Cola'
          }]
        })
        this.$notify({
          group: 'order',
          title: '⚠️ Nouvelle commande reçu',
          type: 'infos',
          position: 'top center'
        });
      }, Math.floor(Math.random() * Math.floor(60000)));
    }
  }

</script>

<style>
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .vue-notification {
    font-size: 1em !important;
  }

  .text-medium {
    font-size: 1.1em;
  }

  .bg-success {
    background-color: yellow !important;
  }
</style>