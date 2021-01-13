<template>
    <div>
        <div class="header">
            <van-nav-bar
                title="登录"
                left-text="返回"
                left-arrow
                border
                fixed:true
                @click-left="onClickLeft"
            />
        </div>
        <div class="logo">
            <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3917296829,311152812&fm=26&gp=0.jpg"
                alt=""
            />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="电话号"
                    label="电话号"
                    placeholder="电话号"
                    :rules="[{ pattern, message: '请填写正确的电话号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
        <div class="bottom" @click="enroll">没有账号？点我进行注册</div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data() {
        return {
            mobile: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
    methods: {
        onSubmit(values) {
            // console.log("submit", values);
            this.$http.post("https://www.fastmock.site/mock/6278e0b8e4aa8a969b6d436c998b9ca7/market/login",values)
                .then(ret=>{
                    if(this.password == 123456){
                        Toast.success('登陆成功');
                        this.$store.commit("setJwt", ret.jwt)
                        setTimeout(() => {
                            this.$router.push('/center')
                        }, 1000);
                    }else{
                        Toast.fail('登录失败');
                    }
                })
        },
        onClickLeft() {
            // 返回上一页面
            this.$router.go(-1);
        },
        enroll(){
            this.$router.push('/enroll')
        }
    },
    // 底部导航
    created() {
        this.$store.commit("changeShow", false);
    },
    beforeDestroy() {
        this.$store.commit("changeShow", true);
    },
};
</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 1;
}
.logo {
    width: 200px;
    height: 230px;
    margin: 0 auto;
    margin-top: 46px;
}
img {
    width: 100%;
    height: 100%;
}
.bottom{
    text-align: center;
}

</style>
