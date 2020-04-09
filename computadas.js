const app = new Vue(
   {
      el: "#app",
      data: {
         mensaje: "Hola mi nombre es Hugo",
         contador: 0
      },
      methods: {
         controlPorcentaje(tipoControl) {
            if (tipoControl === 1 && this.contador < 100) {
               this.contador ++;
            } else if(tipoControl === 2 && this.contador > 0) {
               this.contador --;
            }
         }
      },
      computed: {
         invertido () {
            return this.mensaje.split("").reverse().join("");
         },
         color () {
            return {
               "bg-info": this.contador > 75,
               "bg-success": this.contador >= 50 && this.contador < 75,
               "bg-warning": this.contador >= 25 && this.contador < 50,
               "bg-danger": this.contador >= 0 && this.contador < 25
            }
         }
      }
   }
);