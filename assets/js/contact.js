const { createApp } = Vue


  createApp({
    data() {
      return {   
        nombre: "",
        email: "",
        mensaje: ""       
        
      }
    },
    created(){
        this.captureData()
        
    },
    
    methods: {
        captureData() {
            const datosFormulario = {
                nombre: this.nombre,
                email: this.email,
                mensaje: this.mensaje
            }
            
            if (!Object.values(datosFormulario).some(valor => valor === '')) {
            console.log(datosFormulario)
            };
           
            if (!Object.values(datosFormulario).some(valor => valor === '')) {
                alert(`Hi there `+this.nombre+' thanks for reaching out.\nWe have received your message and will get back to you as soon as possible at your email: '+this.email+'\nAmazing Events.-');
            } 
        }
        
    },
   
    computed: {

    }
    
}).mount('#app')