<?php
function dbconn() {
    $servername = "erickwong.hk";
    $username = "ericghk1_eric";
    $password = "eric94061607";
    $dbconn = mysqli_connect($servername, $username, $password, "ericghk1_path") or die(mysql_error());
    return $dbconn;
}
?>
