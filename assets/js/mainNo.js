import { createProduct } from "./ProductCard.js"

const pollyCuppedFlighting = {
  logoAlt: "Polly Cupped Flighting",
  imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
}

const pollyCuppedFlightingLogo = "/assets/images/pollyCuppedFlighting.svg"
const feefloLogo = "/assets/images/freeflo.svg"
const freeflo = "FreeFlo"

const modals = {
  "modal-1": [
    {
      logoSrc: pollyCuppedFlightingLogo,
      logoAlt: "Polly Cupped Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/poly-cupped-flighting.asp",
      productTitle: "Polly Cupped Flighting",
      desc: "What happens when you combine the longevity of Lundell's poly technology with trusted university testing? You get Poly Cupped Flighting, a tough industry giant that handles your crop with care.",
    },

    {
      logoAlt: "FreeFlo Bulk Fill Tubes",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-FreeFlo-Bulk-Fill-Tubes.png",
      logoSrc: feefloLogo,
      productPageUrl: "https://www.lundellplastics.com/planting-products/poly-cupped-flighting.asp",
      productTitle: "Bulk Fill Tubes",
      desc: "FreeFlo Bulk Fill Tubes are perfect for bulk fill applications where extended telescoping lengths are not required. They are compact yet flexible, allowing for easy positioning of the tube when loading your bulk fill planter.",
      logoCaption: "Bulk Fill Tubes",
    },
    {
      productTitle: "Telescoping Tubes",
      logoAlt: freeflo + " Telescoping Tubes",
      logoCaption: " Telescoping Tubes",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-FreeFlo-Telescoping-Tubes.png",
      logoSrc: feefloLogo,
      productPageUrl: "https://www.lundellplastics.com/planting-products/telescoping-tubes.asp",
      logoAlt: "Telescoping Tubes",
      desc: "FreeFlo Telescoping Tubes help you make quick work of seed loading. They extend and retract to distribute seed easier, faster, and with less spillage.",
    },
    {
      logoAlt: freeflo + " Wireless Remote",
      logoCaption: "Wireless Remote",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-FreeFlo-Wireless-Remote.png",
      logoSrc: feefloLogo,
      productPageUrl: "https://www.lundellplastics.com/planting-products/wireless-remote.asp",
      productTitle: "Wireless Remote",
      desc: "Introducing the all-new FreeFlo Wireless Remote. It gives you the ability to maneuver and power your FreeFlo tubes with the greatest of ease. Our handy remote is set conveniently in the handle for easy access and reach in the field, or can detach to go wherever you go during planting season!",
    },
    {
      logoAlt: freeflo + " Dry Inoculator",
      logoCaption: "Dry Inoculator",
      logoSrc: feefloLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-FreeFlo-Dry-Inoculator.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/dry-inoculator.asp",
      productTitle: "Dry Inoculator",
      desc: "The FreeFlo Dry Inoculator can accurately meter all dry materials such as inoculants, talc and graphite, making for higher planting accuracy and reduced wear. Seed lubricants or inoculants are common practice, but the FreeFlo Dry Inoculator takes your planting to the next level with evenly coated seed, every time.",
    },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "https://www.lundellplastics.com/planting-products/hitchsaver.asp",
    //   productTitle: "HitchSaver",
    //   desc: "The HitchSaver is a tough little ring made for abuse. Planting season is busy enough without adding on preventable repairs. The HitchSaver reduces friction between the implement and the drawbar, greatly extending the life of your expensive draw bar.",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
    // {
    //   logoAlt: "",
    //   imgSrc: "",
    //   logoSrc: "",
    //   productPageUrl: "",
    //   productTitle: "",
    //   desc: "",
    // },
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
let flkty = null

for (let modalOpen of modalOpens) {
  const modalName = modalOpen.dataset.modal
  const modal = document.getElementById(modalName)

  modalOpen.onclick = function () {
    modal.classList.add("is-modal-open")

    const elem = modal.querySelector(".js-flickity")

    const eleHTML = modals[modalName]
      .map((props) => {
        const div = `
      <div class="product">
        <div>
          <img class="mx-auto d-block" src="${props.imgSrc}" alt="${props.productTitle}" />
          <figure class="mx-auto mb-2 d-block">
            <a title="${props.productTitle}" href="${props.productPageUrl}">
              <img src="${props.logoSrc}" alt="${props.productTitle}" />
            </a>
            ${props.logoCaption ? `<figcaption>${props.logoCaption}</figcaption>` : ""}
          </figure>
          <p class=" mb-2 ">${props.desc}</p>
        </div>
        <a class="button" target="_blank" href="${props.productPageUrl}">${props.productTitle} <i class="fas fa-chevron-circle-right"></i> 
        </a> 
      </div>
      `
        return div
      })
      .join("")

    elem.innerHTML = eleHTML
  }

  let modalClose = modal.querySelector(".modal-close")
  modalClose.onclick = function () {
    modal.classList.remove("is-modal-open")
    flkty?.cells.forEach((item) => item.remove())
    flkty.destroy()
  }
}
// for (let modalClose of modalCloses) {
//   modalClose.onclick = function () {
//     modalClose.parentElement.parentElement.parentElement.classList.remove("is-modal-open")
//   }
// }
