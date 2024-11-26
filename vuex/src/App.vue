<template>
  <base-container title="Vuex">
    <h2>{{ $store.state.numbers.counter }}</h2>
    <button @click="add">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    add(){
      // this.$store.commit("increment", {value: 1})
      this.$store.dispatch({
        type: "increment",
        value: 2
      })
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>