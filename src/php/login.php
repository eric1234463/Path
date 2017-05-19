<?php
session_start();
include ("dbconn.php");
$dbconn = new Dbconn();
$conn = $dbconn->getDbconn();
$action = $_GET['action'];
$data = Array();
switch ($action) {
	case 'checkLogin':
		$accountName = $_GET['AccountName'];
		$password = $_GET['AccountPassword'];
		$sql = "SELECT * FROM Account WHERE accountName = '$accountName'";
		$result = mysqli_query($conn, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
			$accountID = $row['accountID'];
			$userGroupID = $row['userGroupID'];
			$userName = $row['userName'];
			$accountIcon = $row['accountIcon'];
			$schoolID = $row['schoolID'];
			$programID = $row['programID'];
			$degreeID = $row['degreeSchoolID'];
			$degreeProgramID = $row['degreeprogramID'];
			$sql2 = "SELECT * FROM School WHERE schoolID = '$schoolID'";
			$result2 = mysqli_query($conn, $sql2);
			while ($row2 = mysqli_fetch_assoc($result2)) {
				$schoolName = $row2['schoolName'];
			}
			$sql2 = "SELECT * FROM Program WHERE schoolID = '$schoolID' AND programID = '$programID'";
			$result2 = mysqli_query($conn, $sql2);
			while ($row2 = mysqli_fetch_assoc($result2)) {
				$programName = $row2['programName'];
			}
			if (password_verify($password, $row['password'])){
				$data=$arrayName = array(
					'status' => "true", 
					'accountID'=> $accountID,
					'userName'=> $userName,
					'accountIcon'=> $accountIcon,
					'schoolID' => $schoolID,
					'programID' => $programID,
					'schoolName' => $schoolName,
					'programName' => $programName
					);
			}
			else{
				echo "false";
			}
		}
		break;

	default:
		# code...
		break;
}
mysqli_close($conn);

?>
