(function(){
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){
      
      
            




        //CAMPOS DATOS DE USUARIO
        var nombre=document.getElementById('nombre');
        var paterno=document.getElementById('paterno');
        var materno=document.getElementById('materno');
        var email=document.getElementById('email');
        var celular=document.getElementById('celular');

        //CAMPOS PASES
        var pase_dia= document.getElementById('pase_dia');
        var pase_dosdias= document.getElementById('pase_dosdias');
        var pase_completo= document.getElementById('pase_completo');

        //BOTONOES Y DIVS
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //EXTRAS
        var camisas=document.getElementById('camisa_evento');
        var etiquetas=document.getElementById('etiquetas');

      if(document.getElementById('calcular')){


        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        paterno.addEventListener('blur', validarCampos);
        materno.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
        celular.addEventListener('blur', validarCampos);
        celular.addEventListener('blur', validarCelular);



/*        //Hora en la pagina
        var actualizarHora = function() {
        	var fecha = new Date(),
        	ampm,
        	horas = fecha.getHours(),
        	minutos =fecha.getMinutes(),
        	segundos= fecha.getSeconds();
        	diaSemana= fecha.getDay(),
        	dia= fecha.getDate(),
        	mes= fecha.getMonth(),
        	year= fecha.getFullYear();

        var pHoras = document.getElementById('horas');	
        var pMinutos = document.getElementById('minutos');
        var pSegundos = document.getElementById('segundos');
        var pAMPM = document.getElementBy('ampm');
         	pMes = document.getElementById('mes')

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];
		pHoras.textContent = horas;
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
		pAMPM.textContent= ampm;

		};
		actualizarHora();
		var intervalo = setInterval(actualizarHora, 1000);


*/





        function validarCampos() {
          if(this.value == ''){
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Este campo es obligatorio";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
          } else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc';
          }
        }

        function validarMail() {
          if(this.value.indexOf("@")> -1) {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc';
          } else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Debe tener al menos un @";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
          }
        }

        function validarCelular() {
          if(celular.length == 9) {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc';
          }else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Debe tener 9 digitos";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
          }
        }


        function calcularMontos(event){
          event.preventDefault();
          console.log("ola k ase");
          if(regalo.value === ''){
            alert("Debes elegir un regalo");
            regalo.focus();
          }else {
              var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                  boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                  boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                  cantCamisas = parseInt(camisas.value, 10)|| 0,
                  cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

              var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .97) + (cantEtiquetas * 2);

              var listadoProductos = [];
              if(boletosDia >= 1){
                  listadoProductos.push(boletosDia + 'Pases por día');
              }
              if(boletos2Dias >= 1){
                  listadoProductos.push(boletos2Dias + 'Pases por dos días');
              }
              if (boletoCompleto >= 1) {
                  listadoProductos.push(boletoCompleto + 'Pases Completos');
              }
              if (cantCamisas >= 1) {
                  listadoProductos.push(cantCamisas + 'Camisas');
              }
              if (cantEtiquetas >= 1) {
                  listadoProductos.push(cantEtiquetas + 'Etiquetas');
              }
              lista_productos.style.display ="block";
              lista_productos.innerHTML = '';
              for (var i = 0; i <listadoProductos.length; i++) {
                  lista_productos.innerHTML += listadoProductos[i] + '<br/>';
              }

              suma.innerHTML = "$" +totalPagar.toFixed(2);
          }


        }
        function mostrarDias(){
          var boletosDia = parseInt(pase_dia.value, 10)|| 0,
              boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
              boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

          var diasElegidos = [];


          if(boletosDia > 0){
            diasElegidos.push('viernes');
            console.log(diasElegidos);
          }
          if(boletos2Dias > 0){
            diasElegidos.push('viernes','sabado');
            console.log(diasElegidos);
          }
          if (boletoCompleto > 0) {
            diasElegidos.push('viernes','sabado','domingo');
            console.log(diasElegidos);
          }
          for (var i = 0; i < diasElegidos.length; i++) {
            document.getElementById(diasElegidos[i]).style.display = 'block';
          }
        }



      }



    });//DOM CONTENT LOADED
})();


$(function() {

	//Lettering
	$('.nombre-sitio').lettering();

  //Menu fijo
  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function() {
      var scroll = $(window).scrollTop()
      if(scroll > windowHeight) {
        $('.barra').addClass('fixed');
        $('body').css({'margin-top': barraAltura+'px'});
      }else{
        $('.barra').removeClass('fixed');
        $('body').css({'margin-top': '0px'});
      }
  });
  //Menu Reponsive
   $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
   });




	// Programa de Conferencias
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');	

	$('.menu-programa a').on('click', function(){
		$('.menu-programa a').removeClass('activo')//Remover cuando dejo de darle click al boton
		$(this).addClass('activo');//Pondra cctivo cuando le den click algun evento
		$('.ocultar').hide();

		var enlace= $(this).attr('href');
		$(enlace).fadeIn(1000);

		return false;
	});
	//Animaciones para los Numeros
	$('.resumen-evento li:nth-child(1) p').animateNumber({number:4}, 1200);	
	$('.resumen-evento li:nth-child(2) p').animateNumber({number:7}, 1200);
	$('.resumen-evento li:nth-child(3) p').animateNumber({number:6}, 1200);
	$('.resumen-evento li:nth-child(4) p').animateNumber({number:15}, 1200);

	//Cuenta regresiva
	$('.cuenta-regresiva').countdown('2019/06/01 15:00:00', function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));

	})
})





