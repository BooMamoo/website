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
		<link rel="stylesheet" href="css/template.css">

		<script src="js/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>	
		<script src="js/angular.js"></script> 
		<script src="js/angular-route.js"></script> 
		<script src="js/angular-resource.js"></script>
		<script src="js/app.js"></script>

		<!-- Controller -->

		<script src="js/Controller/DeviceController.js"></script>
		<script src="js/Controller/DeviceInfoController.js"></script>
		<script src="js/Controller/DeviceDataController.js"></script>

		<!-- Factory -->

		<!-- Directive -->

		<title> Website </title>
	</head>

	<body class="grey lighten-3" ng-app="app">

		<div class="container content">

			@yield('content')

		</div>

		<script>
			$(document).ready(function() {

				@yield('script')

			});
		</script>
	</body>

</html>