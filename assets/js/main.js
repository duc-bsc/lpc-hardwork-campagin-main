import { createProduct } from "./ProductCard.js"

const modals = {
  "modal-1": [
    {
      logoAlt: "Polly Cupped Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      logoSrc: "/assets/images/pollyCuppedFlighting.svg",
      productPageUrl: "https://www.lundellplastics.com/planting-products/poly-cupped-flighting.asp",
      productTitle: "Polly Cupped Flighting",
      desc: "What happens when you combine the longevity of Lundell's poly technology with trusted university testing? You get Poly Cupped Flighting, a tough industry giant that handles your crop with care.",
    },
  ],
  "modal-2": [
    {
      logoAlt: "Polly Cupped Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      logoSrc: "/assets/images/pollyCuppedFlighting.svg",
      productPageUrl: "https://www.lundellplastics.com/planting-products/poly-cupped-flighting.asp",
      productTitle: "Polly Cupped Flighting",
      desc: "What happens when you combine the longevity of Lundell's poly technology with trusted university testing? You get Poly Cupped Flighting, a tough industry giant that handles your crop with care.",
    },
  ],
  "modal-3": [
    {
      logoAlt: "Polly Cupped Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      logoSrc: "/assets/images/pollyCuppedFlighting.svg",
      productPageUrl: "https://www.lundellplastics.com/planting-products/poly-cupped-flighting.asp",
      productTitle: "Polly Cupped Flighting",
      desc: "What happens when you combine the longevity of Lundell's poly technology with trusted university testing? You get Poly Cupped Flighting, a tough industry giant that handles your crop with care.",
    },
  ],
}

let modalOpens = document.getElementsByClassName("modal-open")
let modalCloses = document.getElementsByClassName("modal-close")
for (let modalOpen of modalOpens) {
  modalOpen.onclick = function () {
    const modalName = modalOpen.dataset.modal
    const modal = document.getElementById(modalName)
    modal.classList.add("is-modal-open")
    var elem = modal.querySelector(".js-flickity")

    console.log(elem)
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
    })
    modal.querySelector(".js-flickity").innerHTML = modals[modalName].map(createProduct).join("")
  }
}
for (let modalClose of modalCloses) {
  modalClose.onclick = function () {
    modalClose.parentElement.parentElement.parentElement.classList.remove("is-modal-open")
  }
}
