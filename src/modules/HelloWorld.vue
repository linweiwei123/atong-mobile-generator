<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <div class="box"></div>
    <div class="line"></div>
    <div class="h1">字体</div>
    <button @click="countOn()">countOn</button>
    <h1>{{countValue}}</h1>
    <button @click="addKeepAlive()">addKeepAlive</button>
    <button @click="removeKeepAlive()">removeKeepAlive</button>
    <input type="text" >
  </div>
</template>

<script>

  import { mapState } from 'vuex';
  import { INCREMENT, ADD_KEEP_ALIVE, REMOVE_KEEP_ALIVE } from '../store/mutation-types';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  // computed: {
  //   countValue: function(){
  //     return `count value is ${this.$store.state.count}`
  //   }
  // },
  computed:{
    ...mapState({
       countValue: 'count'
    }),
  },
  methods: {
    countOn: function () {
      this.$store.commit(INCREMENT);
    },
    addKeepAlive: function(){
      this.$store.commit(ADD_KEEP_ALIVE,'order')
    },
    removeKeepAlive: function(){
      this.$store.commit(REMOVE_KEEP_ALIVE,'order')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1{
  font-size: 32px;
  border-bottom: 1px solid #000;
}
.line {
  margin-top: 10px;
  width: 2250px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .box{
    width: 375px;
    height: 200px;
    background-color: blue;
  }
  .h1{
    font-size: 32px;
  }
</style>
