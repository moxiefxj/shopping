<template>
    <view>
        <!-- 第一种   已登录 -->
        <view v-if="islogin">
            <is-login></is-login>
        </view>
        <!-- 第二种   未登录 -->
        <view v-else>
            <not-login :islogin = "islogin"></not-login>
        </view>
    </view>
</template>

<script>
import isLogin from '../../about/isLogin'
import notLogin from '../../about/notLogin'
export default {
    components:{
        isLogin,
        notLogin
    },
    data() {
        return {
            islogin :this.$store.state.hasLogin
            // islogin:false
        }
    }
}
</script>