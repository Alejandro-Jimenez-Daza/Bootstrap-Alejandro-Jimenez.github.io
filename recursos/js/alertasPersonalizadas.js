function mensaje (){
    swal("Buen trabajo", "Hiciste click en el botón!", "success")

}

function sal (){
    swal("Salir", "¿Seguro que quieres cerrar sesión?", "warning")

}

function elm (){
    swal({
        title: "¿Quieres borrar este registro?",
        text: "Verifica que sea  el correcto",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Eliminar",
        closeOnConfirm: false
      },
      function(){
        swal("Correcto", "El registro se ha eliminado satisfactoriamente.", "success");
      });

}