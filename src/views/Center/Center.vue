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
                <div @click="login">
                    登录
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
        <div class="moneylist">
            <div>
                <span>9999</span>
                <p>总金额</p>
            </div>
            <div>
                <span>9999</span>
                <p>红包</p>
            </div>
            <div>
                <span>9999</span>
                <p>优惠券</p>
            </div>
            <div>
                <span>9999</span>
                <p>白条</p>
            </div>
            <div>
                <span>9999</span>
                <p>礼品卡</p>
            </div>
        </div>

        <div>
            <van-grid :column-num="3">
                
                <van-grid-item icon="orders-o" text="我的订单" />
                <van-grid-item icon="goods-collect-o" text="我的拼团" />
                <van-grid-item icon="bill-o" text="微红包" />
                <van-grid-item icon="star-o" text="我的积分" />
                <van-grid-item icon="vip-card-o" text="我的金卡" />
                <van-grid-item icon="refund-o" text="退款/售后" />
                <van-grid-item icon="location-o" text="地址管理" />
                <van-grid-item icon="flag-o" text="账号安全" />
                <van-grid-item icon="service-o" text="联系客服" />
                <van-grid-item icon="warning-o" text="产品反馈" />
                <van-grid-item icon="question-o" text="帮助中心" />
            </van-grid>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon, Grid, GridItem } from "vant";
import "../../assets/icon_zhuo/iconfont.css";

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
    methods:{
        login(){
            this.$router.push('/login')
        }
    }
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
.moneylist {
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.6rem;
}
.moneylist div{
    float: left;
    text-align: center;
}
.moneylist span{
    font-size: 1rem;
}
.moneylist p{
    margin: 0;
}
</style>
