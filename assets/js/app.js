const { createApp } = Vue

const url = 'https://mh.up.railway.app/api/amazing-events'
const urlUpcoming = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
const urlPast = 'https://mh.up.railway.app/api/amazing-events?time=past'

  createApp({
    data() {
      return {
        eventos: [],
        categorias: [],
        eventosFuturos: [],
        eventosPasados: [],
        checks: [],
        text: "",
        eventosFiltrados: [],
        eventosFuturosFiltrados: [],
        eventosPasadosFiltrados: []
        
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
                this.eventosFiltrados = response.events
                this.categorias = [... new Set((response.events).map(each => each.category))].sort()
                let responseUpcoming = await fetch(urlUpcoming)
                responseUpcoming = await responseUpcoming.json()
                this.eventosFuturos = responseUpcoming.events
                this.eventosFuturosFiltrados = responseUpcoming.events
                let responsePast = await fetch(urlPast)
                responsePast = await responsePast.json()
                this.eventosPasados = responsePast.events
                this.eventosPasadosFiltrados = responsePast.events
                //console.log(this.eventos);
                //console.log(this.categorias);
                //console.log(this.eventosFuturos);
                //console.log(this.eventosPasados);

                

            } catch(error) {
                console.log(error)
            }
        },

        /* getAnchorLink(evento) {
          return `./details.html?id=${evento.id}`;
        }, */

        filterData() {
          //console.log(this.text);
          //console.log(this.checks);

          this.eventosFiltrados = this.eventos.filter(each => {
            return (each.name.toLowerCase().includes(this.text.toLowerCase())) && (this.checks.length === 0 || this.checks.includes(each.category))
        })            
        
        console.log(this.eventosFiltrados);
          
        },

        filterDataUpcoming() {
          //console.log(this.text);
          //console.log(this.checks);

          this.eventosFuturosFiltrados = this.eventosFuturos.filter(each => {
            return (each.name.toLowerCase().includes(this.text.toLowerCase())) && (this.checks.length === 0 || this.checks.includes(each.category))
        })            
        
        console.log(this.eventosFuturosFiltrados);
          
        },

        filterDataPast() {
          //console.log(this.text);
          //console.log(this.checks);

          this.eventosPasadosFiltrados = this.eventosPasados.filter(each => {
            return (each.name.toLowerCase().includes(this.text.toLowerCase())) && (this.checks.length === 0 || this.checks.includes(each.category))
        })            
        
        console.log(this.eventosPasadosFiltrados);
          
        }



        
        

    },
   
    computed: {
      

    }
    
}).mount('#app')