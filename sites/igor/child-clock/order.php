<?php

// $debug = true;
$debug = false;

if($debug){

	print_r($_POST);

}else{
	//ДАННЫЕ ИЗ ФОРМЫ
	$name = trim(addslashes($_POST['name']));
	$tel = trim(addslashes($_POST['phone']));
	$email = trim(addslashes($_POST['email']));

	$order_name = trim(addslashes($_POST['order_name']));
	$order_price_new = trim(addslashes($_POST['order_price_new']));
	$order_price_old = trim(addslashes($_POST['order_price_old']));



	$page_url = trim($_POST['product_url']);


	$date = date("Y-m-d");
	$date_time = date("H:i");
	$host = $_SERVER['HTTP_HOST'];


	//ПОЛУЧАТЕЛЬ
	$to = array();
	$to[] = "just-4-vip@yandex.ru";
	$to = implode(',',$to);


	//ОТПРАВИТЕЛЬ
	$sender = $host;


	//ТЕМА
	$subject_prepare = "Перезвоните {$name}. Отправлена $date в $date_time";
	$subject = "=?utf-8?b?".base64_encode(trim($subject_prepare))."?=";


	//СООБЩЕНИЕ
	$message = array();
	$message[] = "<b>Что заказывали:</b> Обратный звонок";
	$message[] = "<b>Имя клиента:</b> $name";
	$message[] = "<b>Телефон клиента:</b> $tel";
	$message[] = "<b>Email клиента:</b> $email";
	$message[] = "---------------------------------------";
	$message[] = "Информация, если был выбран товар";
	$message[] = "<b>Имя товара:</b> $order_name";
	$message[] = "<b>Цена товара:</b> $order_price_new <s>$order_price_old</s>";
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