let boton=document.getElementById('boton')

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
    
    let nuevoSujeto=new persona(nombreCapturar,pedidoCapturar,estadoCapturar);
    console.log(nuevoSujeto);
}
