<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './components/data/store.js';

export default{
  components : {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      store
    }
  }, 
  methods: {
   
  },
  created () {
    console.log(this.store)
  }
}
</script>

<template>
  <AppHeader/>
  <!-- <AppMain/> -->
  <!-- <AppFooter/> -->
</template>

<style scoped lang="scss">

</style>
