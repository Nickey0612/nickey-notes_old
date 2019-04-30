//----------------------------------------------------------------------
// リンクを別タブで開く
$('a:not([href^="https://nickey-notes.blogspot."])'+'a:not([href="javascript:void(0)"])'+'a:not([href^="#"])').click(function(){
  window.open(this.href);
  return false;
});

// 画像の遅延読み込み
$("img").lazyload({
  effect     : "fadeIn",
  skip_invisible: true,
  placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
});

// NavBar----------------------------------------------------------------------
// メニュー選択時にメニューを畳む
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function(){
  if(this.id != 'navbarDropdownMenuLink'){
    $('.navbar-collapse').collapse('hide');
  }
});

//page topボタン----------------------------------------------------------------------
/*初期状態ではボタンが隠れている*/
$('#back-to-top').hide();

/*スクロールするとボタンが現れる*/
$(window).scroll(function() {
  if($(this).scrollTop() > 60) {
    $('#back-to-top').fadeIn("slow");
  } else {
    $('#back-to-top').fadeOut("slow");
  }
});

/*ボタンクリックでトップに戻る*/
$('#back-to-top').on('click', function(){
  $('html, body').animate({
    'scrollTop':0
  },500);
  return false;
});

/*
report tableのセルの数字がマイナスの場合は文字色を赤くする
また、4桁以上の数字はカンマ区切りに変換する
*/
$('.report-table td').each(function(i, e) {
  if(i!==0) {
    if(!isNaN($(this).text())) {
      if($(this).text() > 0) {
        /*$(this).css('color', 'blue');*/
      } else if($(this).text() < 0) {
        $(this).css('color', 'red');
      }
      $(this).text(Number($(this).text()).toLocaleString());
      $(this).css('text-align', 'right');
    }
  }
});
