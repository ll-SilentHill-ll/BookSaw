$(document).ready(function(){
	$('.js-tab_trigger').on('click', function() {
		var tabName = $(this).attr('data-tab');
		tab = $('.js-tab_contant[data-tab="'+tabName+'"]');

	$('.js-tab_contant.book_item_active').removeClass('book_item_active')

	tab.addClass('book_item_active');

  $('.js-tab_trigger.tab__item-active').removeClass('tab__item-active')

  $(this).addClass('tab__item-active');

	})

$('.userNameId').each(function () {
    if ($(this).text().length > 210){
        $(this).text($(this).text().substring(0,210)+ '...');
    }
})

$('.bestbook-p').each(function () {
    if ($(this).text().length > 130){
        $(this).text($(this).text().substring(0,100)+ '...');
    }
})

$('.heder-line').click(function(){
  $('.header-side_area').addClass('ddd')
})

$('.heder-line_area').click(function(){
  $('.header-side_area').removeClass('ddd')
})

$('.heder-subscribe_area').click(function(){
  $('.rightblock-subscribe_fixed').addClass('ddd2')
})
})
