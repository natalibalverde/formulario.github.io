<?php
//permite recivir peticiones desde cualquier dirección
header("Access-Control-Allow-Origin:*");
//Esta linea es para recibir datos en el cuerpo de la petición
$rawData=file_get_contents("php://input");
//trasformar el raw data en un formato php
$user=json_decode($rawData);

$dsn = "mysql:dbname=store;host=localhost:3306";
$username="root";
$password="";

$connection=new PDO($dsn, $username, $password);


$name=$user->name;
$email=$user->email;
$birthdate= $user->birthdate;
$sex=$user->sex;

$query="INSERT INTO users
    (username, email, birthdate,sex) 
    VALUES ('$name','$email','$birthdate', '$sex' )";

echo $query;
$connection->query($query);

