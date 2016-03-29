;(function($, window, document, undefined ){'use strict';
 var elSel='#banner', $element=$(elSel);
 if(!$element.length)return true;
 var elHeight=0, elTop=0, $document=$(document), dHeight=0, $window=$(window), wHeight=0, wScrollCurrent=0, wScrollBefore=0, wScrollDiff=0;
 $window.on('scroll',function(){
   elHeight=$element.outerHeight(); dHeight=$document.height(); wHeight=$window.height(); wScrollCurrent=$window.scrollTop(); wScrollDiff=wScrollBefore-wScrollCurrent; elTop=parseInt($element.css('top'))+wScrollDiff;
	if(wScrollCurrent<=0) $element.css('top',0);
	else if(wScrollDiff>0) $element.css('top',elTop>0?0:elTop);
	else if(wScrollDiff<0) {$(".navbar-collapse").collapse('hide');    
       if(wScrollCurrent+wHeight>=dHeight-elHeight) $element.css('top',(elTop=wScrollCurrent+wHeight-dHeight)<0?elTop:0);
		   else $element.css('top',Math.abs(elTop)>elHeight?-elHeight:elTop);}
		   wScrollBefore = wScrollCurrent;});
})( jQuery, window, document );


// Floating label headings for the contact form
$(function() {$("body")
 .on("input propertychange", ".form-item",function(e) {
  $(this).toggleClass("form-item-filled",!! $(e.target).val());})
 .on("focus", ".form-item",function() {
  $(this).addClass("form-item-focused");})
 .on("blur", ".form-item",function() {
  $(this).removeClass("form-item-focused");});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});