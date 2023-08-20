// Boton Crear Post
const botonCrearPost = document.querySelector("#crear");
const textoPost = document.getElementById("textoPost");
const imgBlog = document.querySelector(".img-blog");
const post = document.querySelector(".posts")
textoPost.addEventListener("click", () => {
    textoPost.classList.add("expand")
    imgBlog.classList.add("d-none")
})

botonCrearPost.addEventListener("click", () => {
    let textPost = document.getElementById("textoPost").value
    post.innerHTML = `<div class="post">
    <div class="d-flex align-items-center gap-3 flex-sm-column">
        <img class="img-blog" src="../img/WhatsApp Image 2020-10-18 at 21.55.07.jpg" alt="foto de perfil">
        <h4 class="text-center w-100">Nicolas</h4>
    </div>
    <div class="info-post">
        <p>${textPost}</p>
    </div>
    <div class="iconos">
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
        </button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <line x1="8" y1="12" x2="8" y2="12.01" />
                <line x1="16" y1="12" x2="16" y2="12.01" />
            </svg>
        </button>
    </div>`
})