<template>
    <ul class="navbar">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/order">订单</router-link></li>
      <li><router-link to="/my">我的</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar {
    /*position: fixed;*/
    /*top: 0;*/
    /*margin: 0;*/
    width: 100%;
    padding: 10px 0;
    z-index: 999;
  }
  .navbar li {
    display: inline-block;
    list-style: none;
    font-size: 32px;
  }
</style>
