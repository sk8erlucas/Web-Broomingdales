<?php
 
/*if($_POST) {
    $visitor_subject = "";
    $visitor_email = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_subject'])) {
      $visitor_subject = filter_var($_POST['visitor_subject'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
     
    
	if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
     
    $recipient = "info@tamocomodo.com";
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
    
	$email_title = $visitor_subject;
    if(mail($recipient, $email_title, $visitor_message, $headers)) {
		header("Location: https://tamocomodo.com/website/?key=email_sent_ok");
		exit();
    } else {
        header("Location: https://tamocomodo.com/website/?key=email_sent_nodata");
		exit();

    }
     
} else {
    header("Location: https://tamocomodo.com/website/?key=email_sent_error");
	exit();
}*/

 header("Location: https://sk8erlucas.github.io/Broomingdales/customer_service.html/");

?>