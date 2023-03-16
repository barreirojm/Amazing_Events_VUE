async function fetchApi() {
    try {
        let urlApi = url
        let fetchResponse = await fetch(urlApi)
        console.log(fetchResponse);
        let response = await fetchResponse.json()
        console.log(response);

        printTemplates('#cardEvents', response.events)

    }
    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }

}

fetchApi()