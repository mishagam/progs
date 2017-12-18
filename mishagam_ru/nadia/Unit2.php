<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head><title>Nadezhda Masich - PHP Unit2</title>
</head>
<body>
<?php
echo "Starting Unit2 loop:";
$Count = 0;
while ($Count < 100) {
		++$Count;
        $Numbers[] = $Count;
}
foreach ($Numbers as $CurNum)
		echo "<p>$CurNum</p>";

?>
</body></html>