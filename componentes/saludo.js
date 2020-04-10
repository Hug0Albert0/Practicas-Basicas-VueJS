Vue.component(
   "saludo",
   {
      template: `
         <div>
            <h1>{{saludo}}</h1>
            <h3>{{nombre}}</h3>
         </div>
      `,
      data () {
         return {
            saludo: "Testing de componentes",
            nombre: "Hugo"
         }
      }
   }
);