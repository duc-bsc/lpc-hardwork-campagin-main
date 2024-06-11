$(function(){
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
$(document).on('ready', function() {
	$(".vertical-center-4").slick({
	  dots: true,
	  vertical: true,
	  centerMode: true,
	  slidesToShow: 4,
	  slidesToScroll: 2
	});
	$(".vertical-center-3").slick({
	  dots: true,
	  vertical: true,
	  centerMode: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});
	$(".vertical-center-2").slick({
	  dots: true,
	  vertical: true,
	  centerMode: true,
	  slidesToShow: 2,
	  slidesToScroll: 2
	});
	$(".vertical-center").slick({
	  dots: true,
	  vertical: true,
	  centerMode: true,
	});
	$(".vertical").slick({
	  dots: true,
	  vertical: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});
	$(".regular").slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});
	$(".center").slick({
	  dots: true,
	  infinite: true,
	  centerMode: true,
	  slidesToShow: 5,
	  slidesToScroll: 3
	});
	$(".variable").slick({
	  dots: true,
	  infinite: true,
	  variableWidth: true
	});
	$(".lazy").slick({
	  lazyLoad: 'ondemand', // ondemand progressive anticipated
	  infinite: true
	});
  });