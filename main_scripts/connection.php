<?php

$database_connection = "toDoList";
$conn = mysqli_connect("127.0.0.1", "root", "");
mysqli_select_db($conn, $database_connection);
/*
if($connection->connect_error){
	echo $connection->connect_error;
die("failed");}
else{
	echo"connected";
}*/