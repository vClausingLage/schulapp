<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,OPTIONS');

$q = strtolower(htmlentities($_GET['q']));

$con = mysqli_connect('10.35.46.86:3306','k128473_128473','Fxdg359','k128473_wordbook');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM wordbook WHERE Latein LIKE '%$q%'";
$result = mysqli_query($con,$sql);

echo "<div class='w3-container'>
<table style='font-size:1.1em' class='w3-table-all w3-hoverable'>
<tr>
<th>Latein</th>
<th>Deutsch</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . utf8_encode($row['Latein']) . "</td>";
  echo "<td>" . utf8_encode($row['Deutsch']) . "</td>";
  echo "</tr>";
}
echo "</table></div>";
mysqli_close($con);
?>
</body>
</html>
