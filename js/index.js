$(function() {

    //LETTERING 
    $('.nombre-sitio').lettering();
    //BARRA DE MENU FIJO
    var ventanaALtura= $(window).height(); //tamaño de la ventana
    var barraAltura= $('.barra').innerHeight();//tamaño de la barra
    

    $(window).scroll(function(){
        var scroll= $(window).scrollTop();

        if(scroll>ventanaALtura){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    })


    //BARRA DE MENU HAMBURGUESA: responsive
    $('.menu-movil').on('click',function(){
        $('.navegacion-principal').slideToggle();

    })

    //CONFERENCIAS: para marcar las secciones: conf,taller y seminario.
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo'); // marca la seleccion

    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo'); // marco el enlace
        $('.ocultar').hide();
        var enlace = $(this).attr('href');

        $(enlace).fadeIn(1000);

        return false;
    })

    //ANIMACIONES TIEMPO
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);

    //CUENTA REGRESIVA

    $('.cuenta-regresiva').countdown('2021/12/10 10:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});