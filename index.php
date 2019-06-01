<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/all.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald|PT+Sans" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" />
</head>
  <header class="site-header">
    <div class="hero">
      <div class="contenido-header">
        <nav class="redes-sociales">
          <a href="#"><i class="fab fa-facebook-f"></i></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </nav>
        <div class="informacion-evento">
            <div class="clearfix">
                <p id="mes" class="fecha"><i class="fas fa-calendar-alt"></i> 01-06 </p>
                <!---<p id="relojito" class="relojito"><i class="far fa-clock"></i></p>
                <div class="reloj">
                  
                    <p id="horas" class="horas">12</p>
                    <p>:</p>
                    <p id="minutos" class="minutos">10</p>
                    <p>:</p>
                    <div class="caja-segundos">
                        <p id="ampm" class="ampm">pm</p>
                        <p id="segundos" class="segundos">15</p>
                    </div>
                </div>
                -->
                
                <p class="ciudad"><i class="fas fa-map-marker-alt"></i> Lima, Perú</p>
            </div>
          <h1 class="nombre-sitio">Cuponera</h1>
          <p class="slogan">Promociones que nos <span>Identifica</span>.</p>

        </div><!--.informacion-evento-->

      </div>
     </div> <!--.hero-->

  </header>



<?php  
require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://demoarqui.azurewebsites.net', 
    'ck_1272a04532b3a7abc710cf502030d1ea3d9b885f', 
    'cs_2612ae55e36a78737ce447f5c68b20287cb9ff5e',
    [
    	'wp_api'  => true,
        'version' => 'wc/v3',
    ]
);

$data=$woocommerce->get('products');

?>
<div class="promito">
	<h1>PROMOCIONES DEL DIA</h1>	
</div>

<?php
foreach ($data as $key => $value){
		$nombre = $data[$key]->name; 
		$descripcion = $data[$key]->description;
		$precio = $data[$key]->price_html;
		$images= $data[$key]-> images;
		$foto = $images[0]->src;
		$categories=$data[$key]-> categories;
		$categoria = $categories[0]->name;
		
		echo "
		<div class='tamaño'>
			<div class='producto'>
			<ul class='categoria'>
			<h2>$categoria</h2>
			</ul>
			<h2> $nombre </h2>
			<img style='width:200 px;' class='mr-3' src='http://demoarqui.azurewebsites.net$foto' alt='Generic placeholder image'>
			<ul class='precio'>
			<h2> $precio </h2>
			</ul>
			<ul class='descripcion'>
			<h5>$descripcion</h5>
			</ul>
			</div>
		</div>	
			";
}
	
?>
  <section class="seccion">
      <h2>Promocion Valida</h2>
      <div class="cuenta-regresiva contenedor">
          <ul class="clearfix">
              <li><p id="segundos" class="numero"></p>segundos</li>
              <li><p id="minutos" class="numero"></p>minutos</li>
              <li><p id="horas" class="numero"></p>horas</li>
              <li><p id="dias" class="numero"></p>días</li>
          </ul>
      </div>
  </section>

<div id="mapa" class="mapa"></div>
  <footer class="site-footer">
    <div class="contenedor clearfix">
        <div class="footer-informacion">
            <h3>Sobre <span>Cuponera</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="ultimos-tweets">
            <h3>Últimos <span>tweets</span></h3>
            <ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </ul>
        </div>
        <div class="menu">
            <h3>Redes <span>sociales</span></h3>
            <nav class="redes-sociales">
                <a href="#"><i class="fab fa-facebook-f"></i></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </nav>
        </div>
    </div>

    <p class="copyright">
      Todos los derechos Reservados &copy; .<span>Cuponera</span>
    </p>

  </footer>


<script src="js/vendor/modernizr-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>
  <script src="js/plugins.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/jquery.lettering.js"></script>
  <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
  <script src="js/mapa.js"></script>
  <script src="js/main.js"></script>
  


  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async defer></script>