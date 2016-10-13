<?php

$ruc= $_POST["ruc"];
$compania= $_POST["compania"];
$correo= $_POST["email"];
$contacto= $_POST["contacto"];
$telefono= $_POST["telefono"];
$servicioI= $_POST["servicioI"];

$codigo= $_POST["codigo"];
$subject = "Handlom - Cupón: " . $codigo;
// Get HTML contents from file

if ($servicioI=="1") {
	$htmlContent = file_get_contents("templates/email_template1.html");
}elseif ($servicioI=="2") {
	$htmlContent = file_get_contents("templates/email_template2.html");
}elseif ($servicioI=="3") {
	$htmlContent = file_get_contents("templates/email_template3.html");
}elseif ($servicioI=="4") {
	$htmlContent = file_get_contents("templates/email_template4.html");
}


// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: Handlom - Expotextil<roger.canchanya.syp@handlom.com>' . "\r\n";
$headers .= 'Cc:roger.canchanya.syp@handlom.com' . "\r\n";

// Send email
if(mail($correo,$subject, file_get_contents("templates/email.html"),$headers)):
	$successMsg = 'El email fue enviado con éxito.';
	header("Location:form.html");
else:
	$errorMsg = 'Ocurrió un problema, por favor intentelo de nuevo.';
endif;
?>