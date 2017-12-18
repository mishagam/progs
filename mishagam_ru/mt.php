<html>
<head><title>mt PHP</title>
</head>
<body>
<h1>mt.php</h1>
<?php echo '<p>Hello World</p>'; ?> 
<h3>check fo IE </h3>
<?php

echo $_SERVER['HTTP_USER_AGENT'];
echo '<br>';

if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
   echo 'You are using Internet Explorer.<br />';
} else {
   echo 'You are using not IE browser.<br>';
}
?> 
<h3> Now some cycle </h3>
<?php
$i=5;
while ($i > 0) {
   echo 'i= ',$i,'<br>';
   $i = $i-1;
}
?>
<h2> Now PHP Info </h2>

<?php phpinfo() ?>
</body>
</html>
