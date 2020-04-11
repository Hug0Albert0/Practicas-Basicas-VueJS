Vue.component(
   "hijo_vuex",
   {
      template: `
         <div>
            <button class="btn btn-info btn-lg" @click="aumentar(2)">Aumentar</button>
            <button class="btn btn-danger btn-lg" @click="disminuir(2)">Disminuir</button>
            <h1>Numero Hijo: {{numero}} </h1>
            <button class="btn btn-dark btn-lg my-4" @click="obtenerCursos">Obtener Cursos</button>
            <ul v-for="curso of cursos">
               <li>{{curso.nombre}}</li>
            </ul>
         </div>
      `,
      computed: {
         ...Vuex.mapState(["numero", "cursos"])
      },
      methods: {
         ...Vuex.mapMutations(["aumentar", "disminuir"]),
         ...Vuex.mapActions(["obtenerCursos"])
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

const store = new Vuex.Store({
   state: {
      numero: 10,
      cursos: []
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
      },
      rellenarCursos (state, cursosAccion) {
         state.cursos = cursosAccion;
      }
   },
   actions: {
      obtenerCursos: async function ({commit}) {
         const data = await fetch("../src/cursos.json");
         const cursos = await data.json();
         commit("rellenarCursos", cursos);
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