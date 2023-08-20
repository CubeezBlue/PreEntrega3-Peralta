// Boton Crear Post
const botonCrearPost = document.querySelector("#crear");
const textoPost = document.getElementById("textoPost");
const imgBlog = document.querySelector(".img-blog");
textoPost.addEventListener("click", () => {
    textoPost.classList.add("expand")
    imgBlog.classList.add("d-none")
})

botonCrearPost.addEventListener("click", () => {
    let textPost = document.getElementById("textoPost").value

})