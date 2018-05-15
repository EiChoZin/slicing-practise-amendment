$.fn.smartBackgroundImage = function(url){
	var t = this;
	//create an img so the browser will download the image:
	$('<img />')
		.attr('src', url)
		.load(function(){ //attach onload to set background-image
			t.each(function(){ 
				$(this).css('backgroundImage', "url('"+url+"')" );
			});
		});
	return this;
 };
$(document).ready(function() {
	$('#fullpage').fullpage({
		/*menu: '#menu',
		anchors: ['firstPage', 'secondPage'],*/
		verticalCentered: true,
		sectionsColor: ['#000000', '#000000'],
		navigation: true,
		navigationPosition: 'right',
		verticalCentered: true,
		lazyLoading: true,
		onLeave: function(index, nextIndex, direction){
			
			if(nextIndex == 1){
				$('.logo h1').css({"border": "1px solid #000", "color": "#000"});
				$('.more').css("display","none");
			}
			else if(nextIndex == 2){
				$('.logo h1').css({"border": "1px solid #555", "color": "#555"});
				$('.more').css("display","block");
			}
		},
		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);
			//FIRE SCRIPT
			$(this).smartBackgroundImage($(this).data('src')); 
        }
	});
	$('.arrow').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('.more').click(function(){
		$.fn.fullpage.moveSectionUp();
	});
});
