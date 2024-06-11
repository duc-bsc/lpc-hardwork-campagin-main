// export type ProductCard = {
//   logoAlt: string
//   imgSrc: string
//   logoSrc: string
//   logoCaption?: string | undefined
//   productPageUrl: string
//   productTitle: string
//   desc: string
// }

export const createProduct = (props) => `<div class="product">
      <div>
        <img class="mx-auto d-block" src="${props.imgSrc}" alt="${props.productTitle}" />
        <figure class="mx-auto mb-2 d-block">
          <a title="${props.productTitle}" href="${props.productPageUrl}">
            <img src="${props.logoSrc}" alt="${props.productTitle}" />
          </a>
          ${props.logoCaption ? `<figcaption>${props.logoCaption}</figcaption>` : ""}
        </figure>
        <p class="mx-auto mb-2 max-w-250">${props.desc}</p>
      </div>
      <a class="button" target="_blank" href="${props.productPageUrl}">${props.productTitle} <i class="fas fa-chevron-circle-right"></i> </a>
    </div> `
