'use strict';
app.controller("generalCtrl", function($scope, $location, $firebaseObject, $firebaseArray){
	
	/*Accediendo a la tabla de la base de datos
	var refRegExpoTextil: Será la variable de referencia a la tabla.
	$scope.objBDRegExpoTextil: Scope que almacenará en forma de arreglo la referencia a la base de datos.
	$scope.objPersona: Scope objeto que almacenará los datos del formulario.
	var objtest: Variable Array que recibirá la data la variable childData.
	var auto: Sección numerica del codigo que será generada por el metodo Math.floor, teniendo como rango desde 1111 al 9999.
	$scope.codigo: Scope que concatenará la sección  de texto del codigo con la numerica.
	*/
	var refRegExpoTextil = firebase.database().ref("registrosExpoTextil");
	$scope.objBDRegExpoTextil = $firebaseArray(refRegExpoTextil);
	$scope.objPersona={};	
	
	var objtest = [];
    var auto = Math.floor((Math.random() * 9999) + 1111);
    $scope.codigo= "HDL"+auto;
    /**/
	/*Ejecutando formato del Select de Materializecss*/
	$(document).ready(function() {
        $('select').material_select();
    });
	/**/
	/*Obtención de la tabla refRegExpoTextil(clave y registros)
	var key: Almacenará la clave de la variable retornada por la función snapshot.
	var childData: Almacenará la data de la variable retornada por la función snapshot.
	*/
	refRegExpoTextil.once("value")
	  .then(function(snapshot) {
	    snapshot.forEach(function(childSnapshot) {
	      var key = childSnapshot.key;
	      var childData = childSnapshot.val();
	      objtest.push(childSnapshot.val());
	  });
	});
	/**/
	/*Metodo de registro
	$scope.objBDRegExpoTextil.$add: Recibirá los datos a registrar en la base de datos
	*/
	$scope.agregarCategoria = function(){
		$scope.objBDRegExpoTextil.$add($scope.objPersona);
	}
	/**/
	/*Función donde se validará la existencia del RUC, en caso exista el boton de registro se deshabilitará y se mostrará un mensaje.*/
	$scope.valRuc = function(){
		for (var i = 0; i < objtest.length; i++) {		
			if (objtest[i].ruc===$scope.objPersona.ruc) {
				$scope.validacion='Este dato ya fue registrado.';
				/*Deshabilitando el boton con el id "submit-btn"*/
				$('#submit-btn').prop('disabled', true).addClass('disabled');
				break;
			}else{
				$scope.validacion='';
				/*Habilitando el boton con el id "submit-btn"*/
				$('#submit-btn').prop('disabled', false).removeClass('enabled');
				continue;
			}	
		}      	      
	}
	/**/
});