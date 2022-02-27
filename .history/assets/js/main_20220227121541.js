$(function () {
	let modal = document.getElementById("modal");
	let modalOpens = document.getElementsByClassName("modal-open");
	let modalCloses = document.getElementsByClassName("modal-close");

	for (let modalOpen of modalOpens) {
		modalOpen.onclick = function () {
			modal.classList.add("is-modal-open");
		};
	}
	for (let modalClose of modalCloses) {
		modalClose.onclick = function () {
			modal.classList.remove("is-modal-open");
		};
	}
});
$(document).ready(function(){
	$('.single-item').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	  $('.multiple-items').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});
	$('.one-time').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  touchMove: false,
	  slidesToScroll: 1
	});
	$('.uneven').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4
	});
	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
	$('.autoplay').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000
	});
  });