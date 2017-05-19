<?php
require ("dbconn.php");
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$dbconn = dbconn();
if (!$dbconn) {
    die("dbconnection failed: " . mysqli_dbconnect_error());
} 
else {
	$data = Array();
    $action = $_GET['action'];
    switch ($action) {
        case 'getAccountList':
        $sql = "SELECT * FROM Account";
            $result = mysqli_query($dbconn, $sql);
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = array(
                    'accountID' => intval($row['accountID']),
                    'accountName' => $row['accountName']
                    );
            };
            echo json_encode($data);  
        break;

    	case 'getSchoolList':
    		$sql = "SELECT * FROM School";
    		$result = mysqli_query($dbconn, $sql);
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = array(
                	'schoolID' => intval($row['schoolID']),
                	'schoolName' => $row['schoolName'],
                    'schoolEmail' => $row['schoolEmailDomain']
                	);
            };
            echo json_encode($data);
    		break;
    	
        case 'getProgramList':
            $schoolID = $_GET['schoolID'];
            $sql = "SELECT * FROM Program where schoolID = '$schoolID'";
            $result = mysqli_query($dbconn, $sql);
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = array(
                    'programID' => intval($row['programID']),
                    'programName' => $row['programName']
                    );
            };
            echo json_encode($data);
            break;
        
        case 'createAccount':
            $name = $_GET['name'];
            $schoolID = $_GET['schoolID'];
            $programID = $_GET['programID'];
            $password = $_GET['password'];
            $email = $_GET['email'];
            settype($password, "string");
            $password = password_hash($password,PASSWORD_DEFAULT);
            $sql = "INSERT INTO Account (accountName, userName, password, schoolID, programID, userGroupID, createDt, email) VALUES ('$name', '$name', '$password', '$schoolID', '$programID', '1', NOW(), '$email')";
            $result = mysqli_query($dbconn, $sql);
            break;

        case 'sendMail':
            $pinCode = $_GET['pin'];
            $email = $_GET['email'];
            $subject = "PinCode";
            settype($email, "string");
            settype($painCode, "string");
            echo $painCode;
            echo $subject;
            echo $email;
            mail($email,$subject,$pinCode);
        break;    

    	default:
    		# code...
    		break;
    }
}	
mysqli_close($dbconn);
?>