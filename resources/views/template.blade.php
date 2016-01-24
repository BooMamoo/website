<!doctype html>

<html>
	<head>
		<base href="/">

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content="iot platform">
		<meta name="description" content="The project is about creating an IoT platform for connecting many devices into one point which we can easily manage or get the data.">

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/css/materialize.min.css">	
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<!-- <link rel="stylesheet" href="css/materialize.min.css"> -->
		<link rel="stylesheet" href="css/template.css">

		<script src="js/jquery.min.js"></script>
		<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>	 -->
		<script src="js/materialize.min.js"></script> 
		<script src="js/angular.js"></script> 
		<script src="js/angular-route.js"></script> 
		<script src="js/angular-resource.js"></script>
		<script src="js/app.js"></script>

		<!-- Controller -->

		<script src="js/Controller/IndexController.js"></script>
		<script src="js/Controller/DeviceController.js"></script>
		<script src="js/Controller/DeviceInfoController.js"></script>
		<script src="js/Controller/DeviceDataController.js"></script>

		<!-- Factory -->

		<!-- Directive -->

		<script src="js/Directive/RepeatDirective.js"></script>

		<title> IoT PAS </title>
		<link rel="shortcut icon" href="../picture/icon-web.png" type="image/png">
	</head>

	<body ng-app="app">
		<div class="navbar-fixed">
			<nav>
			    <div class="nav-wrapper">
					<a href="{{ url('/') }}" class="brand-logo space"><img src="../picture/text.png" alt="Text" height="41" width="111.11"></a>

					<ul class="right hide-on-med-and-down space valign-wrapper">
						<li><a href="{{ url('/device') }}"> DEVICES </a></li>

						@if(!Auth::guest())
							<li><a href="{{ url('/analyze') }}"> ANALYZE </a></li>
						@endif

						<li><a href="{{ url('/api') }}" class=""> API </a></li>

						@if (Auth::guest())
							<li><a href="{{ url('/auth/login') }}" target="_self"> LOG IN </a></li>
							<div class="tmp"></div>
							<li><a href="{{ url('') }}" target="_self" class="sign-up"> SIGN UP </a></li>
						@else
							<li><a class="dropdown-button" href="" data-activates="dropdown1"> {{ Auth::user()->name }} <i class="mdi-navigation-arrow-drop-down right"></i></a></li>
							<ul id="dropdown1" class="dropdown-content">
								<li><a href="{{ url('/auth/logout') }}" target="_self"> LOG OUT </a></li>
							</ul>
						@endif
					</ul>

					<ul id="nav-mobile" class="side-nav pink lighten-4">
						@if (Auth::guest())
							<li><a href="{{ url('') }}" target="_self" class="blue-grey-text darken-4-text"><b> SIGN UP </b></a></li>
							<li><a href="{{ url('/auth/login') }}" target="_self" class="blue-grey-text darken-4-text"> LOG IN </a></li>
						@else
							<li><a class="dropdown-button" href="" data-activates="dropdown1" class="blue-grey-text darken-4-text"> {{ Auth::user()->name }} <i class="mdi-navigation-arrow-drop-down right"></i></a></li>
							<ul id="dropdown1" class="dropdown-content">
								<li><a href="{{ url('/auth/logout') }}" target="_self" class="blue-grey-text darken-4-text"> LOG OUT </a></li>
							</ul>
						@endif

						<li><a href="{{ url('/device') }}" class="blue-grey-text darken-4-text"> DEVICES </a></li>

						@if(!Auth::guest())
							<li><a href="{{ url('/analyze') }}" class="blue-grey-text darken-4-text"> ANALYZE </a></li>
						@endif
						
						<li><a href="{{ url('/api') }}" class="blue-grey-text darken-4-text"> API </a></li>
					</ul>
					
					<a href="#" data-activates="nav-mobile" class="button-collapse space right"><i class="material-icons">menu</i></a>
				</div>
			</nav>
		</div>

		<div>

			@yield('content')

		</div>

		<footer class="page-footer transparent">	
		    <div class="footer-copyright red lighten-1">
				<div class="space right">
				    By Boo Mamoo :)
				</div>
		    </div>
		</footer>

		<script>
			$(document).ready(function() {

				$('.button-collapse').sideNav({
						edge: 'right'
					}
				);

				$('select').material_select();
				
				@yield('script')

			});
		</script>
	</body>

</html>