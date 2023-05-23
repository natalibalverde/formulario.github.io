<?php
header("Access-Control-Allow-Origin:*");
$dsn="mysql:host=localhost;dbname=store";
$user="root";
$password="";
$connection=new PDO($dsn,$user,$password);

$id=$_GET['id']


$query="DELETE FROM users Where id=$id";

$connection->query($query)