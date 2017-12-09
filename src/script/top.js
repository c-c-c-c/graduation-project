import $ from 'jquery'

		/* ローディングアニメーション */
		$(() => {
			console.log('un')
			$('.whole-wrapper').css('display','none');
		});

		/*header背景の動画*/
		$(window).on('load', () => {
			console.log('hi')
			$('.loader').delay(600).fadeOut(300);
			$('.whole-wrapper').css('display', 'block');
			// var options = { videoId: 'e4Is32W-ppk', start: 3 };
	 	  // $('.wrapper').tubular(options);
			// $('.header').tubular({
			// 	 videoId: 'crpiAoM_6rU'
			//  	});

			/* スムーススクロール */
				var offsetY = 0;
				// スクロールにかかる時間
				var time = 500;

				// ページ内リンクのみを取得
				$('a[href^="#"]').click(() => {
					// 移動先となる要素を取得
					var target = $(this.hash);
					if (!target.length) return;
					// 移動先となる値
					var targetY = target.offset().top + offsetY;
					// スクロールアニメーション
					$('html,body').animate({
						scrollTop: targetY
					}, time, 'swing');
					// ハッシュ書き換えとく
					window.history.pushState(null, null, this.hash);
					// デフォルトの処理はキャンセル
					return false;
				});

				$('.fadeIn').css('visibility','hidden')
				$('.fadeIn').on('inview', ()=>{
						$(this).addClass("fadeInDown");
				})

			}).scroll(() => {
			var startPos = 0,
			 		currentPos = $(window).scrollTop(),
					navi = $('.navi'),
					topHeight = $(".header").height();
				navi.hide();
				if (currentPos > topHeight) {
					if (currentPos > startPos) {
						if ($(window).scrollTop() >= 200) {
							$(".navi").css("top", "-" + 170 + "px");
							}
						}else{
						$(".navi").css("top", 0 + "px");
					}
					startPos = currentPos;
				}
			});
