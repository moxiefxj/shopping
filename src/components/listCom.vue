<template>
    <view>
        <uni-list v-for="(item,index) in list" :key="index">
            <uni-list-item :title="item.title" @click="_handleTap(item.title)"></uni-list-item>
        </uni-list>
    </view>
</template>

<script>
import uniList from "@dcloudio/uni-ui/lib/uni-list/uni-list.vue"
import uniListItem from "@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue"
export default {
    components: {uniList,uniListItem},
    props:["list","_handleTap"]
}
</script>
