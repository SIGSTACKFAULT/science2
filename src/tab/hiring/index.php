<!doctype html>
<?php
$U = $_GET["u"]
?>
<html>
	<head>
		<title>FOR SCIENCE!</title>
		
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/head.php");
?>
		<!-- TODO: OpenGraph -->
	</head>
	<body>
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/header.php");
?>
	
	<div id="hiring">
		<ul class="pick">
			<li><a href="/tab/hiring/?u=Intern"		>Intern</a></li>
			<li><a href="/tab/hiring/?u=Accountant"	>Accountant</a></li>
			<li><a href="/tab/hiring/?u=SpreadBot"	>SpreadBot</a></li>
		</ul>
		<?php echo($u); ?>
	</div>
	
	</body>
</html>

<!-- vim: ts=4 syntax=php
-->
