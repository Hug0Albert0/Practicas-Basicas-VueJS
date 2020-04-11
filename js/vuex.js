Vue.component(
   "hijo_vuex",
   {
      template: `
         <div>
            <button class="btn btn-info btn-lg" @click="$store.commit('aumentar')">+</button>
            <h1>Numero Hijo: {{$store.state.numero}} </h1>
         </div>
      `
   },
)

Vue.component(
   "titulo",
   {
      template: `
         <div>
            <h1>Numero: {{$store.state.numero}} </h1>
            <hijo_vuex></hijo_vuex>
         </div>
      `
   },
)

/*
Vue.component(
   "mensaje",
   {
      template: `
         <p>{{texto}}</p>
      `,
      props: ["texto"],
      data(){
         return{
            texto: "Hola"
         }
      }
   },
)*/

const store = new Vuex.Store({
   state: {
      numero: 10
   },
   mutations: {
      aumentar() {
         this.state.numero++;
      },
      disminuir() {
         this.state.numero--;
      }
   }
})

const app = new Vue(
   {
      el: "#app",
      store,
      data: {
         saludo : "Probando componentes de Vue JS"
      }
   }
);


