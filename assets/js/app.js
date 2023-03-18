const { createApp } = Vue

const url = 'https://mh.up.railway.app/api/amazing-events'
const urlUpcoming = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
const urlPast = 'https://mh.up.railway.app/api/amazing-events?time=past'

  createApp({
    data() {
      return {
        eventos : [],
        categorias : [],
        eventosFuturos : [],
        eventosPasados : []
      }
    },
    created(){
        this.fetchApi()
    },
    methods: {
        async fetchApi() {
            try {
                let response = await fetch(url)
                response = await response.json()
                this.eventos = response.events 
                this.categorias = [... new Set((response.events).map(each => each.category))].sort()
                let responseUpcoming = await fetch(urlUpcoming)
                responseUpcoming = await responseUpcoming.json()
                this.eventosFuturos = responseUpcoming.events
                let responsePast = await fetch(urlPast)
                responsePast = await responsePast.json()
                this.eventosPasados = responsePast.events
                console.log(this.eventos);
                console.log(this.categorias);
                console.log(this.eventosFuturos);
                console.log(this.eventosPasados);
            } catch(error) {
                console.log(error)
            }
        }

    },
    computed: {

    }
    
}).mount('#app')