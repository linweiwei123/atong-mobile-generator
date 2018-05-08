<template>
  <div class="banner">
    <input type="text">
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img src="../assets/b1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b1.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';
  import { ContactCard, ContactList, ContactEdit } from 'vant';
  import { Popup } from 'vant';
  import { CouponCell, CouponList } from 'vant';
  const coupon = {
    available: 1,
    discount: 0,
    denominations: 150,
    origin_condition: 0,
    reason: '',
    value: 150,
    name: '优惠券名称',
    start_at: 1489104000,
    end_at: 1514592000
  };


  export default {
        name: "order",
        components: {
          [Swipe.name]: Swipe,
          [SwipeItem.name]: SwipeItem,
          [Popup.name]: Popup,
          [ContactCard.name]: ContactCard,
          [ContactList.name]: ContactList,
          [ContactEdit.name]: ContactEdit,
          [CouponCell.name]: CouponCell,
          [CouponList.name]: CouponList,
        },
    data() {
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: [{
          name: '张三',
          tel: '13000000000',
          id: 0
        }],
        chosenCoupon: -1,
        coupons: [coupon],
        disabledCoupons: [coupon]
      };
    },

    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },

    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false;
        this.showEdit = true;
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      // 保存联系人
      onSave(info) {
        this.showEdit = false;
        this.showList = false;

        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          this.list.push(info);
        }
        this.chosenContactId = info.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter(item => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      },
      onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
      },
      onExchange(code) {
        this.coupons.push(coupon);
      }
    }
    }
</script>

<style scoped>
  .banner{
    height: 100px;
    width: 100%;
  }

  .banner img{
    height: 30vh;
  }
</style>
