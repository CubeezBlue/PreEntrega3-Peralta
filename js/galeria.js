// Galeria
const expandGaleria = document.querySelector(".img-galeria")
const bgImg = document.querySelector(".imagen-galeria")
const botonX = document.querySelector(".btn-X")
const expandImg = (reference) => {
    expandGaleria.classList.add("expand-img")
    bgImg.classList.add("full-img")
    expandGaleria.classList.remove("img-galeria")
    botonX.classList.add("d-flex")
    expandGaleria.src = reference
}

const btnX = () => {
    expandGaleria.classList.remove("expand-img")
    bgImg.classList.remove("full-img")
    expandGaleria.classList.add("img-galeria")
    botonX.classList.remove("d-flex")
}