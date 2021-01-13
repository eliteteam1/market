<template>
    <div>
        <div class="top">
            个人中心
        </div>
        <!-- 头部 -->
        <div class="header">
            <div class="img">
                <!-- 未登录头像 -->
                <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2966557423,198307543&fm=15&gp=0.jpg"
                    v-if="!userInfo.headIcon"
                />
                <!-- 已登录头像 -->
                <img
                    :src="userInfo.headIcon"
                    v-if="userInfo.headIcon"
                />
            </div>
            <div class="info">
                <div @click="login" v-if="!userInfo.headIcon">
                    登录
                </div>
                <div @click="enroll"  v-if="!userInfo.headIcon" class="enroll">
                    注册
                </div>
                <div v-if="userInfo.headIcon">
                    {{userInfo.name}}
                </div>
            </div>
        </div>
        <!-- 资产 -->
        <div class="money">
            我的资产
        </div>
        <div class="moneylist">
            <div>
                <span v-if="!userInfo.headIcon">0</span>
                <span>{{userInfo.totalMoney}}</span>
                <p>总金额</p>
            </div>
            <div>
                <span v-if="!userInfo.headIcon">0</span>
                <span>{{userInfo.redPacket}}</span>
                <p>红包</p>
            </div>
            <div @click="youhui">
                <span v-if="!userInfo.headIcon">0</span>
                <span>{{userInfo.coupon}}</span>
                <p>优惠券</p>
            </div>
            <div>
                <span v-if="!userInfo.headIcon">0</span>
                <span>{{userInfo.iou}}</span>
                <p>白条</p>
            </div>
            <div>
                <span v-if="!userInfo.headIcon">0</span>
                <span>{{userInfo.giftCard}}</span>
                <p>礼品卡</p>
            </div>
        </div>

        <div>
            <van-grid :column-num="3">
                
                <van-grid-item class="q" icon="orders-o" text="我的订单" />
                <van-grid-item icon="goods-collect-o" text="我的拼团" />
                <van-grid-item icon="bill-o" text="微红包" />
                <van-grid-item icon="star-o" text="我的积分" />
                <van-grid-item icon="vip-card-o" text="我的金卡" />
                <van-grid-item icon="refund-o" text="退款/售后" />
                <van-grid-item icon="location-o" text="地址管理" @click="dizhi"/>
                <van-grid-item icon="flag-o" text="账号安全" />
                <van-grid-item icon="service-o" text="联系客服" />
                <van-grid-item icon="warning-o" text="产品反馈" />
                <van-grid-item icon="question-o" text="退出登录" @click="exit"/>
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
            // 用户信息
            userInfo:{}
        };
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        enroll(){
            this.$router.push('/enroll')
        },
        exit(){
            this.$store.commit('exit')
            this.$router.go(0)
        },
        youhui(){
            this.$router.push('/youhui')
        },
        dizhi(){
            this.$router.push('/dizhi')
        }
    },
    created() {
        let jwt = this.$store.state.jwt;
        if(jwt){
            this.$http.get("https://www.fastmock.site/mock/6278e0b8e4aa8a969b6d436c998b9ca7/market/info").then(ret=>{
                // console.log(ret.userInfo);
                this.userInfo = ret.userInfo
            })
        }
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
    float: left;
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
.q:hover{
    background: blue;
}
.enroll{
    font-size: 15px;float: left;
    float: left;
    margin-left: 20px;
}
</style>
