// リンクを別タブで開く
$('a:not([href^="http://nickey-notes.blogspot."])'+'a:not([href="javascript:void(0)"])'+'a:not([href^="#"])').click(function(){
	window.open(this.href);
	return false;
});

// 画像の遅延読み込み
$('.post-body img').lazyload({
	effect: "fadeIn",
	placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
});

// トップページの記事サムネイル作成
function bp_thumbnail_resize(image_url, post_title){
	var image_size='s300';
	var show_default_thumbnail=true;
	var default_thumbnail='';

	if(show_default_thumbnail === true && image_url === '') {
		image_url= default_thumbnail;
		image_tag = '<img src="'+image_url.replace('/s72-c/','/'+image_size+'/')+'" class="postthumb" alt="'+post_title+'"/>';
		if(image_url!=='') {
			return image_tag;
		} else {
			return "";
		}
	}
}

// Twitter
!function(d,s,id){
	var js, fjs = d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.async=true;
		js.src=p+"://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, "script", "twitter-wjs");