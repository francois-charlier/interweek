<?php
header("Access-Control-Allow-Origin: *");
include_once("index.html");

echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
?>
