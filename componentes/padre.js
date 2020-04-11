Vue.component(
   "padre",
   {
      template: `
         <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}} </h2>
            <h6>Nombre recibido desde el Hijo: {{nombrePadre}} </h6>
            <hijo class="my-3" :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
            <button class="btn btn-info" v-on:click="numeroPadre++"> + </button>
         </div>
      `,
      data() {
         return {
            numeroPadre: 0,
            nombrePadre: ""
         }
      }
   }
)