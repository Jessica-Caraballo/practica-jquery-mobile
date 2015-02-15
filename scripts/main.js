/*Obliga a completar usuario y contraseña*/
$("input[type=submit]").click(function(e) {
    $nombre = $("#nombre").val();
     $password = $("#password").val();
        if ($nombre == '' || $password == '') {
            e.preventDefault();
            alert("Por favor, complete su nombre de usuario y/o contraseña.");
        }else{
           window.location.href="#alumnos"; 
        }
});

/*Muestra en la bienvenida el nombre de usuario del profesor*/
$('#alumnos').live('pagebeforeshow',function(event, ui){
    $('#mensaje').text($('#nombre').val());
});

/*Muestra el nombre del alumno cuando se guarda la nota*/
$('#selectAlumno').on('change', function(){
    $('#alumno').html($('#selectAlumno').val());
});

/*Obliga que seleccione curso y alumno*/
$("#evaluar").click(function(e) {
        if ($("#selectAlumno").val() == '' || $("#curso").val() == '') {
            e.preventDefault();
            alert("Por favor, seleccione un curso y el alumno que va a evaluar.");
        }else{
           window.location.href="#page1"; 
        }
});

/*Muestra la nota, y la actualiza*/
$('#pagina').on("pageshow",function(){
    $('#nota1_1').on('change', function(){
        $('#nota').html(
             parseFloat($('#nota1_1').val())
            +parseFloat($('#nota1_2').val())
            +parseFloat($('#nota1_3').val())
            +parseFloat($('#nota2_1').val())
            +parseFloat($('#nota3_1').val())
            );
    });
    $('#nota1_2').on('change', function(){
        $('#nota').html(
             parseFloat($('#nota1_1').val())
            +parseFloat($('#nota1_2').val())
            +parseFloat($('#nota1_3').val())
            +parseFloat($('#nota2_1').val())
            +parseFloat($('#nota3_1').val())
            );
    });
    $('#nota1_3').on('change', function(){
        $('#nota').html(
             parseFloat($('#nota1_1').val())
            +parseFloat($('#nota1_2').val())
            +parseFloat($('#nota1_3').val())
            +parseFloat($('#nota2_1').val())
            +parseFloat($('#nota3_1').val())
            );
    });
    $('#nota2_1').on('change', function(){
        $('#nota').html(
             parseFloat($('#nota1_1').val())
            +parseFloat($('#nota1_2').val())
            +parseFloat($('#nota1_3').val())
            +parseFloat($('#nota2_1').val())
            +parseFloat($('#nota3_1').val())
            );
    });
    $('#nota3_1').on('change', function(){
        $('#nota').html(
             parseFloat($('#nota1_1').val())
            +parseFloat($('#nota1_2').val())
            +parseFloat($('#nota1_3').val())
            +parseFloat($('#nota2_1').val())
            +parseFloat($('#nota3_1').val())
            );
    });            
});
