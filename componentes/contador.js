Vue.component(
   "contador",
   {
      template: `
         <div>
            <h3>{{numero}}</h1>
            <button class="btn btn-success" v-on:click="actualizarContador(1)"> + </button>
            <button class="btn btn-danger" v-on:click="actualizarContador(2)"> - </button>
         </div>
      `,
      data () {
         return {
            numero: 0
         }
      },
      methods: {
         actualizarContador(tipoControl) {
            if (tipoControl === 1 && this.numero < 100) {
               this.numero ++;
            } else if(tipoControl === 2 && this.numero > 0) {
               this.numero --;
            }
         }
      }
   }
);