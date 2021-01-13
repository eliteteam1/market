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
            url:["/home", "/list", "/cart", "/center"]
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
    },
     watch: {
        $route: function() {
            if (this.$route.path == "/home") {
                this.active = 0;
            }
            if (this.$route.path == "/list") {
                this.active = 1;
            }
            if (this.$route.path == "/cart") {
                this.active = 2;
            }
            if (this.$route.path == "/center") {
                this.active = 3;
            }
            if (this.$route.path == "/zeng") {
                this.active = -1;
            }
            if (this.$route.path == "/youhui") {
                this.active = -1;
            }
        },
    }, 
};
</script>

<style lang="scss" scoped></style>
