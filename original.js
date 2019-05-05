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

//page topボタン----------------------------------------------------------------------
$(document).ready(function(){
  $("#topBtn").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
    scrollHeight = $(document).height(); //ドキュメントの高さ 
    scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
    footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）

    if ( scrollHeight - scrollPosition  <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
      $("#topBtn").css({
        "position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
        "bottom": footHeight + 20 //下からfooterの高さ + 20px上げた位置に配置
      });
    } else { //それ以外の場合は
      $("#topBtn").css({
        "position":"fixed", //固定表示
        "bottom": "20px" //下から20px上げた位置に
      });
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

/*
Table Sorter
*/
$('.sortable-table').DataTable({
  info: false,
  paging: false
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
      if($(this).hasClass('pip')) {
        $(this).text(Number($(this).text()).toFixed(1).toLocaleString());
      }else if($(this).text() != ""){
        $(this).text(Number($(this).text()).toLocaleString());
      }
      $(this).css('text-align', 'right');
    } else if($(this).text() === '-') {
      $(this).css('text-align', 'center');
    }
  }
});
