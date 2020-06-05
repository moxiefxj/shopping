<template>
    <view>
        <uni-list v-for="(item,index) in list" :key="index">
            <uni-list-item :title="item.title"  @click="_handleTap(index)">
            </uni-list-item>
        </uni-list>
    </view>
</template>

<script>
import uniList from "@dcloudio/uni-ui/lib/uni-list/uni-list.vue"
import uniListItem from "@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue"
export default {
    components:{
        uniList,
        uniListItem
    },
    data() {
        return {
            list:[
                {
                    title:"修改密码"
                },{
                    title:"修改个人信息"
                },{
                    title:"退出"
                }
            ]
        }
    },
    methods:{
        _handleTap:function(index){
            switch (index){
                case 0:
                    // 修改密码
                    uni.navigateTo({
                         url: '/pages/about/changePwd/changePwd'
                    });
                    break;
                case 1:
                    // 修改个人信息
                     uni.navigateTo({
                         url: '/pages/about/changeMsg/changeMsg'
                    });
                    break;
                case 2:
                    // 退出
                    break;
                default:
                    break;
            }

            
        }
    }
}
</script>