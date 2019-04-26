import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';

(function ($) {

	svg4everybody();

	$(function() {

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 16px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);


		// Slider


		let $slider = $('.slider__list');
			if ( $slider.length > 0 ) {
				$slider.slick({
					// slidesToShow: 3,
					arrows: false,
					speed: 400,
					// cssEase: 'fade',
					easing: 'ease',
					infinite: true,
					variableWidth: true,
					adaptiveHeight: true,
					draggable: false,
					focusOnSelect: true,
					touchMove: false,
					// centerPadding: "0px",
					// initialSlide: 0
					// appendArrows: ".slider__nav",
					// responsive: [{
					//   breakpoint: 768,
					//   settings: {
					//     slidesToShow: 1.2
					//   }
					// }, {
					//   breakpoint: 425,
					//   settings: {
					//     slidesToShow: 1.2
					//   }
					// }]

				});
			}


			// Magnific

			// $('.slider__image').magnificPopup({
			// 	type: 'image',
			// 	gallery:{
			// 		enabled:true
			// 	},
			// 	midClick: true,
			// 	closeBtnInside: true,
			// 	closeOnContentClick: true,
			// 	closeOnBgClick: true
			// });



			// Popup

			$('.popup-open').magnificPopup({
				type: 'inline',
				mainClass: 'popup-bg',
				closeBtnInside: false,

			});




			$('.popup__form').submit(function (event) {
				console.log(event);

				openPopup();


				function openPopup() {

					$.magnificPopup.open({
						items: {
							src: '#popup-success'
						},
						type: 'inline'
					});

					setTimeout(function() {
						// closePopup();
					}, 3000);

				}

			});




	});

})(jQuery);
