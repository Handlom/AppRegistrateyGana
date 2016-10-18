'use strict';
app.controller("generalCtrl", function($scope, $location, $firebaseObject, $firebaseArray, $http){
	
	/*Accediendo a la tabla de la base de datos
	var refRegExpoTextil: Será la variable de referencia a la tabla.
	$scope.objBDRegExpoTextil: Scope que almacenará en forma de arreglo la referencia a la base de datos.
	$scope.objPersona: Scope objeto que almacenará los datos del formulario.
	var auto: Sección numerica del codigo que será generada por el metodo Math.floor, teniendo como rango desde 1111 al 9999.
	$scope.codigo: Scope que concatenará la sección  de texto del codigo con la numerica.
	*/
	var refRegExpoTextil = firebase.database().ref("registrosExpoTextil");
	$scope.objBDRegExpoTextil = $firebaseArray(refRegExpoTextil);
	$scope.objPersona={};	
	
    var auto = Math.floor((Math.random() * 9999) + 1111);
    $scope.codigo= "HDL"+auto;

    var servicioSelecionado;

    var objPersona={
    	contacto:'',
		email:'',
		servicio:'',
		telefono:'',
		codicupon:''
    };

    /**/
	/*Ejecutando formato del Select de Materializecss*/
	$(document).ready(function() {
        $('select').material_select();
    });

	$scope.seleccionarServicio = function(ss){
		servicioSelecionado=ss;
	}

	$scope.agregarCategoria = function(){
		//console.log(servicioSelecionado);
		objPersona.contacto=$scope.objPersona.contacto;
		objPersona.email=$scope.objPersona.email;
		objPersona.servicio=servicioSelecionado;
		objPersona.telefono=$scope.objPersona.telefono;
		objPersona.codicupon=$scope.codigo;
		$scope.objBDRegExpoTextil.$add(objPersona);
		$scope.objPersona={};

		$http({
            method : 'POST',
            url : 'index.php',
            data: {
            	servicioSelecionado: servicioSelecionado,
            	email: objPersona.email,
            	codigo: objPersona.codicupon
            	},
            headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	    }).success(function(res){
	            console.log(res);
	    }).error(function(error){
	            console.log(error);
		});
	    $scope.objPersona={};
		window.location.href="#index.html";

	}
});