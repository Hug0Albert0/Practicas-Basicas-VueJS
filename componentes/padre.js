Vue.component(
   "padre",
   {
      template: `
         <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}} </h2>
            <hijo class="my-3" :numero="numeroPadre"></hijo>
            <button class="btn btn-info" v-on:click="numeroPadre++"> + </button>
         </div>
      `,
      data() {
         return {
            numeroPadre: 0
         }
      }
   }
)