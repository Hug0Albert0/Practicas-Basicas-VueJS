Vue.component(
   "hijo_vuex",
   {
      template: `
         <div>
            <button class="btn btn-info btn-lg" @click="aumentar(2)">Aumentar</button>
            <button class="btn btn-danger btn-lg" @click="disminuir(2)">Disminuir</button>
            <h1>Numero Hijo: {{numero}} </h1>
         </div>
      `,
      computed: {
         ...Vuex.mapState(["numero"])
      },
      methods: {
         ...Vuex.mapMutations(["aumentar", "disminuir"])
      }
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
      `,
      computed: {
         ...Vuex.mapState(["numero"])
      }
   }
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
      aumentar(state, aumento) {
         if (state.numero < 100) {
            state.numero += aumento;
         }
      },
      disminuir(state, decremento) {
         if(state.numero > 0) {
            state.numero -= decremento;
         }
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


