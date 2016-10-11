'use strict';
app.controller("generalCtrl", function($scope, $location, $firebaseObject, $firebaseArray){

	/*Ejecutando formato del Select de Materializecss*/
	$(document).ready(function() {
        $('select').material_select();
    });
     /*$scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };*/
	//Llenando opciones del "Select"
	/*$scope.select = [
			{descripcion:"opcion1", value:"01"},
            {descripcion:"opcion2", value:"02"},
            {descripcion:"opcion3", value:"03"},
            {descripcion:"opcion4", value:"04"}
        ];
        console.log($scope.select);*/

	var refRegExpoTextil = firebase.database().ref("registrosExpoTextil");
	$scope.objBDRegExpoTextil = $firebaseArray(refRegExpoTextil);
	$scope.objPersona={};	

	$scope.agregarCategoria = function(obj){

		$scope.objBDRegExpoTextil.$add($scope.objPersona);
	}

});