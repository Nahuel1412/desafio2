
let boton=document.getElementById('boton');

// -------FUNCION CAPTURAR DATOS CLIENTES AL HACER CLICK-------
boton.onclick= () => {
    function persona(nombre,pedido,estado){
        this.nombre=nombre;
        this.pedido=pedido;
        this.estado=estado;
        }
    
    let nombreCapturar=document.getElementById('nombre').value;
    // console.log(nombreCapturar);
    let pedidoCapturar=document.getElementById('pedido').value;
    // console.log(pedidoCapturar);
    let estadoCapturar=document.getElementById('estado').value;
    // console.log(estadoCapturar);
    
    nuevoSujeto=new persona(nombreCapturar,pedidoCapturar,estadoCapturar);
    console.log(nuevoSujeto);

    agregar();

    Toastify({

        text: "Se agrego el cliente a la fila!",
        
        duration: 3000
        
        
    }).showToast();
};

// -------AQUI SE GUARDAN LOS DATOS DE LOS CLIENTES-------
let listaClientes=[];

// -------FUNCION GUARDAR DATOS CLIENTES Y LLEVARLOS A LA LISTA-------
function agregar(){
    listaClientes.push(nuevoSujeto);
    console.log(listaClientes);
    document.getElementById("tabla").innerHTML += '<br><tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.pedido+'</td><td>'+nuevoSujeto.estado+'</td></tbody>';
};