import getData from "../utils/getData"

const footer = async () => {
    const data = await getData()
    let pg = []
    for(let i = 1; i<= data.info.pages; i++) {
        pg.push(i)
    }
    let count = 0
    const view = `
        <div class"Footer-pages">
            <h4>Pages</h4>
            <div>
                ${pg.map(() => 
                    `<a href="#/?page=${++count}">${count}${" "}</a>`
                ).join("")}
            </div>
        </div>
    `
    return view
}

export default footer