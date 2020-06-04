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
