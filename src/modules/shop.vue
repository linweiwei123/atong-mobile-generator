<template>
  <div class="page-wrapper">
    <div class="store-profile">
        <div class="store-wrapper">
          <div class="store-img">
            <img src="../assets/imgs/kfc.jpg" alt="">
          </div>
          <div class="store-info">
             <div class="title h1">五缘湾KFC</div>
             <div class="sub-title h3">营业中</div>
          </div>
        </div>
        <div class="on-time">
            <div class="text-left">
              <span><i class="iconfont icon-size1">&#xe752;</i></span>
              营业时间:
              <span>{{onTime}}</span>
            </div>
        </div>
    </div>
    <div class="order-section">
      <div class="menu-bar better-scroll">
           <ul>
             <li v-for="item in menuList" class="menu">
               <div>
                 <span class="menu-icon"><i v-if="item.icon" class="iconfont icon-size1">&#xe619;</i></span>
                 <span>{{item.name}}</span>
               </div>
             </li>
           </ul>
      </div>
      <div class="food-list better-scroll" ref="wrapper">
        <food-group v-bind:key="foodgroup.id" v-for="foodgroup in foodList" v-bind:food-list="foodgroup"></food-group>
      </div>
    </div>
  </div>
</template>

<script>
    import foodgroup from '../components/foodgroup';
    import mhttp from '../common/mhttp';
    import BScroll from 'better-scroll';
    export default {
        name: "shop",
        components: {
          'food-group':foodgroup
        },
        data (){
          return {
            onTime: '9:00 - 22:00',
            menuList: [
              {
                id: 1,
                icon: 'hot',
                name: '热销'
              },
              {
                id: 2,
                icon: 'hot',
                name: '折扣'
              },
              {
                id: 3,
                icon: 'hot',
                name: '桶'
              },
              {
                id: 4,
                icon: 'hot',
                name: '小食'
              },
              {
                id: 5,
                name: '饮料'
              },
              {
                id: 6,
                name: '早餐'
              },
              {
                id: 7,
                name: '咖啡'
              },
              {
                id: 8,
                name: '套餐'
              },
              {
                id: 4,
                name: '小食'
              },
              {
                id: 5,
                name: '饮料'
              },
              {
                id: 6,
                name: '早餐'
              },
              {
                id: 7,
                name: '咖啡'
              },
              {
                id: 8,
                name: '套餐'
              },
            ],
            foodList: []
          }
        },
      created: function () {
       // this.$nextTick(function () {
          mhttp.rest({
            url: 'static/food-list.json',
            method: 'get'
          })
            .then((response)=>{
              this.foodList = response.data;
              this.$nextTick(function () {
                new BScroll('.better-scroll');
                new BScroll(this.$refs.wrapper, {})
              });
              console.log(this.foodList);
            })
            .catch((error)=>{
              console.log(error);
            });
       // })
      }
    }
</script>

<style scoped>

   .store-profile {
      width: 100%;
      height: 110px;
      border-bottom: 1px solid #ddd;
      padding: 10px 15px;
      box-sizing: border-box;
   }

  .store-wrapper {
    padding: 0;
    display: flex;
    margin-bottom: 5px;
  }

  .store-img {
    height: 60px;
    width: 60px;
  }

  .store-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .store-info {
    padding: 2px 10px;
  }

  .store-info >* {
    text-align: left;
  }

  .store-info .title{
    min-height: 36px;
  }

  .on-time {
    font-size: 14px;
    line-height: 20px;
  }

  .on-time >div{
    display: flex;
  }

  .order-section {
    height: calc(100% - 110px);
    width: 100%;
    display: flex;
  }

  .menu-bar{
    width: 100px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px 0;
  }

  .menu {
    text-align: left;
    line-height: 50px;
    font-size: 16px;
    padding: 0 10px;
  }

  .menu-icon {
    min-width: 5px;
    display: inline-block;
  }

  .menu .iconfont {
    color: #c11e1e;
  }

  .food-list{
    height: 100%;
    width: calc(100% - 100px);
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
