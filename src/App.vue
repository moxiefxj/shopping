<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.eot?t=1590669919421'); /* IE9 */
		src: url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.eot?t=1590669919421#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN4AAsAAAAAB+gAAAMrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDDAqDKIJxATYCJAMQCwoABCAFhG0HUhvdBsiuMTaG1k0ERDo6BIIAWW9y6b6jZfzlmHj4Wivf7+ml2bsQgQLShOpIhTwwK3MVFYdQnnX0/u/c+2k7RpeRA0SFULjp66P0pHkDR+SJ1CSgnZoDlHj8JPyfA7T/4JCbHwTOgXFACVYdOtCM+7sSjH2gtCa+TAI8z18A5IXDaVf8DiiXd499jP7hgAL7F6MvXBYF5n3Ahu7nNIHSGKmEtfWtHchPZk4KxF5Dl5Ffxi7LfKguVCtWZnFdRT1dSK/gWvD5+MeC8COpFMyZG3rqNFT5k5/J8Vbs8RAY02nBr6PALEgmdlTqN5Ei/yySUvV7mQJta1DwMz0/eUqx1T9eUhBVZngbWISBgp8cEPwEiZ9hCvgQ4+uo4SSeE3ZUQkjy1MAw8+X9geKT3sDt0tS9wOadOyg1L82990gY2h94OPJeRM/qxaguNNmbcigQffrU8aVdX2+g/XU77X9a23bTxMh+z1Gevxtl5/3i5tXHsbH7oRPy6Wp62ZnLk/2f89ySnCscmJLytmbcPqSKomlLH95T7jxbxOfv7ASMLqlEuKj8/5SVS4ZoUTyqS01mevA1cofQFB/S0f71w/Uh8UKTrKDpl93Xz/t3+y9eDyotkqvr/GBjfwchtFaxhMbTtWIlQhTrxZuf9huTFzTdTd/SHz8y+PG/or3FugfqEjzjFzE6pmSNZSpyVtgOXTdkK1OTJZRKtDLNA7xPIRzc2UuoZxg8JDWjoVA3CZmxs6CiaRFU1a2A0kwN65sGYiSRG5hhDiD0cwRJHy+g0M8tMmPfoGKIb6jqFxKUtkXkjk1TwgioYSBz0LAygQ2Vuomt4gFhZBvoHqfM0qwA1wXMMlw4Kz0zH2oAN7Ap5lijejbnBBNGXbgezgOnk2KTUTuoPN3GuVmckUGqrpSuUhcKsAYDZBzQYIoJmEFFuRGvMxdQeH8boPNwkrGGpCp5F8BYjN6xLOkyOyAb+O5OSbdyiWWULhvHERjBUC5YPWiB0/JTmFk9zA6ouHS2AV5TsQzKRLry05cXut5wF5TMSTlSFJGjos+1H2vZqGcC/MeoBmkqNScCCbjBaSQyhAAA') format('woff2'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.woff?t=1590669919421') format('woff'),
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.ttf?t=1590669919421') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('//at.alicdn.com/t/font_1849618_t0ekpearxkr.svg?t=1590669919421#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-index:before {
		content: "\e600";
	}

	.icon-about:before {
		content: "\e601";
	}

	.icon-classify-copy:before {
		content: "\e602";
	}
</style>
