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
		$action = $_GET['action'];
		$data = Array();
		switch ($action) {
			case 'getStudent':
				$sql ="SELECT COUNT(*) As StudentCount FROM Account WHERE userGroupID = 1";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data['StudentCount'] = intval($row['StudentCount']);
				}
				echo json_encode($data);
				break;
			case 'getCase':
				$sql ="SELECT COUNT(*) As CaseCount FROM `Case`";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data['CaseCount'] = intval($row['CaseCount']);
				}
				echo json_encode($data);
				break;
			case 'getMentor':
				$sql ="SELECT COUNT(*) As MentorCount FROM Account WHERE userGroupID = 2";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data['MentorCount'] = intval($row['MentorCount']);
				}
				echo json_encode($data);
				break;
			case 'getView':
				$sql ="SELECT COUNT(*) As ViewCount FROM Log";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data['ViewCount'] = intval($row['ViewCount']);
				}
				echo json_encode($data);
				break;
			case 'getLog':
				$sql ="SELECT * FROM Log ORDER BY createDt DESC";
				
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data[] = array(
						'logID' => $row['logID'],
						'logType' => $row['logType'],
						'createDt' => $row['createDt'],
						'logDesc' => $row['logDesc']
					);
				}
				echo json_encode($data);
				break;
			case 'getAllFunction':
				$userGroupID = $_GET['userGroupID'];
				$sql = "SELECT * FROM UserRole a LEFT JOIN Permission b ON a.userRoleID = b.permissionID WHERE userGroupID = $userGroupID AND description = 0";
	            $result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {

					$permissionName = $row['permissionName'];
					$permissionIcon = $row['permissionIcon'];
					$permissionID = $row['permissionID'];
					$own = (bool)$row['own'];
					unset($child);

					$sql2 = "SELECT * FROM UserRole a LEFT JOIN Permission b ON a.userRoleID = b.permissionID WHERE userGroupID = $userGroupID AND description = '$permissionID' ";
		            $result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {

						$child[] = array(
							'name' => $row2['permissionName'],
							'own' => (bool)$row2['own'],
							'icon' => $row2['permissionIcon'],
							'userRoleID' => $row2['userRoleID']
						);

					}
					$data[] = array(
						'own' => $own,
						'userRoleID' => $permissionID,
						'name' => $permissionName,
						'icon' => $permissionIcon,
                        'child' => $child
					);
				}

				echo json_encode($data);
				break;
			case 'update_S':
				$userRoleID = $_GET['userRoleID'];
				$boolean = $_GET['boolean'];
				$sql = "UPDATE UserRole SET own = $boolean WHERE userGroupID = '1' AND userRoleID = '$userRoleID'";
				mysqli_query($dbconn, $sql);
	            break;
			case 'update_M':
				$userRoleID = $_GET['userRoleID'];
				$boolean = $_GET['boolean'];
				$sql = "UPDATE UserRole SET own = $boolean WHERE userGroupID = '2' AND userRoleID = '$userRoleID'";
				mysqli_query($dbconn, $sql);
	            break;
	        case 'getSchoolList':
				$sql ="SELECT * FROM DegreeSchool";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data[] = array(
							"schoolName"=>$row['schoolName'],
							"schoolID" => $row['schoolID']
						);
				}
				echo json_encode($data);
				break;
			case 'setSchool':
				$schoolName = $_GET['schoolName'];
				$schoolID = $_GET['schoolID'];
				$sql = "UPDATE DegreeSchool SET schoolName = '$schoolName' WHERE schoolID = '$schoolID'";
				$result = mysqli_query($dbconn, $sql);
				break;
			case 'getProgramList':
				$sql ="SELECT * FROM School";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$programList =  array();
					$schoolID = $row['schoolID'];
					$sql2 ="SELECT * FROM Program a LEFT JOIN ProgramType b ON a.programTypeID = b.programTypeID WHERE schoolID = '$schoolID'  ";
					$result2 = mysqli_query($dbconn, $sql2);
					while ($row2 = mysqli_fetch_assoc($result2)) {
						$programList[] = array(
								"programID" => $row2['programID'],
								"programName" => $row2['programName'],
								"programTypeID" => $row2['programTypeID'],
								"programTypeName" => $row2['programTypeName']
							);
					}
					$data[] = array(
							"schoolName"=> $row['schoolName'],
							"schoolID" => $row['schoolID'],
							"programList" => $programList
						);
				}
				echo json_encode($data);
				break;
			case 'getProgramTypeList':
				$sql ="SELECT * FROM ProgramType";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data[] = array(
							"programTypeID"=> $row['programTypeID'],
							"programTypeName" => $row['programTypeName']
						);
				}
				echo json_encode($data);
				break;
			case 'setProgram':
				$schoolID = $_GET['schoolID'];
				$programID = $_GET['programID'];
				$programName = $_GET['programName'];
				$programTypeID = $_GET['programTypeID'];
				$sql = "UPDATE Program SET programName = '$programName' , programTypeID = '$programTypeID'  WHERE schoolID = '$schoolID' AND programID = '$programID'";
				$result = mysqli_query($dbconn, $sql);
			case 'getEventList':
				$sql = "SELECT * FROM Event";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$eventDate = strtotime($row['eventDate']);
					$eventDate = date('Y-m-d',$eventDate);
					$data[] = array(
							'eventID' => $row['eventID'],
							'eventName' => $row['eventName'],
							'eventDetail' => $row['eventDetail'],
							'eventDate' => $eventDate
						);
				};
				echo json_encode($data);
			break;
			case 'removeEvent':
				$eventID = $_GET['eventID'];
				$sql = "DELETE FROM Event WHERE eventID = '$eventID'";
				$result = mysqli_query($dbconn, $sql);
				break;
			case 'setEvent':
				$eventID = $_GET['eventID'];
				$eventName = $_GET['eventName'];
				$eventDetail = $_GET['eventDetail'];
				$eventDate = $_GET['eventDate'];
				$sql = "UPDATE Event SET eventName = '$eventName' ,eventDetail = '$eventDetail' ,eventDate = '$eventDate'  WHERE eventID = '$eventID'";
				$result = mysqli_query($dbconn, $sql);
				break;
			case 'createEvent':
				$eventName = $_GET['eventName'];
				$eventDetail = $_GET['eventDetail'];
				$eventDate = $_GET['eventDate'];
				$sql = "INSERT INTO Event (eventName,eventDetail,eventDate) VALUES ('$eventName','$eventDetail','$eventDate')";
				$result = mysqli_query($dbconn, $sql);
				break;
            case 'createActivity':
                $subject = $_GET['subject'];
				$numOfPe = $_GET['numOfPe'];
				$startDate = $_GET['startDate'];
				$endDate = $_GET['endDate'];
				$content = $_GET['content'];
				$grpmate = $_GET['grpmate'];
				$school = $_GET['school'];
			
				$sql = "INSERT INTO Activity (subject,numOfPe,startDate,endDate,content,grpmate, schoolID) VALUES ('$subject','$numOfPe','$startDate', '$endDate', '$content', '$grpmate', '$school')";
				$result = mysqli_query($dbconn, $sql);
                break; 
            case 'getActivity':
                $sql = "SELECT * FROM Activity";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {

				$id = $row['activityID'];
				$name = $row['subject'];
				$content = $row['content'];
				$number = $row['numOfPe'];
				$grpmate = $row['grpmate'];
				$school = $row['schoolID'];
				$startDate = $row['startDate'];
				$endDate = $row['endDate'];
				$dt = date('Y-m-d', strtotime("$startDate"));
				$dt2 = date('Y-m-d', strtotime("$endDate"));
					$data[] = array(
							'id' => $id,
							'name' => $name,
							'number' => $number,
							'content' => $content,
							'startDate' => $dt,
							'endDate' => $dt2,
							'grpmate' => $grpmate,
							'school' => $school
						);
				};
				echo json_encode($data);
                break; 
            case 'updateActivity':
                $subject = $_GET['subject'];
				$numOfPe = $_GET['numOfPe'];
				$startDate = $_GET['startDate'];
				$endDate = $_GET['endDate'];
				$content = $_GET['content'];
				$grpmate = $_GET['grpmate'];
				$school = $_GET['school'];
				$id = $_GET['id'];
                $sql = "UPDATE Activity SET subject = '$subject' ,numOfPe = '$numOfPe' ,startDate = '$startDate' ,endDate = '$endDate', content = '$content', grpmate = '$grpmate', schoolID = '$school' WHERE activityID = '$id'";
				$result = mysqli_query($dbconn, $sql);
                break;
            case 'deleteActivity':
                $id = $_GET['id'];
                $sql = "DELETE FROM Activity WHERE activityID = '$id'";
				$result = mysqli_query($dbconn, $sql);
                break;
            case 'getLockList':
            	$sql = "SELECT * FROM Account WHERE failCount = 6";
				$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data[] = array(
						'accountID' => $row['accountID'],
						'accountName' => $row['accountName']
					);
				}
				echo json_encode($data);
                break;
            case 'unlock':
            	$accountID = $_GET['accountID'];
            	$sql = "UPDATE Account SET failCount = 0 WHERE accountID = '$accountID'";
				$result = mysqli_query($dbconn, $sql);
                break;
            case 'getRequestList':
            	$sql = "SELECT * FROM Request a LEFT JOIN Account b ON a.accountID = b.accountID WHERE upgrade = 0";
            	$result = mysqli_query($dbconn, $sql);
				while ($row = mysqli_fetch_assoc($result)) {
					$data[] = array(
						'accountID' => $row['accountID'],
						'accountName' => $row['accountName']
					);
				}
				echo json_encode($data);
				break;
			case 'upgrade':
				$accountID = $_GET['accountID'];
            	$sql = "UPDATE Account SET userGroupID = 2 WHERE accountID = '$accountID'";
				$result = mysqli_query($dbconn, $sql);
				$sql = "UPDATE Request SET upgrade = 1 WHERE accountID = '$accountID'";
				$result = mysqli_query($dbconn, $sql);
				break;
		}
		mysqli_close($dbconn);
	}
	?>
