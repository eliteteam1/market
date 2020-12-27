<template>
    <div>
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
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button primary block type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
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
            console.log("submit", values);
            this.$router.post('/login', values)
        },
    },
    created() {
        this.$eventBus.$emit("hide_footer", false);
    },
    beforeDestroy() {
        this.$eventBus.$emit("hide_footer", true);
    },
};
</script>

<style lang="scss" scoped>
.logo {
    width: 200px;
    height: 230px;
    margin: 0 auto;
}
img {
    width: 100%;
    height: 100%;
}
</style>
