<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter - Vuex</h1>
  <h2>Vuex: {{$store.state.count}}</h2>
  <h2>Computed: {{countComputed}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">+Random</button>

  <h1>MapState</h1>
  <h2>mapState: {{count}}</h2>

  <h2>Direct Getter {{$store.getters.squareCount}}</h2>
</template>

<script>
import { mapState, mapActions,  } from 'vuex'

export default {
    // computed: mapState(['count']),
    computed: {
        countComputed(){
            return this.$store.state.count;
        },
        ...mapState(['count', 'lastMutation', 'isLoading']), //Mejor manera
        // ...mapState({
        //     count       : state => state.count,
        //     lastMutation: state => state.lastMutation
        // }),
    },
    methods: {
        increment(){
            return this.$store.commit('increment');
        },
        incrementBy(){
            return this.$store.commit('incrementBy', 5);
        },
        // incrementRandomInt(){
        //     return this.$store.dispatch('incrementRandomInt');
        // },
        ...mapActions(['incrementRandomInt'])
    },
}
</script>

<style>

</style>