Vue.component(
   "hijo",
   {
      template: `
         <div class="py-5 px-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>
            <h4>Nombre: {{nombre}}</h4>
            <button class="btn btn-warning" v-on:click="numero++"> + </button>
         </div>
      `,
      props: ["numero"],
      data() {
         return {
            nombre: "Hugo Alberto Rivera Díaz"
         }
      },
      mounted() {
         this.$emit(
            "nombreHijo",
            this.nombre
         )
      }
   }
)