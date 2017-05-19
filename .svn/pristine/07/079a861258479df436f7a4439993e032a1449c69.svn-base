<?php
require ("dbconn.php");
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$dbconn = dbconn();
if (!$dbconn) {
    die("dbconnection failed: " . mysqli_dbconnect_error());
}
/*
SELECT * FROM(SELECT ChatMessage.chatID, ChatMessage.messageID, ChatMessage.message, ChatMessage.messageTime, ChatMessage.senderAccountID, Chatroom.firstUser, Chatroom.secondUser FROM ChatMessage LEFT JOIN Chatroom ON ChatMessage.chatID = Chatroom.chatID WHERE ChatMessage.chatID = 1) as Temp LEFT JOIN Account ON Temp.senderAccountID = Account.accountID
*/
else {
	$action = $_GET['action'];
	$data = Array();
	switch ($action) {

		case 'getMessage':
		$chatID = $_GET['chatID'];
		$sql = "SELECT ChatMessage.chatID, ChatMessage.messageID, ChatMessage.senderAccountID, ChatMessage.message, ChatMessage.messageTime, Account.accountIcon FROM ChatMessage LEFT JOIN Account ON ChatMessage.senderAccountID = Account.accountID WHERE ChatMessage.chatID = $chatID";
		$result = mysqli_query($dbconn, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$data[] = array(
						'ChatId' => $row['chatID'],
						'MessageId' => $row['messageID'],
						'SenderId' => $row['senderAccountID'],
						'Message' => $row['message'],
						'MessageTime' => $row['messageTime'],
						'AccountIcon' => $row['accountIcon']
					);
		};
		echo json_encode($data);
		break;

		case 'contactList':
		$accountID = $_GET['accountID'];
		$sql = "SELECT Combin.chatID, Combin.firstUser, Combin.secondUser, Combin.accountID, Combin.accountName, Combin.accountIcon, MAX(ChatMessage.messageID), ChatMessage.message, ChatMessage.messageTime FROM (SELECT * FROM (SELECT Chatroom.chatID, Chatroom.firstUser, Chatroom.secondUser,
						CASE
  							WHEN (Chatroom.firstUser = $accountID) THEN Chatroom.secondUser
 								WHEN (Chatroom.secondUser = $accountID) THEN Chatroom.firstUser
							END AS other
						FROM Chatroom
						WHERE Chatroom.firstuser=$accountID OR Chatroom.secondUser=$accountID) AS chatrecord LEFT JOIN Account ON (Account.accountID = chatrecord.other OR chatrecord.other = Account.accountID)) AS Combin LEFT JOIN ChatMessage ON Combin.chatID = ChatMessage.chatID GROUP BY ChatMessage.chatID";
		$result = mysqli_query($dbconn, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$data[] = array(
						'chatId' => $row['chatID'],
						'chatAccountID' => $row['accountID'],
						'chatAccountName' => $row['accountName'],
						'chatAccountIcon' => $row['accountIcon'],
						'chatMessageId' => $row['MAX(messageID)'],
						'chatMessage' => $row['message'],
						'chatMessageTime' => $row['messageTime']
					);
		};
		echo json_encode($data);
		break;

		case 'getContactList':
		$accountID = $_GET['accountID'];
		$sql = "SELECT * FROM Chatroom a WHERE a.firstUser = $accountID OR a.secondUser = $accountID";
		$result = mysqli_query($dbconn, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
			if($row['firstUser'] == $accountID){
				$chatAccountID = $row['secondUser'];
				$sql2 = "SELECT * FROM Account WHERE accountID = '$chatAccountID'";
				$result2 = mysqli_query($dbconn, $sql2);
				$chatterId = $row['chatID'];
				$sql3 = "SELECT ChatMessage.chatID, MAX(ChatMessage.messageID), ChatMessage.message, ChatMessage.messageTime FROM ChatMessage WHERE ChatMessage.chatID = $chatterId GROUP BY ChatMessage.chatID";
				$result3 = mysqli_query($dbconn, $sql3);
				while ($row2 = mysqli_fetch_assoc($result2) && $row3 = mysqli_fetch_assoc($result3)) {
								$data[] = array(
									'chatId' => $row['chatID'],
									'chatAccountID' => $chatAccountID,
									'chatAccountName' => $row2['accountName'],
									'chatAccountIcon' => $row2['accountIcon'],
									'chatMessage' => $row3['message'],
									'chatMessageTime' => $row3['messageTime']
								);


					}
			}
			else{
				$chatAccountID = $row['firstUser'];
				$chatterId = $row['chatID'];
				$sql3 = "SELECT ChatMessage.chatID, MAX(ChatMessage.messageID), ChatMessage.message, ChatMessage.messageTime FROM ChatMessage WHERE ChatMessage.chatID = $chatterId GROUP BY ChatMessage.chatID";
				$result3 = mysqli_query($dbconn, $sql3);
				while ($row2 = mysqli_fetch_assoc($result2) && $row3 = mysqli_fetch_assoc($result3)) {
						$data[] = array(
							'chatId' => $row['chatID'],
							'chatAccountID' => $chatAccountID,
							'chatAccountName' => $row2['accountName'],
							'chatAccountIcon' => $row2['accountIcon'],
							'chatMessage' => $row3['message'],
							'chatMessageTime' => $row3['messageTime']
						);

				}
			}
		}
		echo json_encode($data);
		break;

		 case 'sendMessage':
                $chatID = $_GET['chatID'];
                $senderAccountID= $_GET['senderAccountID'];
                $message = $_GET['message'];
                $messageTime = $_GET['messageTime'];

              
                $sql = "INSERT INTO `ChatMessage` (chatID, senderAccountID, message, messageTime) VALUES ('$chatID', '$senderAccountID', '$message', '$messageTime')";
                $result = mysqli_query($dbconn, $sql);
                break;			


	}
}
mysqli_close($dbconn);


?>
