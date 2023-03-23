const { createApp } = Vue

const url = 'https://mh.up.railway.app/api/amazing-events'
const urlUpcoming = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
const urlPast = 'https://mh.up.railway.app/api/amazing-events?time=past'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            eventos: [],
            eventos2: []
        }
    },
    created() { 
        this.tablaUno()
    },
    methods: { 
        async tablaUno() {
            try {
                let response = await fetch(urlPast)
                response = await response.json()
                this.eventos = response.events
                this.eventos2 = response.events
                this.eventos = this.eventos.sort((ev1, ev2) => ev2.assistance - ev1.assistance)
                console.log(this.eventos);
            }
            catch(error){
                console.log(error);
            }
        }
    },
    computed: {     /* objeto con todos los métodos que se ejectuan automaticamente cuando CAMBIA un estado */
    }
})

app.mount("#app")   /* monto la app de VUE */