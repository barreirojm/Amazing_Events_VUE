const { createApp } = Vue

const url = 'https://mh.up.railway.app/api/amazing-events/'

  createApp({
    data() {
      return {        
        event: {}
      }
    },
    created(){
        this.capturedId()
    },
    
    methods: {

        async capturedId(){
            let query = location.search
            let params = new URLSearchParams(query)
            let id = params.get('id');
            try{
                let fetchResponse = await fetch(url)
                let response = await fetchResponse.json()
                console.log(response)
                response = response.events.find((each) => each.id === id)
                console.log(response);
                this.event = response
            }
            catch(error){
                console.log(error);
            }
        }
    },
   
    computed: {

    }
    
}).mount('#app')