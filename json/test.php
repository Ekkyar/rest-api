<?php

// $mahasiswa = [
//     [
//         "nama" => "Rizki",
//         "nrp" => "12345",
//         "email" => "ekkyrahmanx1@gmail.com"
//     ],
//     [
//         "nama" => "Rizki",
//         "nrp" => "12345",
//         "email" => "ekkyrahmanx1@gmail.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=db_dt8', 'root', '');
$db = $dbh->prepare('SELECT * FROM tb_user');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
