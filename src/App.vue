<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br />
    <button @click="toggle">{{this.$store.state.show ? "Hide" : "Show" }}</button>
    <HelloWorld v-if="this.$store.state.show" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  methods: {
    toggle: function(event) {
      this.$store.commit("toggle");
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
