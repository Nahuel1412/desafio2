
let botonLog=document.getElementById(`botonLog`);

// -------FUNCION INICIAR SESION AL HACER CLICK-------
botonLog.onclick= () => {

    function ingresar() {
        const usuario = document.getElementById(`usuario`).value;
        const pass = document.getElementById(`pass`).value;

        // --------CONDICION PARA INGRESAR AL SISTEMA--------
        if (usuario != "" && pass != "") {
        
        localStorage.setItem(`persona`, usuario); // LOCAL STORAGE GUARDAR USUARIO

        let timerInterval // ALERT!!! BIENVENIDA AL USUARIO
        Swal.fire({
          title: `Bienvenid@ ${usuario}`,
          html: 'Ingresaras al sistema en <b></b> millisegundos.',
          timer: 2500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })

        // --------TIEMPO PARA REDIRECCIONAR AL SISTEMA--------
        setInterval(function(){window.location.href = `pages/menu.html`}, 2600);

        // -------- ALERT!!! SI NO SE CUMPLE LA CONDICION--------
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Alguno de los campos no fue completado',
          })
        }
        
    }
    
    ingresar();

}
