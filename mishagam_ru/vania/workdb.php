<?php

//$host = "home";
$host = "mishagam";
//$host = "katamaran2000";

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
}
$debug = true;
$records = array();
$command = '';

header("Cache-Control: no-cache");

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
		" cname varchar(100), ".
		"email varchar(100), phone varchar(20)," . 
		" katamaran_type varchar(50), comments varchar(250), ".
		"primary key(order_id))";
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

	$sql = "insert into orders (cname, email, phone, katamaran_type, comments) " .
		" values ('myname', 'mmm@yyy.ccc', '1252348787', 'katamaran-tandem', 'comments')";
	$ret = mysql_query($sql, $conn);
    if ($debug) echo "INSERT_RECORDS(). mysql_query() passed, ".
		"SQL: $sql, ret = $ret<br>\n";
    if (!$ret) {
        echo "inserting records failed, " . mysql_error($conn);
        return FALSE;
    }
    return TRUE;
}

function read_orders() {
    global $debug;
	global $records;

    $sql = "SELECT order_id,cname,email,phone,katamaran_type,comments". 
		" FROM orders";
		
    $result = mysql_query($sql);
    if (!$result) {
        echo "read_orders() failed, " . mysql_error();
        return FALSE;
    }
    if ($debug) echo "mysql_query() passed, SQL: $sql<br>\n";
    $inv = array();
    while ($row = mysql_fetch_assoc($result)) {
        $l = $row['order_id'] . $row['cname']. $row['email'];
		$records[] = $l;
    }

    return $inv;
}

function send_mail() {
	$to = "mishagam@gmail.com";
	$subject = "Test from PHP";
	$body = "Hi,\n\nHow are you?";
	$from = "katamaran@katamaran2000.ru";
	$add_head = $from . "\r\n";
	if (mail($to, $subject, $body, $add_head)) {
		echo("<p>Message successfully sent!</p>");
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
echo "Records<br/>\n";
foreach ($records as $r) {
	echo $r . "<br/>\n";
}
?>
</body>
</html>
