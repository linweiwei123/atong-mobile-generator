<template>
  <div>
    <div class="group-title">
      {{type}}
    </div>
    <ul>
      <li v-for="item in list">
        <div class="food-info">
          <div class="img-wrapper">
            <img class="food-pic" v-bind:src="item.url" alt="">
          </div>
          <div class="food-data">
            <div class="title h4">{{item.name}}</div>
            <div class="sub-title">{{item.desc}}</div>
            <div class="food-price-add">
              <span class="price">{{`$${item.price}`}}</span>
              <span class="add"><i class="iconfont icon-size2">&#xe621;</i></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "foodgroup",
      props:['foodList'],
      data (){
        console.log(this.foodList.list);
        return {
          list: this.foodList.list,
          type: this.foodList.type
        }
      }
    }
</script>

<style scoped>
  .group-title {
    text-align: left;
    line-height: 26px;
    font-size: 14px;
    margin-top: 10px;
    padding: 0 10px;
  }

  .food-info {
    display: flex;
    padding: 10px;
  }

  .food-pic {
    width: 70px;
    height: 70px;
  }
  .food-data {
    margin-left: 10px;
  }
  .food-data>*{
    text-align: left;
    position: relative;
  }
  .food-data .sub-title{
    line-height: 15px;
    font-size: 12px;
    color: #a9a9a9;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
  .food-price-add{
    margin-top: 2px;
  }
  .price {
    color: #fe4d3d;
    font-size: 18px;
  }
  .add {
    color: rgb(255,209,97);
    position: absolute;
    right: 0;
    bottom: 2px;
  }
</style>
