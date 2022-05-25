<?php
require_once "IsMobile.php"; // Скрипт определения устройства по User-Agent пользователя
require_once "get_ip.php"; // Скрипт определения IP пользователя
require_once "get_country.php"; // Скрипт определения страны пользователя
$arrayCountries = ['UA', 'RU', 'KZ', 'BY']; // Список стран которым выводить полную версию сайта
$check_country = in_array($country_code, $arrayCountries); // Функция которая сравнивает текущую страну пользователя со списком разрешенных страни
?>

<?php if ($check_country && is_small()): ?>
<!--    Контент виден на мобилке и при условии что пользователь из страны заданной в переменной $arrayCountries-->
<?php else: ?>
<!--    Контент видет на ПК и на мобилке если пользователь зашел из страны которой нет в списке $arrayCountries-->
<?php endif; ?>
