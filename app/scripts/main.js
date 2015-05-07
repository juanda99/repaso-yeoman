'use strict';
     


$('#enviar').click(function() {
    /*var $boton = $(this);*/
    var promesa = $.ajax({
        url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
        dataType: 'json'
    });

    promesa.done(function(futbolistas) {
        console.log('success');
        $('#enviar').css('display', 'none');

        //$.each(array/object, function(index, val) {
        /* iterate through array or object */
        //});
        var filas;
        $.each(futbolistas, function(index, futbolista) {
            var fila;
            $.each(futbolista, function(index, val) {
                if (index==='imagen') {
					fila += '<td><img src="images/' + val + '"></td>';
                } 
                else if (index==='desc') {
                	fila += '<td><a href="" data-toggle="tooltip" data-placement="top" title="' + val + '">' + val.substring(0,8) + '[...]</a></td>';
                }
                else {
                	fila += '<td>' + val + '</td>';
                }
            });
            filas +='<tr>'+fila+ '</tr>';
        });
        $('#listado tbody').append(filas);
        $('[data-toggle="tooltip"]').tooltip();  
        $('#listado').css('display', 'block');
    });

    promesa.fail(function() {
        console.log('error');
    });
});
