<template>
  <div>
    <!-- ====================头部导航 ===================-->
    <div class="header">
      <div class="goBack" @click="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="title">购物车</div>
    </div>
<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->

<div v-show="isshow" @click="buy">
  购物车为空，点我去列表页添加一些商品吧
</div>

<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->
    <!-- ======================购物车数据列表==================== -->
    <div class="main">
      <van-card v-for="(item, index) in list" :key="index">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <template #thumb>
          <van-image :src="item.smallImage" />
        </template>
        <template #price>
          <span>￥{{ item.price.salePrice }}</span>
        </template>
            <!--===============加减数量=============== -->
        <template #footer>
          <button @click="sub(index, item)">-</button
          ><input
            type="text"
            style="width: 20px"
            maxlength="3"
            v-model="item.num"
          /><button @click="add(index, item)">+</button>
          <input type="checkbox" :value="item.productId" v-model="checkArr" />
        </template>
      </van-card>
      <!-- ================提交订单栏================= -->
      <van-submit-bar
        :price="getTotalPrice *100 "
        button-text="提交订单"
        @submit="onSubmit"
      >
        <input type="checkbox" v-model="checked" @change="handler" />全选
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
//

import uri from "@/config/uri";
import Vue from "vue";
import {
  Card,
  Checkbox,
  SubmitBar,
  Image as VanImage,
} from "vant";

Vue.use(Card);
Vue.use(Checkbox);
Vue.use(SubmitBar);
Vue.use(VanImage);

export default {
  data() {
    return {
      list: [],
      pageNum: 1,
      // 是否全选
      checked: false,
      // 选中的元素集合
      checkArr: [],
      // num: 0,
      isshow:false,
      isisshow:false
    };
  },

  created() {
    // this.$router.go(0)
    // 获取localStorage 数据
    this.list = JSON.parse(localStorage.getItem("cart"));
    

    if(this.list.length == 0){
      this.isshow = true
      
    }
  },

  methods: {
    deng(){
      this.$router.push('/login')
    },
    goBack() {
      // 返回上一页
      this.$router.go(-1);
    },
    // 全选
    handler: function () {
      this.checkArr = [];
      if (this.checked) {
        // 循环，将挨个的商品的id存到checkedArr里面去
        this.list.forEach((el) => {
          this.checkArr.push(el.productId);
        });
      }
    },
    // 点击 减少
    sub: function (index, item) {
        if (item.num === 1) {
           // 短路运算
          if (confirm("确定不留一件吗？")) {
            this.list.splice(index, 1);
             window.localStorage.setItem('cart',JSON.stringify(this.list)) 
            let key = this.checkArr.indexOf(item.productId);
            this.$router.go(0)
            if (key > -1) {
              // 删除选中记录
              this.checkArr.splice(key,1); 
                                        
            }
          }
          return false;
        }
        item.num--;
        window.localStorage.setItem('cart',JSON.stringify(this.list))      
    },
    // 点击 增加
    add: function (index, item) {
      if (item.num < 99) {
        item.num++;
      } else {
        return false;
      }
       window.localStorage.setItem('cart',JSON.stringify(this.list))  
    },

    // 提交订单
    onSubmit() {
      let num = 0;
      this.checkArr.forEach((v) => {
        this.list.forEach((el) => {
          if (v == el.productId) {
            num += el.num * el.price.salePrice;
          }
        });
      });
      if (num === 0) {
        return false;
      }
      // 跳转支付二维码
      this.$http
        .post("https://m.28sjw.com/order/getQR.php", `_s=abcd&_f=0.1&_t=1`)
        .then((ret) => {
          console.log(ret);
          location.href = "http:" + ret.qr_code;
        });
    },
    buy(){
      this.$router.push('/list')
    }
  },
  watch: {
     // 监听选中商品的数量的变化
    checkArr: function (newVal, oldVal) {
      this.checked = this.list.length === this.checkArr.length;
    },
  },
  computed: {
    // 获取总价格
    getTotalPrice: function () {
      let total = 0;
        // 循环商品列表
      this.list.forEach((el) => {
        // 判断是否需要计算价格
        this.checkArr.forEach((v) => {         
          if (v == el.productId) {
            let price = el.price;
            total += price.salePrice * el.num;
          }
        });
      });
      // 返回总价
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.goBack {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
}
.goBack img {
  width: 30px;
}
.title {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
}
.van-card {
  width: 350px;
}
.van-checkbox {
  margin-left: 10px;
}

.van-submit-bar {
  margin-bottom: 50px;
}
.main {
  margin-bottom: 100px;
}
</style>
