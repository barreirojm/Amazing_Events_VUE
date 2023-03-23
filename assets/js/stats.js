const { createApp } = Vue

const url = 'https://mh.up.railway.app/api/amazing-events'
const urlUpcoming = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
const urlPast = 'https://mh.up.railway.app/api/amazing-events?time=past'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            eventos: [],
            arrayCategories: [],
            arrayCategories2: []
        }
    },
    created() { 
        this.tablaUno()
        this.tablaDos()
        this.tablaTres()
    },
    methods: { 
        async tablaUno() {
            try {
                let response = await fetch(urlPast)
                response = await response.json()
                this.eventos = response.events
                //this.eventos2 = response.events
                this.eventos = this.eventos.sort((ev1, ev2) => ev2.assistance - ev1.assistance)
                //console.log(this.eventos);
            }
            catch(error){
                console.log(error);
            }
        },

        async tablaDos(){
            
            try {
                let fetchResponse = await fetch(urlUpcoming)
                let response = await fetchResponse.json()

                let arrayEvents = response.events;

                let categories = [... new Set((arrayEvents).map(each => each.category))].sort()

                let arrayCategories = categories.map(each => arrayEvents.filter(every => every.category === each))

               // console.log(arrayCategories);
                
                this.arrayCategories = arrayCategories.map(each => {
                    return each.reduce((acc, valorActual) => {
                        let suma = {
                            totalEstimate: acc.totalEstimate + valorActual.estimate,
                            totalCapacity: acc.totalCapacity + valorActual.capacity,
                            gain: (valorActual.estimate * valorActual.price) + acc.gain,
                            percentEstimate: Math.trunc(acc.totalEstimate / acc.totalCapacity * 100),
                            category: valorActual.category
                        }
                        return suma;
                    },
                    {totalEstimate: 0,
                    totalCapacity: 0,
                    gain:0,
                    percentEstimate: 0,
                    category: ''
                    }

                    )
                })


                console.log(this.arrayCategories);
            }
            catch (error) {
                console.log('ocurrió un error');
                console.log(error);
            }
        },

        async tablaTres(){

            try {
                let fetchResponse = await fetch(urlPast)
                let response = await fetchResponse.json()

                let arrayEvents = response.events;

                let categories = [... new Set((arrayEvents).map(each => each.category))].sort()

                let arrayCategories = categories.map(each => arrayEvents.filter(every => every.category === each))

               // console.log(arrayCategories);
                
                this.arrayCategories2 = arrayCategories.map(each => {
                    return each.reduce((acc, valorActual) => {
                        let suma = {
                            totalAssistance: acc.totalAssistance + valorActual.assistance,
                            totalCapacity: acc.totalCapacity + valorActual.capacity,
                            gain: (valorActual.assistance * valorActual.price) + acc.gain,
                            percentAssistance: Math.trunc(acc.totalAssistance / acc.totalCapacity * 100),
                            category: valorActual.category
                        }
                        return suma;
                    },
                    {totalAssistance: 0,
                    totalCapacity: 0,
                    gain:0,
                    percentAssistance: 0,
                    category: ''
                    }

                    )
                })


                console.log(this.arrayCategories2);
            }
            catch (error) {
                console.log('ocurrió un error');
                console.log(error);
            }
        }
    },
    computed: {     /* objeto con todos los métodos que se ejectuan automaticamente cuando CAMBIA un estado */
    }
})

app.mount("#app")