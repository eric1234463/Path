<?php
require ("dbconn.php");
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
date_default_timezone_set("Asia/Hong_Kong");
$dbconn = dbconn();
if (!$dbconn) {
    die("dbconnection failed: " . mysqli_dbconnect_error());
} 
else {
	$action = $_GET['action'];
	$data = Array();
	switch ($action) {
		case 'chooseMentor':
			$sID = $_GET['sID'];
			$mID = $_GET['mID'];
			$sql = "UPDATE Account SET mentor = '$mID' WHERE accountID = '$sID'";
			mysqli_query($dbconn, $sql);
			break;

		case 'getOthersAccount':
			$accountID = $_GET['accountID'];
			$sql = "SELECT * FROM Account WHERE accountID = $accountID";
			$result = mysqli_query($dbconn, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
				$userGroupID = $row['userGroupID'];
				$userName = $row['userName'];
				$accountIcon = $row['accountIcon'];
				$schoolID = $row['degreeSchoolID'];
				$programID = $row['programID'];
				$year = $row['year'];
				$cgpa = $row['cgpa'];

				$sql2 = "SELECT * FROM DegreeSchool WHERE schoolID = '$schoolID'";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$schoolName = $row2['schoolName'];
					}
				$sql2 = "SELECT * FROM DegreeProgram WHERE schoolID = '$schoolID' AND programID = '$programID'";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$programName = $row2['programName'];
					}
				$sql2 = "SELECT * FROM UserGroup WHERE userGroupID ='$userGroupID'";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$userGroupName = $row2['userGroupName'];
					}
				$sql2 = "SELECT * FROM FreeTime WHERE MentorID ='$accountID'";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$on = $row2['On'];
						$off = $row2['Off'];
					}
				$data = array(
							'accountID' => $accountID,
							'displayName'=> $userName,
							'avatar'=> $accountIcon,
							'schoolName' => $schoolName,
							'programName' => $programName,
							'year' => $year,
							'cgpa' => $cgpa,
							'roles' => [$userGroupName],
							'on' => $on,
							'off' => $off,
						);
			}
			echo json_encode($data);		
			break;

		case 'mkAppointment':
			$sID = $_GET['sID'];
			$mID = $_GET['mID'];
			$date = $_GET['date'];
			$time = $_GET['time'];
			$msg = $_GET['msg'];
			$sql = "SELECT * FROM Appointment WHERE studentID = '$sID'";
			$result = mysqli_query($dbconn, $sql);
				if (mysqli_num_rows($result) == 0){
					$sql2 = "INSERT INTO Appointment (mentorID, studentID, appointDate, appointTime, msg) VALUES ($mID, $sID,'$date','$time','$msg')";
					mysqli_query($dbconn, $sql2);
					echo 1; // create new appoint
				} else {
					echo 0; // appoint exists
				}
		break;

		case 'joinMeeting':
			$sID = $_GET['sID'];
			$mID = $_GET['mID'];
			$date = $_GET['date'];
			$time = $_GET['time'];
			$sql = "SELECT * FROM Meeting a LEFT JOIN meetingParticipant b ON a.meetingID = b.meetingID WHERE mentorID = $mID AND meetingDate = '$date' AND meetingStartTime = '$time' ";
			$result = mysqli_query($dbconn, $sql);
				if (mysqli_num_rows($result) >= 1){
					while ($row = mysqli_fetch_assoc($result)) {
						$meetingID = $row['meetingID'];
					}
					$sql3 = "SELECT * FROM meetingParticipant WHERE studentID = $sID ";
					$result3 = mysqli_query($dbconn, $sql3);
					if (mysqli_num_rows($result3) == 1){
							echo 2; // already join the meeting
						} else {
							$sql2 = "INSERT INTO meetingParticipant (meetingID, studentID) VALUES ($meetingID, $sID)";
							mysqli_query($dbconn, $sql2);
							echo 1; // join into existing meeting
							break;
						} 
					

				} else {
					echo 0; // back to create appoint
				}
			break;

		case 'getMeetingInfo':
			$sID = $_GET['sID'];
			$sql = "SELECT * FROM Meeting a LEFT JOIN meetingParticipant b ON a.meetingID = b.meetingID WHERE b.studentID = $sID";
			$result = mysqli_query($dbconn, $sql);
			if (mysqli_num_rows($result) == 0){
					$data = array(
							'topic'=> 'You have not join any meeting yet.',
							'location'=> 'N/A',
							'reminder' => 'N/A',
							'meetingDate' => 'N/A',
							'meetingTime' => 'N/A',
							'participant' => ''
						);
				echo json_encode($data);
				break;
			}
			while ($row = mysqli_fetch_assoc($result)) {
					$topic = $row['topic'];
					$location = $row['location'];
					$reminder = $row['reminder'];
					$meetingDate = $row['meetingDate'];
					$meetingTime = $row['meetingStartTime'];
					$mentorID = $row['mentorID'];
					$meetingID = $row['meetingID'];

					$sql2 = "SELECT * FROM meetingParticipant a LEFT JOIN Account b ON a.studentID = b.accountID WHERE meetingID = $meetingID ";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$participant[] = array(
								'name' => $row2['userName'],
								'icon' => $row2['accountIcon'],
								'id' => $row2['accountID']
							);
					}

					$data = array(
							'topic'=> $topic,
							'location'=> $location,
							'reminder' => $reminder,
							'meetingDate' => $meetingDate,
							'meetingTime' => $meetingTime,
							'participant' => $participant
						);	
			}
			echo json_encode($data);
			break;

		case 'sdMsg':
			$sender = $_GET['sender'];
			$receiver = $_GET['receiver'];
			$type = $_GET['type'];
			$now = date("Y-m-d H:i:s");
			$sql = "INSERT INTO AccountNotification (senderAccountID, receiverAccountID, notificationTypeID, createDt) VALUES ($sender, $receiver,$type, '$now')";
			mysqli_query($dbconn, $sql);
			break;

		case 'getAppoint':
			$mID = $_GET['mID'];
			$sql = "SELECT * FROM Appointment a LEFT JOIN Account b ON a.studentID = b.accountID WHERE mentorID = $mID";
			$result = mysqli_query($dbconn, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
					$date = $row['appointDate'];
					$time = $row['appointTime'];
					$name = $row['userName'];
					$icon = $row['accountIcon'];
					$id = $row['studentID'];
					$msg = $row['msg'];
					$time2 = date('H:i', strtotime("$time"));
						$data [] = array(
								'date' => $date,
								'time' => $time2,
								'name' => $name,
								'icon' => $icon,
								'id' => $id,
								'msg' => $msg
							);
					}
			echo json_encode($data);
			break;

		case 'getAllMeeting':
		$mID = $_GET['mID'];
		$sql = "SELECT * FROM Meeting WHERE mentorID = $mID";
		$result = mysqli_query($dbconn, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
				$date = $row['meetingDate'];
				$start = $row['meetingStartTime'];
				$end = $row['meetingEndTime'];
				$reminder = $row['reminder'];
				$topic = $row['topic'];
				$location = $row['location'];
				$meetingID = $row['meetingID'];
				$startDt = date('Y-m-d H:i:s', strtotime("$date $start"));
				$endDt = date('Y-m-d H:i:s', strtotime("$date $end"));

				$data [] = array(
								'meetingID' => $meetingID,
								'start' => $startDt,
								'end' => $endDt,
								'reminder' => $reminder,
								'topic' => $topic,
								'location' => $location
							);

		}
		echo json_encode($data);
		break;

		case 'acceptAppoint':
			$sID = $_GET['sID'];
			$mID = $_GET['mID'];
			$sql = "SELECT * FROM Appointment WHERE mentorID = $mID AND studentID= $sID";
			$result = mysqli_query($dbconn, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
				$date = $row['appointDate'];
				$start = $row['appointTime'];
				$end = date('h:i:s', strtotime($start)+ 60*60);
	
				$sql2 = "INSERT INTO Meeting (meetingDate, meetingStartTime,meetingEndTime, mentorID) VALUES ('$date','$start', '$end',$mID)";
				mysqli_query($dbconn, $sql2);
			}
			$sql3 = "SELECT * FROM Meeting WHERE meetingDate = '$date' AND meetingStartTime= '$time' AND mentorID= $mID";
			$result2 = mysqli_query($dbconn, $sql3);
			while ($row2 = mysqli_fetch_assoc($result2)) {
				$meetingID = $row2['meetingID'];
				$sql4 = "INSERT INTO meetingParticipant (meetingID, studentID) VALUES ($meetingID, $sID)";
				mysqli_query($dbconn, $sql4);
			}
			$sql5 = "DELETE FROM Appointment WHERE mentorID = $mID AND studentID= $sID";
			mysqli_query($dbconn, $sql5);
		break;

		case 'rejectAppoint':
			$sID = $_GET['sID'];
			$mID = $_GET['mID'];
			$sql = "DELETE FROM Appointment WHERE mentorID = $mID AND studentID= $sID";
			mysqli_query($dbconn, $sql);
		break;

		case 'deleteMeeting':
			$meetingID = $_GET['meetingID'];
			$sql = "DELETE FROM Meeting WHERE meetingID = $meetingID";
			mysqli_query($dbconn, $sql);
			$sql2 ="DELETE FROM meetingParticipant WHERE meetingID = $meetingID";
			mysqli_query($dbconn, $sql2);
		break;

		case 'updateMeeting':
			$meetingID = $_GET['meetingID'];
			$location = $_GET['location'];
			$topic = $_GET['topic'];
			$description = $_GET['description'];
			$date = $_GET['date'];
			$start = $_GET['start'];
			$end = $_GET['end'];
			$sql = "UPDATE Meeting SET location = '$location', topic = '$topic', reminder = '$description', meetingDate = '$date', meetingStartTime = '$start', meetingEndTime = '$end' WHERE meetingID = $meetingID";
			mysqli_query($dbconn, $sql);
		break;

		case 'getNote':
			$mentorID = $_GET['mentorID'];
			$sql = "SELECT * FROM Note WHERE mentorID = '$mentorID'";
			$result = mysqli_query($dbconn, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
				$data[] = array(
					'noteName' => $row['noteName'], 
					'noteLocation'=>$row['noteLocation'],
					'noteDesc' => $row['noteDesc'],
					'noteCreateDt' => $row['noteCreateDt']
					);
			}
			echo json_encode($data);
		break;

		case 'uploadNote':
			$filename = $_FILES['file']['name'];
			$meta = $_POST;
			$destination = $meta['targetPath'];
			$noteDesc = $meta['noteDesc'];
			$noteName = $meta['noteName'];
			$mentorID = $meta['mentorID'];
			$today = date("Y-m-j
				-H-i-s");
			$temp = explode(".", $_FILES["file"]["name"]);
			$newfilename =  $noteName . "_" . $today . '.' . end($temp);
			$path = 'http://unicomhk.net/path2/pdf/' . $newfilename;
			move_uploaded_file($_FILES["file"]["tmp_name"], $destination . $newfilename);

			$sql = "INSERT INTO Note(mentorID,noteName,noteDesc,noteLocation,noteCreateDt) VALUES ('$mentorID','$noteName','$noteDesc','$path',NOW())";
			mysqli_query($dbconn, $sql);
			echo $sql;
 		break;
	}
	mysqli_close($dbconn);
}
?>