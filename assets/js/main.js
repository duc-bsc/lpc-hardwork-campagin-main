let modal = document.getElementById("modal")
let modalOpens = document.getElementsByClassName("modal-open")
let modalCloses = document.getElementsByClassName("modal-close")
for (let modalOpen of modalOpens) {
  modalOpen.onclick = function () {
    const modalName = modalOpen.dataset.modal
    console.log(modalName)
    document.getElementById(modalName).classList.add("is-modal-open")
  }
}
for (let modalClose of modalCloses) {
  modalClose.onclick = function () {
    modalClose.parentElement.parentElement.parentElement.classList.remove("is-modal-open")
  }
}
