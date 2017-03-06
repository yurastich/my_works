<?
require_once($_SERVER['DOCUMENT_ROOT'].'/WebMix/phpMailer/class.phpmailer.php');
$mail = new PHPMailer(); // defaults to using php "mail()"
$mail->From     = $_POST["useremail"];
$mail->FromName = $_POST["username"];
$mail->AddAddress("tjaw92@yandex.ru","WebMix");
$mail->AddAddress("info@wbmix.ru","WebMix");
$mail->AddAddress("poberejniy@avivi.com.ua","WebMix");

$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Subject = $_POST["subject"];
$mail->Body = "
			<p>Имя: ".$_POST["username"]."</p>
			<p>Телефон: ".$_POST["userphone"]."</p>
			<p>E-mail: ".$_POST["useremail"]."</p>
			<p>Текст сообщения: ".$_POST["message"]."</p>
			";

if(!$mail->Send()) {
  die("Ошибка отправки: " . $mail->ErrorInfo);
} else {
  die("Ваше сообщение принято!");
}
?>