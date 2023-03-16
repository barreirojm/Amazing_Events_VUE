async function fetchApiDetails() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        /* console.log(fetchResponse); */
        let response = await fetchResponse.json()

        let queryString = location.search;

        let params = new URLSearchParams(queryString);

        let id = params.get("id");

        let cardEvento = response.events.find((event) => event.id == id);

        console.log(cardEvento);

        let card = document.getElementById("card-detail");

        card.innerHTML = `
                    <div class="container-card d-flex justify-content-center">
                                    <div class="card mb-3 mt-5 " style="max-width: 1440px;">
                                        <div class="row no-gutters">
                                            <div class="col-md-6">
                                                <img src="${cardEvento.image}" class="card-img img-fit-detail" alt="...">
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h5 class="card-title">${cardEvento.name}</h5>
                                                    <p class="card-text">${cardEvento.description}</p>
                                                    <p class="card-text">Place: ${cardEvento.place}</p>
                                                    <p class="card-text">Date: ${(new Date(cardEvento.date)).getDate()+1}/${(new Date(cardEvento.date)).getMonth()+1}/${(new Date(cardEvento.date)).getFullYear()}
                                                    </p>
                                                    <p class="card-text">Price: $${cardEvento.price}</p>                                        
                                                    <p class="card-text">Capacity: ${cardEvento.capacity}</p>
                                                    <button onclick="history.back()" class="btn btn-primary">Go Back</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                `;
    }

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

fetchApiDetails();