const app = new Vue(
   {
      el: "#app",
      data: {
         titulo: "Hola mundo con VueJS",
         frutas: [
            {
               nombre: "Pera",
               cantidad: 20
            },
            {
               nombre: "Manzana",
               cantidad: 15
            },
            {
               nombre: "Plátano",
               cantidad: 0
            }
         ],
         nuevaFruta: "",
         totalFrutas: 0
      },
      methods: {
         agregarFruta () {
            this.frutas.push(
               {
                  nombre: this.nuevaFruta,
                  cantidad: 0
               }
            );
            this.nuevaFruta = "";
            this.nuevaCantidad = 0;
         }
      },
      computed: {
         sumarFrutas() {
            this.totalFrutas = 0;
            for(fruta of this.frutas) {
               this.totalFrutas += fruta.cantidad;
            }
            return this.totalFrutas;
         }
      }
   }
);