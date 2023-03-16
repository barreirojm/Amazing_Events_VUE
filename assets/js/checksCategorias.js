async function fetchApiCategorias() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResponse = await fetch(urlApi)

        let response = await fetchResponse.json()

        let categorias = []
        response.events.forEach(each => {
            if (!categorias.includes(each.category)) {
                categorias.push(each.category)
            }
        })

        function printChecks(id_etiqueta, array_categorias) {
            let container = document.querySelector(id_etiqueta)
            array_categorias = array_categorias.map(each => {
                return `
                <fieldset class="checkboxes">
                    <input onclick="fetchApiFilter()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
                    <label class="contact-label" for="${each}">${each}</label> 
                </fieldset>
                `
            })
            array_categorias.push(`
            <div class=searchbar>
                <input onkeyup="fetchApiFilter()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">
            </div>
        `)
            container.innerHTML = array_categorias.join('')
        }

        printChecks('#checkboxes', categorias)

    }
    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }

}

fetchApiCategorias()