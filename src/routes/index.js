import header from "../templates/header"
import home from "../pages/home"
import character from "../pages/character"
import error404 from "../pages/error404"

const routes = {
    "/": home,
    "/:id": character,
    "/contact": "Contact"
}

const router = async () => {
    const Header = null || document.getElementById("header")
    const Content = null || document.getElementById("content")

    Header.innerHTML = await header()
}

export default router