const { createApp } = Vue

createApp({
    data() {
        return {
            emails: ""
        }
        
    },
    methods: {
        
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            
            
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            console.log(resp.data);
            if(resp.data.success) {
                this.emails+= resp.data.response;
                
            }
            console.log(this.emails);
        });}
    }
}).mount('#app')

//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//BONUS: far comparire gli indirizzi email solamente quando sono stati tutti generati.

// Consigli di Luca per l'esercizio:

// recuperare email e aggiungerla all'array x 10 volte:

// ciclo for e push in array

// v-for per visualizzare tutte e 10 le email in pagina