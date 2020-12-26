<template>
    <div>
        <van-tabbar v-model="active" @change="changeTab">
            <van-tabbar-item><van-icon class="iconfont icon-shouye" size="1.1rem" slot="icon"/>首页</van-tabbar-item>
            <van-tabbar-item><van-icon class="iconfont icon-liebiao" size="1.1rem" slot="icon"/>列表</van-tabbar-item>
            <van-tabbar-item><van-icon class="iconfont icon-qicheqianlian-" size="1.1rem" slot="icon"/>购物车</van-tabbar-item>
            <van-tabbar-item><van-icon class="iconfont icon-wode" size="1.1rem" slot="icon"/>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
        return {
            active: 0,
            url:["/main", "/list", "/cart", "/center"]
        };
    },
    created(){
        //纠正底部索引
        this.active = this.url.indexOf(this.$route.path)
    },
    methods:{
        changeTab(index){
            // console.log(index);
            this.$router.push(this.url[index])
        }
    }
};
</script>

<style lang="scss" scoped></style>
