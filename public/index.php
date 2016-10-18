<?php

/*
$correo= $_POST["email"];
$servicioI= $_POST["servicioI"];

$codigo= $_POST["codigo"];*/



//
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$servicioSelecionado = $request->servicioSelecionado;
$codigo = $request->codigo;
$subject = "Handlom - Cupón: " . $codigo;

//



// Get HTML contents from file

if ($servicioSelecionado=="Publicidad_Digital") {
	$htmlContent = file_get_contents("templates/email1.html");
}elseif ($servicioSelecionado=="Alquiler_de_Equipos") {
	$htmlContent = file_get_contents("templates/email2.html");
}elseif ($servicioSelecionado=="Venta_de_Equipos") {
	$htmlContent = file_get_contents("templates/email3.html");
}elseif ($servicioSelecionado=="Soluciones_y_Proyectos") {
	$htmlContent = file_get_contents("templates/email4.html");
}


// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: Handlom - Expotextil<roger.canchanya.syp@handlom.com>' . "\r\n";
$headers .= 'Cc:roger.canchanya.syp@handlom.com' . "\r\n";

// Send email
if(mail($email,$subject, $htmlContent,$headers)):
	$successMsg = 'El email fue enviado con éxito.';
	//header("Location:index.html");
else:
	$errorMsg = 'Ocurrió un problema, por favor intentelo de nuevo.';
endif;
?>