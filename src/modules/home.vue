<template>
  <div class="hello">
    <navbar></navbar>
    <h1>{{ msg }}</h1>
    <div class="box"></div>
    <div class="h1">字体</div>
    <button @click="countOn('sync')">countOn sync</button>
    <button @click="countOn('async')">countOn async</button>
    <h2>count value is:{{countValue}}</h2>
    <button @click="addKeepAlive()">addKeepAlive</button>
    <button @click="removeKeepAlive()">removeKeepAlive</button>
    <input type="text" >
    <ul>
      <li v-bind:key="user.id" v-for="user in userList">
        {{user.username}}
      </li>
    </ul>
  </div>
</template>

<script>
  import navbar from '../components/Navbar';
  import { mapState } from 'vuex';
  import { INCREMENT, ADD_KEEP_ALIVE, REMOVE_KEEP_ALIVE } from '../store/mutation-types';
  import { ASYNC_INCREMENT } from '../store/action-types';
  import mhttp from '../common/mhttp';

  export default {
    name: 'home',
    components: {
      navbar
    },
    data () {
      return {
        msg: 'Welcome to Home',
        userList: []
      }
    },
    // 计算属性方式一：
    computed:{
      ...mapState({
         countValue: state => state.cart.count
      }),
    },
    // 计算属性方式二：方式一如果不理解用方式二
    // computed: {
    //   countValue: function(){
    //     return this.$store.state.cart.count
    //   }
    // },
    methods: {
      countOn: function (type) {
        if(type === 'async'){
          this.$store.dispatch(ASYNC_INCREMENT);
        }
        else{
          this.$store.commit(INCREMENT);
        }
      },
      addKeepAlive: function(){
        this.$store.commit(ADD_KEEP_ALIVE,'order')
      },
      removeKeepAlive: function(){
        this.$store.commit(REMOVE_KEEP_ALIVE,'order')
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        mhttp.rest({
          url: 'static/api.json',
          method: 'get'
        })
          .then((response)=>{
            this.userList = response.data;
          })
          .catch((error)=>{
            console.log(error);
          });
      })
    }
  }
</script>

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
