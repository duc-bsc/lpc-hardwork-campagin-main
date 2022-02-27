let modal = document.getElementById("modal");
let modalOpens = document.getElementsByClassName("modal-open");
let modalCloses = document.getElementsByClassName("modal-close");

for (let modalOpen of modalOpens) {
	modalOpen.onclick = function () {
		modal.style.display = "flex";
	};
}
for (let modalClose of modalCloses) {
	modalClose.onclick = function () {
		modal.style.display = "none";
	};
}
$(window).load(function(){
	//Nội dung jquery viết ở đây...
});
