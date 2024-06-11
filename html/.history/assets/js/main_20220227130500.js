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
$(".abc").slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	// 
});
