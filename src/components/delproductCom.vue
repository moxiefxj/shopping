<template>
    <view>
        <uni-swipe-action>
            <uni-swipe-action-item :options="options1">
                <view >item1</view>
            </uni-swipe-action-item>
        </uni-swipe-action>
    </view>
</template>

<script>
import uniSwipeAction from '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue'
export default {
    components: {
        uniSwipeAction,
        uniSwipeActionItem
    },
    props:['productList'],
    data() {
        return {
            options:[
                {
                    text: '取消',
                    style: {
                        backgroundColor: '#007aff'
                    }
                }, {
                    text: '确认',
                    style: {
                        backgroundColor: '#dd524d'
                    }
                }
            ]
        }
    },
    methods:{
        onClick(e){
            console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
        },
        change(open){
            console.log('当前开启状态：'+ open)
        }
    }
}
</script>
