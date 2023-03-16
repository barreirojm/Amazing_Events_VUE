async function tablaUno() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events
        let eventos2 = response.events
        
        eventos = eventos.sort((evento1, evento2) => evento2.assistance - evento1.assistance)              
            
        document.getElementById("tablaUno").innerHTML = `
              
                <colgroup span="3" class="columns"></colgroup>
                <tr>
                    <th colspan="3">
                        <p class="textos-planilla">Events statistics</p>
                    </th>

                </tr>
                <tr>
                    <td rowspan="1">
                        <p class="textos-planilla">Events with the highest percentage of attendance</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Events with the lowest percentage of attendance</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Event with larger capacity</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>${eventos[0].name}</p>
                    </td>
                    <td>
                        <p>${eventos[eventos.length-1].name}</p>
                    </td>
                    <td>
                        <p>${eventos2[0].name}</p>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <p>${eventos[0].assistance}</p>
                    </td>
                    <td>
                        <p>${eventos[eventos.length-1].assistance}</p>
                    </td>
                    <td>
                        <p>${eventos2[0].capacity}</p>
                    </td>
                </tr>      
            
    `;
        
    }

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaUno();

async function tablaDos() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events

        for (let evento of eventos) {
            evento.revenue = evento.price * evento.estimate
        }        

        let categorias = []
        eventos.forEach(each => {
            if (!categorias.includes(each.category)) {
                categorias.push(each.category)
            }
        })

        categorias.sort()        

        let arrayTablaDos = []

        for (let category of categorias) {
            let capacityTotal = 0;
            let assistanceTotal = 0;
            let revenue = 0;

            categoriasporEventos = eventos.filter (evento => evento.category === category)

            categoriasporEventos.forEach (evento => {
                capacityTotal += evento.capacity;
                assistanceTotal += evento.estimate;
                revenue += evento.revenue;
            })

            let assistancePercentage = (assistanceTotal / capacityTotal) * 100;
            assistancePercentage = Math.trunc(assistancePercentage) + '%';            

            let filaTabla = `
                    <tr>
                        <td><p>${category}</p></td>
                        <td><p>$${revenue}</p></td>
                        <td><p>${assistancePercentage}</p></td>
                    </tr>
            `;

            arrayTablaDos.push(filaTabla);
        }

        document.getElementById("tablaDos").innerHTML +=  `

            <colgroup span="3" class="columns"></colgroup>
                <tr>
                    <th colspan="3">
                        <p class="textos-planilla">Upcoming events statistics by category</p>
                    </th>
                </tr>
                <tr>
                    <td rowspan="1">
                        <p class="textos-planilla">Categories</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Revenues (estimated)</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Percentage of attendance (estimated)</p>
                    </td>
                </tr>
        ` 
        + arrayTablaDos.join("")
    }    

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaDos();

async function tablaTres() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events

        for (let evento of eventos) {
            evento.revenue = evento.price * evento.assistance
        }        

        let categorias = []
        eventos.forEach(each => {
            if (!categorias.includes(each.category)) {
                categorias.push(each.category)
            }
        })

        categorias.sort()

        let arrayTablaTres = []

        for (let category of categorias) {
            let capacityTotal = 0;
            let assistanceTotal = 0;
            let revenue = 0;

            categoriasporEventos = eventos.filter (evento => evento.category === category)

            categoriasporEventos.forEach (evento => {
                capacityTotal += evento.capacity;
                assistanceTotal += evento.assistance;
                revenue += evento.revenue;
            })

            let assistancePercentage = (assistanceTotal / capacityTotal) * 100;
            assistancePercentage = Math.trunc(assistancePercentage) + '%';

            let filaTabla = `
                    <tr>
                        <td><p>${category}</p></td>
                        <td><p>$${revenue}</p></td>
                        <td><p>${assistancePercentage}</p></td>
                    </tr>
            `;

            arrayTablaTres.push(filaTabla);
        }

        document.getElementById("tablaTres").innerHTML +=  `

            <colgroup span="3" class="columns"></colgroup>
                <tr>
                    <th colspan="3">
                        <p class="textos-planilla">Past events statistic by category</p>
                    </th>
                </tr>
                <tr>
                    <td rowspan="1">
                        <p class="textos-planilla">Categories</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Revenues</p>
                    </td>
                    <td>
                        <p class="textos-planilla">Percentage of attendance</p>
                    </td>
                </tr>
        ` 
        + arrayTablaTres.join("")
    }

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaTres();