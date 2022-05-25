<?php

$ip = get_ip();

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "http://ip-api.com/json/$ip",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);
curl_close($curl);
//
$result = json_decode($response, TRUE);
$country_code = $result['countryCode'];
?>