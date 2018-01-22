<?php
// get ?u=
$U = $_GET["u"];

// if there isn't one, redirect to Intern
if($U == ""){
	header("Location: http://science.blacksilver.xyz/tab/hiring?u=Intern");
	die();
}
?>
<!doctype html>
<html>
	<head>
		<title>FOR SCIENCE!</title>
		
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/head.php");
?>
		<script>
			var hiretype = "<?php echo $U ?>"
		</script>
		<script src="hiring.js"></script>
		<!-- TODO: OpenGraph -->
	</head>
	<body>
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/header.php");
?>
	
	<div id="hiring">
		<div class="pick">
			<ul>
				<li><a href="/tab/hiring/?u=Intern"		>Intern</a></li>
				<li><a href="/tab/hiring/?u=Accountant"	>Accountant</a></li>
				<li><a href="/tab/hiring/?u=SpreadBot"	>SpreadBot</a></li>
			</ul>
		</div>
		<div class="buy">
			<h1><?php echo $U?><span class="amt">0</span></h1>
			<button class="hirebtn" onclick="xyzzy();">Hire!</button><span class="cost">?</span>
			<ul id="unit-stats">

			</ul>
		</div>
	</div>
	
	</body>
</html>

<!-- vim: ts=4 syntax=php
-->
