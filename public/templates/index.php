<?php


$correo= $_POST["email"];
$servicioI= $_POST["servicioI"];

$codigo= $_POST["codigo"];
$subject = "Handlom - Cupón: " . $codigo;
// Get HTML contents from file

if ($servicioI=="Alquiler_de_Equipos") {
	$htmlContent = file_get_contents("templates/email1.html");
}elseif ($servicioI=="Venta_de_Equipos") {
	$htmlContent = file_get_contents("templates/email2.html");
}elseif ($servicioI=="Publicidad_Digital") {
	$htmlContent = file_get_contents("templates/email3.html");
}elseif ($servicioI=="Soluciones_y_Proyectos") {
	$htmlContent = file_get_contents("templates/email4.html");
}


// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: Handlom - Expotextil<roger.canchanya.syp@handlom.com>' . "\r\n";
$headers .= 'Cc:roger.canchanya.syp@handlom.com' . "\r\n";

// Send email
if(mail($correo,$subject, file_get_contents("templates/email1.html"),$headers)):
	$successMsg = 'El email fue enviado con éxito.';
	header("Location:index.html");
else:
	$errorMsg = 'Ocurrió un problema, por favor intentelo de nuevo.';
endif;
?>