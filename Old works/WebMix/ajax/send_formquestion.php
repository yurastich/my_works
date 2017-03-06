<?
require_once($_SERVER['DOCUMENT_ROOT'].'/WebMix/phpMailer/class.phpmailer.php');
$mail = new PHPMailer(); // defaults to using php "mail()"
$mail->From     = "tjaw92@yandex.ru";
$mail->FromName = "WebMix";
$mail->AddAddress("tjaw92@yandex.ru","WebMix");
$mail->AddAddress("info@wbmix.ru","WebMix");
$mail->AddAddress("poberejniy@avivi.com.ua","WebMix");

$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Subject = "Вопрос";
$mail->Body = "
			<p>Текст вопроса: ".$_POST["message"]."</p>
			";

if(!$mail->Send()) {
  die("Ошибка отправки: " . $mail->ErrorInfo);
} else {
  die("Ваше сообщение принято!");
}
?>