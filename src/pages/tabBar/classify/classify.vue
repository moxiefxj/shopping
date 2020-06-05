<template>
	<view>
		<view class="content">
			<view class="title">下划线非滑动切换</view>
			<ms-tabs :list="type2" v-model="active2" itemColor="#03A9F4" lineColor="#03A9F4" :lineAnimated="false"></ms-tabs>
			<view>{{active2}}</view>
		</view>
	</view>
</template>

<script>
	import msTabs from '@/components/ms_tabs.vue'
	export default {
		components: {
			msTabs
		},
		data() {
			return {
				type2: [{
						title: 'test1'
					},{
						title: 'test2'
					},{
						title: 'test3'
					},{
						title: 'test4'
					}
				],
				active2: 0,
			}
		},
		watch:{
			active() {
				console.log (this.active)  // 0
			}
		},
		onShow() {
		},
	}
</script>

<style lang="scss">
	.content {
		background: #fff;
		margin-bottom: 20rpx;
		.title {
			margin-left: 20rpx;
			padding: 20rpx 0;
			color: #818586;
			border-bottom: 1px solid #f6f6f6;
		}
		.btn {
			background: $uni-color-primary;
			color: #fff;
			padding: 20rpx;
			display: inline-block;
			border-radius: 10rpx;
		}
	}
	.tab-block {
		background: $uni-color-primary;
		color: #fff;
		line-height: normal;
		padding: 5px;
		margin-bottom: 5px;
		border-radius: 5px;
	}
</style>