(function () {
    'use strict';


    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function () { // CAMPOS DE DATOS DEL USUARIO

        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // CAMPOS DE LOS PASES
        var pase_dia = document.getElementById('pase_dia');
        var pase_completo = document.getElementById('pase_completo');
        var pase_dosdias = document.getElementById('pase_dosdias');

        // BOTONES y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_producto = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        // OTROS
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        // ----FUNCIONES: llamo la funcion y la creo---
        // preparando el btn calcular

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);


        // VALIDACIONES
        nombre.addEventListener('blur', Validar);
        apellido.addEventListener('blur', Validar);
        email.addEventListener('blur', Validar);
        email.addEventListener('blur', ValidarEmail);


        function Validar() {
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function ValidarEmail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
                errorDiv.innerHTML = "";
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "debe contener @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("seleccione un regalo");
                regalo.focus();
            } else { // aca se hacen las operaciones
                var boletosDia = parseInt(pase_dia.value, 10) || 0, // creo la variable
                    boletosDosdias = parseInt(pase_dosdias.value, 10) || 0,
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                // console.log('boletos dia: ' + boletosDia);
                var totalPagar = (boletosDia * 30) + (boletosDosdias * 45) + (boletosCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);

                console.log(totalPagar);

                // creo un arreglo

                var listadoProductos = [];

                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por dia');
                }
                if (boletosDosdias >= 1) {
                    listadoProductos.push(boletosDosdias + ' Pases por 2 dias');
                }
                if (boletosCompleto >= 1) {
                    listadoProductos.push(boletosCompleto + ' Pases completos');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }


                lista_producto.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++) {
                    lista_producto.innerHTML += listadoProductos[i] + '<br/>';
                    console.log(listadoProductos);
                }

                suma.innerHTML = "$" + totalPagar.toFixed(2);

            }

        }

        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletosDosdias = parseInt(pase_dosdias.value, 10) || 0,
                boletosCompleto = parseInt(pase_completo.value, 10) || 0;

            var verDias = [];

            if (boletosDia > 0) {
                verDias.push('viernes');
                console.log(verDias);
            }
            if (boletosDosdias > 0) {
                verDias.push('viernes', 'sabado');
                console.log(verDias);
            }
            if (boletosCompleto > 0) {
                verDias.push('viernes', 'sabado', 'domingo');
                console.log(verDias);
            }

            for (var i = 0; i < verDias.length; i++) {
                document.getElementById(verDias[i]).style.display = 'block';
            }
        }

    }); // DOM CONTENT LOADED

})();
