<?php
$conexion = mysql_connect("localhost","emicapac_root","B@surto91");
$database = mysql_select_db("emicapac_ehr");

$query = "ALTER TABLE BitCursos ADD tCodTipo VARCHAR(30) NOT NULL";
print mysql_query($query) ? 'exito' : mysql_error();
?>