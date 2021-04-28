const resolveRoutes = (route) => {
    if(route.length <= 3) {//si route = /, si no es igual a un id
        let validRoute = route === "/" ? route : "/:id"
        return validRoute
    }
    return `/${route}`//retorna about, algo que no va a cumplir con las características anteriores
}

export default resolveRoutes