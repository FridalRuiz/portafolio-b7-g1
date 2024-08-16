// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Frida López Ruiz')
  .pauseFor(300)
  .deleteAll()
  .typeString('Estudiante de Biología')
  .pauseFor(1000)
  .start();



  

    


    
    
