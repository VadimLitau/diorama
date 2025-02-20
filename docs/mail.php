<?php

// Подключаем PHPMailer, если вы используете Composer, используйте require 'vendor/autoload.php';
require_once('phpmailer/src/Exception.php');
require_once('phpmailer/src/PHPMailer.php');
require_once('phpmailer/src/SMTP.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

//$mail->SMTPDebug = 3; // Enable verbose debug output for debugging

try {
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.ru';                        // Main SMTP server
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = '';       // Your email address
    // $mail->Password = '';                          // Your email address
    $mail->Password = '';             // Your email password or application-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;  

    $mail->setFrom('', 'diorama'); // From address
    $mail->addAddress('');               // Recipient address

    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body = "$name оставил заявку, его сообщение: $message<br>Почта этого пользователя: $email";
    $mail->AltBody = 'Текст сообщения для текстовых почтовых клиентов';

    $mail->send();
    // Успешная отправка, возвращаем сообщение о успехе
    echo json_encode(['status' => 'success', 'message' => 'Письмо успешно отправлено']);
} catch (Exception $e) {
    // Ошибка при отправке
    echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке: ' . $mail->ErrorInfo]);
}
?>
