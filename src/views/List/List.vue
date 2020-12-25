<template>
    <div>
        <div class="header">
            <van-nav-bar
            title="列表"
            left-text="返回"
            left-arrow
            border
            fixed:true
            @click-left="onClickLeft"
            />
        </div>
        <div class="container">
            <van-grid :column-num="2">
                <van-grid-item v-for="item in list" :key="item.productId" text="文字" gutter="10" @click="gotoDetail(item.productId)">
                    <img :src="item.smallImage">  
                    <div class="price">
                        <p>特卖价</p>
                        <b>￥{{item.price.salePrice}}</b>
                        <s>￥{{item.price.marketPrice}}</s>
                        <span>{{item.price.saleDiscount}}</span>
                    </div>
                    <div class="content">{{item.title}}</div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import uri from "@/config/uri";
import Vue from 'vue';
import { NavBar, Grid, GridItem   } from 'vant';

Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        // 获取数据
        this.getData();
    },
    methods: {
        onClickLeft() {
            console.log('返回');
        },
        // 获取数据
        getData(cb = null){
            // 默认取第一页的数据
            this.$http.get(uri.getList).then(ret => {
                console.log(ret);
                // this.list = ret.data.films.concat(this.list);
                this.list = [...ret.data.products,...this.list];
                if(cb == null){
                }else{
                    // 执行cb
                    cb()
                }
            });
        },
        gotoDetail(filmId){
            // 编程导航，去详情页面
            this.$router.push('/list/' + filmId);
        },
    },
}
</script>

<style lang="scss" scoped>
.header{
    height: 30px;
    line-height: 30px;
    font-size: 25px;
}
.container{
    display: flex;
    justify-content: space-between;
}
.van-grid-item__content{
    height: 360px !important;
    background-color: green;
    width: 96%;
}
.van-grid-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img{
        width: 100%;
    }
}
.price{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        width: 45px;
        height: 16px;
        font-size: 10px;
        line-height: 16px;
        border-radius: 40%;
        border: none;
        background: #cb78dc;
        color: #FFF;
        text-align: center;
    }
    b{
        font-size: 16px;
        position: relative;
        right: 10px;
    }
    s,span{
        font-size: 12px;
        transform-origin: 50% 60%;
        transform: scale(0.916);
        position: relative;
        top: 2px;
        right: 18px;
    }
}
.content{
    font-size: 14px;
    line-height: 14px;
    height: 42px;
    text-align: left;
}
</style>