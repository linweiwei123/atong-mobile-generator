<template>
  <div id="app">
    <navbar></navbar>
    {{keepAlives}}
    <keep-alive :include="keepAlives">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

import navbar from './components/Navbar';
import store from './store/store';

export default {
  name: 'App',
  components: {
    navbar
  },
  computed: {
    keepAlives: function(){
      return store.getters.currentKeepAlives;
    }
  }
}
</script>

<style>

  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    /*font-size: 28px;*/
  }

  h1,h2,h3,h4,h5{
    margin: 0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
