<?php

// $debug = true;
$debug = false;

if($debug){

	print_r($_GET);

}else{
	//ДАННЫЕ ИЗ ФОРМЫ
	$name = trim(addslashes($_GET['name']));
	$tel = trim(addslashes($_GET['telephone']));
	$email = trim(addslashes($_GET['email']));
	$user_message = trim(addslashes($_GET['message']));


	$act = trim(addslashes($_GET['act']));
	$productNone = trim(addslashes($_GET['productNone']));
	$product = trim(addslashes($_GET['product']));






	// $page_url = trim($_POST['product_url']);


	$date = date("Y-m-d");
	$date_time = date("H:i");
	$host = $_SERVER['HTTP_HOST'];


	//ПОЛУЧАТЕЛЬ
	$to = array();
	$to[] = "siarohau@gmail.com";
	$to = implode(',',$to);


	//ОТПРАВИТЕЛЬ
	$sender = $host;


	//ТЕМА
	$subject_prepare = "Перезвоните {$name}. Отправлена $date в $date_time";
	$subject = "=?utf-8?b?".base64_encode(trim($subject_prepare))."?=";


	//СООБЩЕНИЕ
	$message = array();
	$message[] = "<b>Имя клиента:</b> $name";
	$message[] = "<b>Телефон клиента:</b> $tel";
	$message[] = "<b>Email клиента:</b> $email";
	$message[] = "<b>Сообщение клиента:</b> $user_message";
	$message[] = "---------------------------------------";
	$message[] = "Дополнительная Информация:";
	$message[] = "<b>Что заказывали?:</b> $product";
	$message[] = "<b>Еще:</b> $productNone";
	$message[] = "---------------------------------------";
	$message[] = "<b>Action формы:</b> $act";
	$message[] = "<b>Отправлена:</b> $date в $date_time";
	$message = implode('<br>',$message);


	//ЗАГОЛОВКИ
	$headers = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/html; charset=utf-8";
	$headers[] = "X-Mailer: PHP/".phpversion();
	$headers[] = "From: Заявка с сайта $host <{$sender}>";
	// $headers[] = "Reply-To: $sender"; //E-mail клиента
	$headers = implode(PHP_EOL,$headers);



	//ФУНКЦИЯ ОТПРАВКИ
	mail($to, $subject, $message, $headers);

	//СТАТУС ОТПРАВКИ
	echo true;
}



?>