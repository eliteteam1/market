<template>
    <div>
        <div class="top">
            个人中心
        </div>
        <!-- 头部 -->
        <div class="header">
            <div class="img">
                <img
                    src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg"
                    alt=""
                />
            </div>
            <div class="info">
                <div>
                    路飞
                </div>
                <div>
                    超级会员
                </div>
            </div>
        </div>
        <!-- 资产 -->
        <div class="money">
            我的资产
        </div>
        <div>
            <van-tabbar v-model="active" :fixed="boolean">
                <van-tabbar-item icon="orders-o">全部订单</van-tabbar-item>
                <van-tabbar-item icon="peer-pay">待付款</van-tabbar-item>
                <van-tabbar-item icon="logistics">待收货</van-tabbar-item>
                <van-tabbar-item icon="passed">已完成</van-tabbar-item>
            </van-tabbar>
        </div>
        <div>
            <van-grid :column-num="3">
                <van-grid-item
                    class="iconfont icon-74wodedingdan"
                    text="我的订单"
                />
                <van-grid-item icon="photo-o" text="我的拼团" />
                <van-grid-item icon="photo-o" text="微红包" />
                <van-grid-item icon="photo-o" text="我的积分" />
                <van-grid-item icon="photo-o" text="我的金卡" />
                <van-grid-item icon="photo-o" text="退款/售后" />
                <van-grid-item icon="photo-o" text="地址管理" />
                <van-grid-item icon="photo-o" text="账号安全" />
                <van-grid-item icon="photo-o" text="联系客服" />
                <van-grid-item icon="photo-o" text="产品反馈" />
                <van-grid-item icon="photo-o" text="帮助中心" />
            </van-grid>
        </div>
        
    </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon, Grid, GridItem } from "vant";
import "../assets/icon_zhuo/iconfont.css";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
export default {
    data() {
        return {
            active: -1,
            boolean: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.top {
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.header {
    height: 120px;
    background: orangered;
    color: #fff;
}
.header .img {
    height: 60px;
    width: 60px;
    padding-top: 30px;
    margin-left: 20px;
    float: left;
}
.header img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.info {
    float: left;
    font-size: 10px;
    padding-top: 50px;
    margin-left: 20px;
}
.info :first-child {
    font-size: 15px;
    margin-bottom: 5px;
}
.money {
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    border-bottom: 1px solid black;
}
</style>
