
$(function(){
	let modal = document.getElementById("modal");
	let modalOpens = document.getElementsByClassName("modal-open");
	let modalCloses = document.getElementsByClassName("modal-close");

	for (let modalOpen of modalOpens) {
		modalOpen.onclick = function () {
			modal.classList.add("modal-open");
		};
	}
	for (let modalClose of modalCloses) {
		modalClose.onclick = function () {
			modal.classList;
		};
	}
});
