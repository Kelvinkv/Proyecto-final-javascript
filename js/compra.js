const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const procesarCompraBtn = document.getElementById('procesar-compra');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);
}



function formu () {
  let emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $(".error").remove();
  if( $(".nombre").val() == "" ){
      $(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
      return false;
  }else if( $(".apellido").val() == ""){
      $(".apellido").focus().after("<span class='error'>Ingrese su apellido</span>");
      return false;    
  }else if( $(".email").val() == "" || !emailreg.test($(".email").val()) ){
      $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
      return false;
  
  }else if( $(".direccion").val() == "" ){
      $(".direccion").focus().after("<span class='error'>Ingrese una direccion</span>");
      return false;
  }
$(".nombre, .apellido, .direccion").keyup(function(){
  if( $(this).val() != "" ){
      $(".error").fadeOut();
      return false;
  }
});
$(".email").keyup(function(){
  if( $(this).val() != "" && emailreg.test($(this).val())){
      $(".error").fadeOut();
      return false;
  }
});
}  

function procesarCompra() {
  
  if (formu() == false){
     Swal.fire('Faltan datos en el formulario')
  }else {
    Swal.fire({
      title: '¿Deseas finalizar la compra?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, finalizar compra!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Tu compra fue realizada!',
          'Se enviaran los datos para el pago a tu correo.',
          'success',
          setTimeout( function() { 
            window.location.href = "./libros.html"; 
            window.localStorage.clear()
          }, 3500 )
        )
      }
    })
  }  
}
  









  
  
        


