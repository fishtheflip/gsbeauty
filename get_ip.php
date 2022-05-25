<?php
function get_ip()
{
    $list = array();
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $list = array_merge($list, $ip);
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $list = array_merge($list, $ip);
    } elseif (!empty($_SERVER['REMOTE_ADDR'])) {
        $list[] = $_SERVER['REMOTE_ADDR'];
    }

    $list = array_unique($list);
    return implode(',', $list);
};
?>