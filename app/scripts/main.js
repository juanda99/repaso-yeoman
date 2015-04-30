'use strict'

$('#enviar').click(function() {
	var $boton = $(this);
    var promesa = $.ajax({
        url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
        dataType: 'json'
    });

    promesa.done(function(futbolistas) {
        console.log('success');
        $("#enviar").css('display', 'none');

        //$.each(array/object, function(index, val) {
        /* iterate through array or object */
        //});
    	var  filas;
        $.each(futbolistas, function(index, futbolista) {
        	var fila;
        	$.each(futbolista, function(index, val) {
        		fila += '<td>'+ val + '</td>';
        	});
        	filas += '<tr>' + fila + '</tr>';
        });
        $('#listado tbody').append(filas);
        $('#listado').css('display', 'block');
    });

    promesa.fail(function() {
        console.log('error');
    });
});
