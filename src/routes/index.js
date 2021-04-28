import header from "../templates/Header"
import home from "../pages/home"
import character from "../pages/Character"
import error404 from "../pages/Error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"

const routes = {
    "/": home,
    "/:id": character,
    "/contact": "Contact",
}

const router = async () => {
    const Header = null || document.getElementById("header")
    const Content = null || document.getElementById("content")

    Header.innerHTML = await header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : error404 //si obtenemos routes[route], es decir existe una ruta, la mostramos, si no, mostramos el Error404
    Content.innerHTML = await render()
}

export default router