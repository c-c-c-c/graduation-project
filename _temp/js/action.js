	   $(document).ready(function () {
	     $('#containerTop').tubular({
	       videoId: 'crpiAoM_6rU'
	     });
	   });

	   $(window).scroll(function () {
	     var windowHeight = $(window).height(),
	       topWindow = $(window).scrollTop();
	     $('.action').each(function () {
	       var targetPosition = $(this).offset().top;
	       if (topWindow > targetPosition - windowHeight + 200) {
	         $(this).addClass("fadeInDown");
	       }
	     });
	   });

	   $(function () {
	     // スクロールのオフセット値
	     var offsetY = 0;
	     // スクロールにかかる時間
	     var time = 500;

	     // ページ内リンクのみを取得
	     $('a[href^=#]').click(function () {
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
	   });
	       
	   var menuHeight = $("#navi").height();
	   var startPos = 0;
	   $(window).scroll(function () {
	     var currentPos = $(this).scrollTop();
	     if (currentPos > startPos) {
	       if ($(window).scrollTop() >= 200) {
	         $("#navi").css("top", "-" + 170 + "px");
	               }
	       }else{
	       $("#navi").css("top", 0 + "px");
	     }
	     startPos = currentPos;
	       });
	   
	$(function() {
	   var navi = $('#navi');
	   var topHeight = $("#containerTop").height();
	     navi.hide();
	   $(window).scroll(function () {
	     var currentPos = $(this).scrollTop();
	       if (currentPos > topHeight) {
	       //ボタンの表示方法
	           navi.fadeIn();
	       } else{
	                   navi.hide();
	               }
	   });
	   
	});