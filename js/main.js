
$(document).ready( function(){

	
	//TOPLINK: links con scroll
		jQuery("a.toplink").click(function() {
		  jQuery("html, body").animate({
		    scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
		  }, {
		    duration: 500,
		    easing: "swing"
		  });
		  return false;
	});

	// SLICK: carrusel 
	// https://kenwheeler.github.io/slick/
	
	$('.carrusel').slick({
		//infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		variableWidth: true,
		dots: false,
		centerMode : true,
		centerMode: true,
	    focusOnSelect: true,
	    arrows: false
	});


	// funcionamiento galeria

	var videos = document.querySelectorAll('#videogrande article')
	var carrusel = document.querySelector('.carrusel')

	carrusel.addEventListener('click', function(e){
		//console.dir(e.target.dataset.video)
		var numero = e.target.dataset.video;

		videos.forEach( function(video){

			if(numero != video.dataset.videogrande){
				video.classList.remove('activo')
				
			} else{
				video.classList.add('activo')
				console.log(video.innerHTML)				
			}

		})
	})


	/*// API de Vimeo
	// https://developer.vimeo.com/player/sdk/basics
	var iframe = document.querySelector('iframe');
	   var player = new Vimeo.Player(iframe);

	   player.on('play', function() {
	     console.log('Played the video');
	   });

	   player.getVideoTitle().then(function(title) {
	     console.log('title:', title);
	   });

*/

})


