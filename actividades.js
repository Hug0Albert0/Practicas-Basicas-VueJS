const app = new Vue(
   {
      el: "#app",
      data: {
         titulo: "Actividades Diarias (Cuarentena)",
         subtitulo: "Hugo Alberto Rivera Diaz",
         nuevaTarea: "",
         tareas: []
      },
      methods: {
         agregarNuevaTarea() {
            if (this.nuevaTarea) {
               this.tareas.push({
                  descripcion: this.nuevaTarea,
                  estado: 1
               });
               this.nuevaTarea = "";
               this.guardarLocalStorage();
            }
         },
         actualizarTarea(indice, estado) {
            this.tareas[indice].estado = estado;
            this.guardarLocalStorage()
         },
         guardarLocalStorage(tarea) {
            localStorage.setItem(
               "actividades-vue",
               JSON.stringify(this.tareas)
            );
         }
      },
      created () {
         let datosDB = JSON.parse(localStorage.getItem("actividades-vue"));
         if(datosDB) {
            this.tareas = datosDB;
         } else {
            this.tareas = [];
         }
      }
   }
);