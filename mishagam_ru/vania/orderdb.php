<?php
header("Content-Type: text/html; charset=utf-8");
header("Cache-Control: no-cache");

//$host = "home";
$host = "mishagam";
//$host = "katamaran2000";

$fields = array('order_id', 'cname', 'email', 'phone', 'mobile', 'address', 'katamaran_type', 'comments');
$fields1 = array('cname', 'email', 'phone', 'mobile', 'address', 'katamaran_type', 'comments');
$qfields1 = array('question_id', 'cname', 'email', 'phone', 'question', 'answer');
$qfields1 = array('cname', 'email', 'phone', 'question', 'answer');

if ($host == 'mishagam') {
	$db_host = "localhost";
	$db_database = "mishagam_katamarans";
	$db_user = "mishagam_katamaran";
	$db_pass = "kpass2000";
} else if ($host == 'home') {
	$db_host = "localhost";
	$db_database = "katamaran_orders";
	$db_user = "katamaran";
	$db_pass = "kpass";
} else if ($host == 'katamaran2000') {
	$db_host = "localhost";
	$db_database = "katamaran_orders";
	$db_user = "katamaran";
	$db_pass = "kpass";
}
$debug = true;
$records = array();
$command = '';
$start_content = "==START==";
$end_content = "==END==";
$error = "";
$answer='';

$conn = null;

function get_connection() {
    global $conn;
    global $db_host,$db_user,$db_pass,$db_database, $debug;

    if ($conn == null) {
        $conn = mysql_connect($db_host, $db_user, $db_pass);
        if (!$conn) {
            echo "mssql_connect() failed, " . mysql_error();
        }
        $bret = mysql_select_db($db_database, $conn);
        if (!$bret) {
            echo "mysql_select_db() failed, " . mysql_error();
        }
		# trying to deal with russian
		$ret = mysql_query("SET NAMES 'UTF8'");
		if ($debug) echo "Set names returned $ret<br>\n";
    }
    return $conn;
}

function close_connection() {
    global $conn;
    mysql_close($conn);
    $conn = null;
}

function drop_database() {
	global $debug;
	global $conn;

	$sql = "drop table orders";
	$ret = mysql_query($sql, $conn);
	$sql = "drop table questions";
	$ret = mysql_query($sql, $conn);
    if (!$ret) {
        echo "drop database failed, SQL: " . $sql . 
			" Error:" . mysql_error($conn) . "<br/>\n";
        return FALSE;
    } else {
		if ($debug) echo "drop database passed OK<br/>\n";
	}
    return TRUE;
}

function create_database() {
	global $debug;
	global $conn;

	$sql = "create table orders ".
		"(order_id int NOT NULL AUTO_INCREMENT, ".
		"cname varchar(100), ".
		"email varchar(100), ".
		"phone varchar(20)," . 
		"mobile varchar(20)," . 
		"address varchar(100)," . 
		"katamaran_type varchar(50),".
		"comments varchar(250), ".
		"primary key(order_id)) DEFAULT CHARSET=utf8";
	$ret = mysql_query($sql, $conn);
    if ($debug) echo "mysql_query() passed, SQL: $sql, ret = $ret<br>\n";
    if (!$ret) {
        echo "create database failed, Error: " . 
			mysql_error($conn) . "<br/>\n";
        return FALSE;
    }
	# now create database questions

	$sql = "create table questions ".
		"(question_id int NOT NULL AUTO_INCREMENT, ".
		"cname varchar(100), ".
		"email varchar(100), ".
		"phone varchar(20)," . 
		"question varchar(500)," . 
		"answer varchar(500)," . 
		"primary key(question_id)) DEFAULT CHARSET=utf8";
	$ret = mysql_query($sql, $conn);
    if ($debug) echo "mysql_query() passed, SQL: $sql, ret = $ret<br>\n";
    if (!$ret) {
        echo "create database failed, Error: " . 
			mysql_error($conn) . "<br/>\n";
        return FALSE;
    }
    return TRUE;
}

function insert_records() {
	global $debug;
	global $conn;
	global $error;
	global $fields1;
	global $answer;

	$vals = array();
	foreach ($fields1 as $f) {
		$v = $_REQUEST[$f];
		if ($v) {
			$vals[$f] = mysql_real_escape_string($v);
		} else {
			$vals[$f] = "";
		}
	}
	if ($debug) echo "Received comments: " . $_REQUEST['comments'] . "<br>\n";
	$sql = "insert into orders (`".
		implode("`, `", $fields1) .
		"`) " .
		" values ('" . implode("', '", $vals) . "')";
	$ret = mysql_query("SET NAMES 'UTF8'");
	if ($debug) echo "Set names returned $ret<br>\n";
	$ret = mysql_query($sql, $conn);
    if ($debug) echo "INSERT_RECORDS(). mysql_query() passed, ".
		"SQL: $sql, ret = $ret<br>\n";
    if (!$ret) {
        $error = "inserting records failed, " . mysql_error($conn);
		echo $error;
        return FALSE;
    } else {
		$answer = "Спасибо за ваш заказ.<br/>\n";
	}
    return TRUE;
}

function mail_order() {
	global $debug;
	global $answer;
	global $fields1;
	global $vals;

	if ($debug) {
		echo "sending confirmation email, vals: " . $vals . "<br>\n";
	}
	$body = "You have one more katamaran order!\n";
	foreach ($fields1 as $f) {
		$v = $_REQUEST[$f];
		$body = $body . "$f : $v \n";
	}
	$subject = "new order for katamaran on katamaran2000";
	$to = "mishagam@yahoo.com,gambic@mail.ru,olgagamb@gmail.com";
	if (!$body) {
		$body = 'test body, test Body from mishagam orderdb.php';
	}
	$add_head = "\r\n";

	if ($debug) {
		echo "Send mail version 1.0<br>\n";
		echo "<p>To: $to<br>\n";
		echo "subject: $subject<br>\n";
		echo "body: $body<br>\n";
		echo "add_head: $add_head</p>\n";
	}
	if (mail($to, $subject, $body, $add_head)) {
		$answer = "Послали емайл с оповещением\n";
	} else {
		echo("<p>Не сумели послать емайл с оповещением...</p>");
	}
}

function insert_qrecords() {
	global $debug;
	global $conn;
	global $error;
	global $fields1;

	$vals = array();
	foreach ($qfields1 as $f) {
		$v = $_REQUEST[$f];
		if ($v) {
			$vals[$f] = mysql_real_escape_string($v);
		} else {
			$vals[$f] = "";
		}
	}
	if ($debug) echo "Received comments: " . $_REQUEST['comments'] . "<br>\n";
	$sql = "insert into orders (`".
		implode("`, `", $qfields1) .
		"`) " .
		" values ('" . implode("', '", $vals) . "')";
	$ret = mysql_query($sql, $conn);
    if ($debug) echo "INSERT_RECORDS(). mysql_query() passed, ".
		"SQL: $sql, ret = $ret<br>\n";
    if (!$ret) {
        $error = "inserting records failed, " . mysql_error($conn);
		echo $error;
        return FALSE;
    }
    return TRUE;
}

function read_orders() {
    global $debug;
	global $records;

    $sql = "SELECT * FROM orders";
		
    $result = mysql_query($sql);
    if (!$result) {
        echo "read_orders() failed, " . mysql_error();
        return FALSE;
    }
    if ($debug) echo "mysql_query() passed, SQL: $sql<br>\n";
    $inv = array();
    while ($row = mysql_fetch_assoc($result)) {
		$records[] = $row;
    }

    return $inv;
}

function remove_record() {
    global $debug;
	global $records;

	$id = $_REQUEST['id'];
    $sql = "DELETE FROM orders WHERE order_id=$id";
		
    $result = mysql_query($sql);
    if (!$result) {
        echo "remove_order() failed, " . mysql_error();
        return FALSE;
    } else {
		echo "Record $id removed OK<br>\n";
	}
    if ($debug) echo "mysql_query() passed, SQL: $sql<br>\n";
	return TRUE;
}

function read_questions() {
    global $debug;
	global $records;

    $sql = "SELECT * FROM orders";		
    $result = mysql_query($sql);
    if (!$result) {
        echo "read_orders() failed, " . mysql_error();
        return FALSE;
    }
    if ($debug) echo "mysql_query() passed, SQL: $sql<br>\n";
    $inv = array();
    while ($row = mysql_fetch_assoc($result)) {
		$records[] = $row;
    }
    return $inv;
}

function send_mail() {
	$to = $_REQUEST['to'];
	if ($to) {
		$to = $to . ',';
	}
	$to = "mishagam@yahoo.com,mishagam@gmail.com";
	$subject = $_REQUEST['subject'];
	$body = $_REQUEST['body'];
	if (!$body) {
		$body = 'test body, test Body from mishagam orderdb.php';
	}
	$from = "mishagam@yahoo.com";
	$add_head = $from . "\r\n";

	echo "Send mail version 1.2<br>\n";
	echo "<p>To: $to<br>\n";
	echo "subject: $subject<br>\n";
	echo "body: $body<br>\n";
	echo "add_head: $add_head</p>\n";
	if (mail($to, $subject, $body, $add_head)) {
		echo("<p>Message successfully sent! </p>");
	} else {
		echo("<p>Message delivery failed...</p>");
	}
}

function do_work() {
	global $debug;
	global $command;
	global $conn;

	$command = $_REQUEST['command'];
	if ($command == "mail") {
		send_mail();
		return;
	} else if ($command == "mail_order") {
		mail_order();
		return;
	} else if (!$command) {
		echo "No command<br>\n";
		return;
	}
	
	get_connection();
    if ($debug) echo "get_connection() passed<br>\n";
	if ($command == "create") {
		drop_database();
		create_database();
	} else if ($command == "insert") {
		 insert_records();
	} else if ($command == "remove") {
		 remove_record();
	} else if ($command == "list") {
		read_orders();
	} else {
		echo "No command<br/>\n";
	}
	if ($conn) close_connection();
}

do_work();

?>
<html><head>
<title>Database Work</title>
</head>
<body>

<?php
echo "command = $command<br/>\n";
if ($command == "list") {
	echo "Records<br/><table><thead><tr>\n";
	foreach ($fields as $fld) {
		echo "<th>$fld</th>\n";
	}
	echo "</thead><tbody>\n";
	foreach ($records as $r) {
		echo "<tr>\n";
		foreach ($fields as $f) {
			echo "<td>" . $r[$f] . "</td>";
		}
		echo "\n</tr>\n";
	}
	echo "</tbody></table>\n";
} else if ($command == "listq") {
	echo "Records<br/><table><thead><tr>\n";
	foreach ($qfields as $fld) {
		echo "<th>$fld</th>\n";
	}
	echo "</thead><tbody>\n";
	foreach ($records as $r) {
		echo "<tr>\n";
		foreach ($qfields as $f) {
			echo "<td>" . $r[$f] . "</td>";
		}
		echo "\n</tr>\n";
	}
	echo "</tbody></table>\n";
} else if ($command == 'insert' || $command=='mail_order') {
	echo "$start_content<br>\n";
	if ($error == '') {
		echo $answer;
		# if ($debug) echo "Query string: " . $_SERVER['QUERY_STRING'];
	} else {
		echo "Recording order failed: $error<br>\n";
	}
	echo "$end_content<br>\n";
}
?>
</body>
</html>
