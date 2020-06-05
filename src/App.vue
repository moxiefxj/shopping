<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
		},
		onShow: function() {
			console.log(this.$uniRequest)
			// this.$uniRequest.get('/getCodeKey').then(function(res){
			// 	console.log(res)
			// })
			// .catch(function(error){

			// })
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script> 

<style>
	@import './common/uni.css';
	
	@font-face {
		font-family: 'iconfont';  /* project id 1849618 */
		src: url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.eot');
		src: url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.woff') format('woff'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.svg#iconfont') format('svg');
	}
 
	.pages {
		background: linear-gradient(
			145deg,	
			#53f 0%,
			#05d5ff 45%,
			#a6ffcb  100%,
			white 100%,
			white 100%
		);
		height: 20vh;
	}
	image {
		border-radius: 10rpx;
	}
	.productPrice{
        margin: 10rpx;
        color: red;
    }
	.productClass{
        background-color: cyan;
        border-radius: 20rpx;
        padding: 0 20rpx;
    }
</style>
