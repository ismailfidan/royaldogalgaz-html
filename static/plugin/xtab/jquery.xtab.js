/*
 * @created	:   2015
 * @name 	:   jQuery xTab Menu
 * @version :   1.0
 * @author 	:   Ismail FIDAN
 * @mail 	:   info@psdizayn.com
 * @web 	:   Psdizayn.com
 */

$(function(){
	
	$.fn.xTab = function(ayarlar){
		var ayar = $.extend({
			'activeClass'	:	'active',
			'contentClass'	:	'content',
			'effect'		:	'show',
		}, ayarlar);
		return this.each(function(){
			$("li:first", this).addClass(ayar.activeClass);
			$("." + ayar.contentClass).hide();
			$("." + ayar.contentClass + ":first").show();
			$("li", this).click(function(){
				$(this).parent().find("li").removeClass(ayar.activeClass);
				$(this).addClass(ayar.activeClass);
				var indis	=	$(this).index();
				$("." + ayar.contentClass).hide();
				if( ayar.effect == 'slide'){
					$("." + ayar.contentClass+":eq("+indis+")").slideDown();
				}else if( ayar.effect == 'fade'){
					$("." + ayar.contentClass+":eq("+indis+")").fadeIn(500);
				}else{
					$("." + ayar.contentClass+":eq("+indis+")").show();
				}
			});
		});
	}
	
});