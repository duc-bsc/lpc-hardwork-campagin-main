import { createProduct } from "./ProductCard.js"

const pollyCuppedFlighting = {
  logoAlt: "Polly Cupped Flighting",
  imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
}

const pollyCuppedFlightingLogo = "./assets/images/pollyCuppedFlighting.svg"
const feefloLogo = "./assets/images/freeflo.svg"
const hitchSaverLogo = "./assets/images/hitch-saver.svg"
const quickHingeLogo = "./assets/images/quick-hinge.svg"
const theCloserLogo = "./assets/images/the-closer.svg"
const extracreLogo = "./assets/images/extracreLogo.png"
const straightFlightingLogo = "./assets/images/straightFlighting.svg"
const uhmwWearshoesLogo = "./assets/images/uhmw-wearshoes.svg"
const exoPlateLogo = "./assets/images/exo-plate.svg"
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
      productPageUrl: "https://www.lundellplastics.com/planting-products/bulk-fill-tubes.asp",
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
    {
      logoAlt: "HITCHSAVER",
      // logoCaption: "HITCHSAVER",
      logoSrc: hitchSaverLogo,
      imgSrc: "https://www.lundellplastics.com/images/hitchsaver.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/hitchsaver.asp",
      productTitle: "HITCHSAVER",
      desc: "The HitchSaver is a tough little ring made for abuse. Planting season is busy enough without adding on preventable repairs. The HitchSaver reduces friction between the implement and the drawbar, greatly extending the life of your expensive draw bar.",
    },
    {
      logoAlt: " QUICKHINGE",
      // logoCaption: "QUICKHINGE",
      logoSrc: quickHingeLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-QuickHinge.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/quickhinge.asp",
      productTitle: "QUICKHINGE",
      desc: "During planting, the last thing you want to deal with is lost lids. The QuickHinge keeps lids secure and makes it easier to fill your planter boxes.",
    },
    {
      logoAlt: " ExtrAcre",
      // logoCaption: "ExtrAcre",
      logoSrc: extracreLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-ExtrAcre-Planter-Seed-Box-Extension.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/extracre.asp",
      productTitle: "ExtrAcre",
      desc: "Reduce the stop and go that results from the constant need to refill your planter boxes. With planter box extensions, you can increase each hopper's capacity by over a bushel, maximizing the number of rows between you and your next fill.",
    },
    {
      logoAlt: " The Closer",
      // logoCaption: "The Closer",
      logoSrc: theCloserLogo,
      imgSrc: "https://www.lundellplastics.com/images/01x101-1.png",
      productPageUrl: "https://www.lundellplastics.com/planting-products/closer-closing-wheels.asp",
      productTitle: "The Closer",
      desc: 'The Closer closing wheels ensures adequate seed-to-soil contact while eliminating side wall compaction. Curved tooth design prevent lifting of the seed. Works in a wide variety of soil types and tillage practices. Non-stick poly design works great for in-between" nitrogen applications. Great for no-till and full tillage corn emergence.',
    },

  ],
  "modal-2": [
    {
      logoAlt: " Polly Cupped Flighting",
      // logoCaption: "Polly Cupped Flighting",
      logoSrc:  pollyCuppedFlightingLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/poly-cupped-flighting.asp",
      productTitle: "Polly Cupped Flighting",
      desc: 'Polly Cupped Flighting closing wheels ensures adequate seed-to-soil contact while eliminating side wall compaction. Curved tooth design prevent lifting of the seed. Works in a wide variety of soil types and tillage practices. Non-stick poly design works great for in-between" nitrogen applications. Great for no-till and full tillage corn emergence.',
    },
    {
      logoAlt: " Straight Flighting",
      // logoCaption: "Straight Flighting",
      logoSrc:  straightFlightingLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Straight-Flighting.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/poly-straight-flighting.asp",
      productTitle: "Straight Flighting",
      desc: 'When you order our Poly Straight Flighting, direct from our factory, you know you’re getting the best technology at the best price.',
    },
    {
      logoAlt: " UHMW WEARSHOES",
      // logoCaption: "UHMW WEARSHOES",
      logoSrc:  uhmwWearshoesLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-UHMW-Auger-Wearshoes.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/uhmw-auger-wearshoes.asp",
      productTitle: "UHMW WEARSHOES",
      desc: 'Lundell Plastics’ UHMW Wearshoes bring many of the benefits of plastic flighting to steel grain augers. They’re easy to install and bring instant benefits in the fall, including an increased harvesting rate and a slick surface that prevents build-up.',
    },
    {
      logoAlt: " Combine Tank Cross Floor Liners",
      logoCaption: "Combine Tank Cross Floor Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/combine-tank-cross-floor-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/combine-tank-cross-floor-liners.asp",
      productTitle: "TANK CROSS FLOOR LINER",
      desc: 'We’ve added a wide array of new ExoPlate™ Combine Tank Cross Floor Liner sizes to fit your new or used combine to keep it working as it should.',
    },
    {
      logoAlt: " Corn Head Auger Trough Liners",
      logoCaption: "Corn Head Auger Trough Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/corn-head-auger-trough-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/corn-head-auger-trough-liners.asp",
      productTitle: "CORN HEAD AUGER LINER",
      desc: 'ExoPlate™ Corn Head Auger Trough Liners are durable, long-lasting liners that fit a variety of applications. That means that all your valuable equipment stays protected, keeping your machinery running smoothly throughout the entire harvest season.',
    },
    {
      logoAlt: " Corn Head Parts",
      logoCaption: "Corn Head Parts",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/ear-saver-flaps.jpg",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/corn-head-parts.asp",
      productTitle: "Corn Head Parts",
      desc: 'ExoPlate™ Corn Head Parts are durable and long-lasting, keeping your head performing the way a new head would.',
    },
    {
      logoAlt: " Grain Cart Floor Liners",
      logoCaption: "Grain Cart Floor Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/grain-cart-floor-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/grain-cart-floor-liners.asp",
      productTitle: "Grain Cart Floor Liners",
      desc: 'Extend the life of your equipment with ExoPlate™ Grain Cart Floor Liners. Specifically designed to fit the floor of each grain cart model with ease, our UHMW plastic liners are highly resistant to corrosion, outlasting steel. With easy installation, protecting your equipment can save you valuable time and money.',
    },
    {
      logoAlt: " Shoe Auger Trough Liners",
      logoCaption: "Shoe Auger Trough Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/shoe-auger-bed-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/shoe-auger-bed-liners.asp",
      productTitle: "Shoe Auger Trough Liners",
      desc: 'ExoPlate™ Shoe Auger Trough Liners keep your grain flowing smoothly in high-wear environments. Pre-formed from ox-tough UHMW, our auger trough liners wear hard and install easy, shielding your equipment from costly corrosion year after year.',
    },
    {
      logoAlt: " TANK FILL TUBE LINER DETAILS",
      logoCaption: "TANK FILL TUBE LINER DETAILS",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/tank-fill-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/tank-fill-tube-liners.asp",
      productTitle: "TANK FILL TUBE LINER DETAILS",
      desc: 'ExoPlate™ Tank Fill Tube Liners have been specially designed for fill tubes. They outwear steel by reducing friction, power consumption and buildup. The liners cover the entire length of tube to ensure that your combine stays protected. And with easy installation, guarding your equipment from corrosion is more convenient than ever.',
    },
    {
      logoAlt: " Tube Liners",
      logoCaption: "Tube Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/tube-liners.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/tube-liners.asp",
      productTitle: "Tube Liners",
      desc: 'The all-new ExoPlate™ Tube Liners are durable, long-lasting liners that fit a variety of applications. ExoPlate™ Tube Liners are available in a variety of diameters and thicknesses, which means that all your valuable equipment will stay protected.',
    },
    {
      logoAlt: " U-Trough Liners",
      logoCaption: "U-Trough Liners",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Exoplate-U-Trough.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/u-trough-liners.asp",
      productTitle: "U-Trough Liners",
      desc: 'Protect your U-troughs and keep work flowing smoothly with the all-new ExoPlate U-Trough liners. Made of our durable ExoPlate, they provide critical protection in the high-wear environment of U-troughs.',
    },
    {
      logoAlt: " ExtReach Combine Access Handles",
      logoCaption: "ExtReach Combine Access Handles",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/extreach-combine-access-handles.jpg",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/extreach-combine-access-handles.asp",
      productTitle: "ExtReach Handles",
      desc: 'Handle extensions for John Deere rear access platforms are easy to install and make opening and closing the rear access platform much simpler.',
    },
    {
      logoAlt: " Skid Shoes",
      logoCaption: "Skid Shoes",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/combine-skid-shoes.jpg",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/skid-shoes.asp",
      productTitle: "Skid Shoes",
      desc: 'ExoPlate™ Skid Shoes are a perfect update for your older head or an excellent replacement for your worn-down skid shoes. ExoPlate™ Skid Shoes have a glove-like fit to eliminate problematic gaps, boosting performance and reducing downtime.',
    },
    {
      logoAlt: " Stalk Stompers",
      logoCaption: "Stalk Stompers",
      logoSrc:  exoPlateLogo,
      imgSrc: "https://www.lundellplastics.com/images/Stalk-Stomper-Group.jpg",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/stalk-stomper-replacement-shoes.asp",
      productTitle: "Stalk Stompers",
      desc: 'ExoPlate™ Stalk Stompers replace worn-out stomper shoes and extend stubble damage protection on combines, tractors, and planters.',
    },
    {
      logoAlt: " HITCHSAVER",
      // logoCaption: "HITCHSAVER",
      logoSrc:  hitchSaverLogo,
      imgSrc: "https://www.lundellplastics.com/images/hitchsaver.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/hitchsaver.asp",
      productTitle: "HITCHSAVER",
      desc: 'Harvest can do some damage to your drawbar—fortunately, HitchSaver is a tough ring made for abuse. It reduces friction between your implement and drawbar, extending the life of your drawbar and saving you unneeded problems during harvest.',
    },
    {
      logoAlt: " SUMP GUARD ",
      logoCaption: "SUMP GUARD ",
      // logoSrc:  SumpGuardLogo,
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-SumpGuard.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/sumpguard.asp",
      productTitle: "SUMP GUARD",
      desc: 'We tend to look down on down time, and nothing is more frustrating than having to unclog a grain bin sump. SumpGuard only allows the quality grain to pass on through, so you can keep your sights on the job at hand.',
    },
    {
      logoAlt: " AIR FILTER CLEANER ",
      logoCaption: "AIR FILTER CLEANER ",
      // logoSrc:  SumpGuardLogo,
      imgSrc: "https://www.lundellplastics.com/images/air-filter-cleaner.png",
      productPageUrl: "https://www.lundellplastics.com/harvest-products/air-filter-cleaner.asp",
      productTitle: "AIR FILTER CLEANER ",
      desc: 'Save time and money by cleaning your own air filters with the Air Filter Cleaner.',
    },
  ],
  "modal-3": [
    {
      logoAlt: "Polly Cupped Flighting",
      // logoCaption: "Polly Cupped Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Cupped-Flighting.png",
      logoSrc: pollyCuppedFlightingLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/poly-cupped-flighting.asp",
      productTitle: "Learn more",
      desc: "Lundell Poly Cupped Flighting has uses far beyond its agricultural origin. Made from durable, abrasion-resistant poly material, Poly Cupped Flighting provides longevity and effective handling for almost any material in an industrial setting.",
    },
    {
      logoAlt: "straight Flighting",
      // logoCaption: "straight Flighting",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Poly-Straight-Flighting.png",
      logoSrc: straightFlightingLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/poly-straight-flighting.asp",
      productTitle: "Learn more",
      desc: "When you order our Poly Straight Flighting, direct from our factory, you know you're getting the technology at the best price. Poly Straight Flighting is made from High Density Polyethylene (HDPE), which is safe for food handling and able to handle tough jobs like transporting corrosive materials.",
    },
    {
      logoAlt: "UHMW WEARSHOES",
      // logoCaption: "UHMW WEARSHOES",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-UHMW-Auger-Wearshoes.png",
      logoSrc: uhmwWearshoesLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/uhmw-auger-wearshoes.asp",
      productTitle: "Learn more",
      desc: "Steel isn't always second-rate. With the protection of Lundell Plastics UHMW Wearshoes, it's OK by us. These wear shoes extend the life of any auger, protecting equipment and improving operations in any industrial job.",
    },
    {
      logoAlt: "EXO PLATE",
      logoCaption: "U-Trough Liners",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Exoplate-U-Trough.png",
      logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/u-trough-liners.asp",
      productTitle: "Learn more",
      desc: "Protect your U-troughs and keep work flowing smoothly with the all-new ExoPlate U-trough liners. Made of our durable ExoPlate, they provide critical protection in the high-wear environment of U-troughs.",
    },
    {
      logoAlt: "EXO PLATE",
      logoCaption: "General Use Liners",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Exoplate-U-Trough.png",
      logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/general-liners.asp",
      productTitle: "Learn more",
      desc: "You’re hardworking and your equipment is hardworking, why not keep it that way? ExoPlate is made of our ox-tough UHMW, so it's ready for the most difficult applications. The wear-resistant surface gladly takes the abuse as your new or used equipment carries on. Plus, the FDA approval rating means it's safe for food handling.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Drag Conveyor Paddles",
      imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/drag-conveyor-paddles.asp",
      productTitle: "Learn more",
      desc: "We can make custom paddles to fit any shape or make of drag flight conveyor. Paddles can be made out of UHMW or hi-temp UHMW depending on the temperature of the material being handled. Paddles are precision cut for easy installation.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Custom Poly Products",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/custom-poly-products.asp",
      productTitle: "Learn more",
      desc: "Put Lundell’s decades of experience to work on your own innovative ideas! Whether you have a new idea to improve your equipment, or need a replacement part that simply can't be found, Lundell Plastics has the capability to create anything you can imagine.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Injection Molding",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/injection-molding.asp",
      productTitle: "Learn more",
      desc: "At Lundell, innovation is only limited by your imagination. We’ll help your innovative ideas take shape with our cutting-edge injection molding technology. Whatever industry you are in or project you have in mind, we'll work with you to custom fabricate products that meet your needs.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Plastic Machining CNC Routing",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/plastic-machining-cnc-routing.asp",
      productTitle: "Learn more",
      desc: "Our automated precision opens the door to a world of possibilities. With the ability for 5–axis CNC routing and a continuously expanding range of tools, we can provide customers with the high quality machine parts in an efficient and precise manner. We invest in our facility's operations so we can continue to progress and innovate along with our customers.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Thermoforming",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/thermoforming.asp",
      productTitle: "Learn more",
      desc: "Our advanced thermoforming technology allows for the cost effective production of large parts with minimal tooling costs. This means turning your ideas into reality comes standard with competitive pricing and a quick turnaround time.",
    },
    {
      // logoAlt: "EXO PLATE",
      logoCaption: "Protective Plastic Materials",
      // imgSrc: "https://www.lundellplastics.com/images/product-lineup-Drag-Conveyor-Paddles.png",
      // logoSrc: exoPlateLogo,
      productPageUrl: "https://www.lundellplastics.com/industrial-products/protective-plastics-material.asp",
      productTitle: "Learn more",
      desc: "In case you’re feeling creative, we also offer HDPE sheets and other uncut industrial plastic products (such as HMWPE or UHMW) in full or partial sheets to meet your specific needs.",
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
        ${props.imgSrc ? `  <img class="mx-auto d-block" src="${props.imgSrc}" alt="${props.productTitle}" />` : ""}
        
          <figure class="mx-auto mb-2 d-block">
            <a title="${props.productTitle}" href="${props.productPageUrl}">
            ${props.logoSrc ? `<img src="${props.logoSrc}" alt="${props.productTitle}" />` : ""}
              
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
