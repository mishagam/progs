$f="aaaaa"
$f
$f = $f + " added text"
$f

function add
{
Param ([int] $a, [int] $b)

return $a + $b
}

add -a 23 -b 32

for ($i = 0; $i -lt 8; $i++)
{
   $t = 'added_' + $i + "_" + $i + '.txt'
   $t
}
$li = "aa","bb","cc"
foreach ($e in $li) 
{
    $e
}

"Finished working"
