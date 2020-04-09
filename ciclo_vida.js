const app = new Vue(
   {
      el: "#app",
      data: {
         titulo: "Ciclo de Vida de VueJS",
      },
      methods: {
         destruir() {
            this.$destroy();
         }
      },
      beforeCreate() {
         console.log("beforeCreate");
      },
      created() {
         console.log(`Created, al crear los métodos, observadores y eventos, pero aún no accede al
         DOM. Aun no se puede acceder al 'el'`);
      },
      beforeMount() {
         console.log("beforeMount, se ejecuta antes de insertar el DOM");
      },
      mounted() {
         console.log("mounted, se ejecuta al insertar el DOM");
      },
      beforeUpdate() {
         console.log("beforeUpdate, Al detectar un cambio");
      },
      updated() {
         console.log("updated, Al realizar los cambios");
      },
      beforeDestroy() {
         console.log("beforeDestroy, Antes de destruir la instancia");
      },
      destroyed() {
         console.log("destroyed, Se destruye toda la instancia");
      }
   }
);