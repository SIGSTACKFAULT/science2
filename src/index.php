<!doctype html>
<html>
	<head>
		<title>FOR SCIENCE!</title>
		
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/head.php");
?>
		<script src="/sellResearchRights.js"></script>
		<!-- TODO: OpenGraph -->
	</head>
	<body>
<?php
	include($_SERVER["DOCUMENT_ROOT"] . "/common/header.php");
?>
		<div id="content">
			<div id="sell-research-rights">
				<button class="btn sell" onclick="sellrr.sell()">
					Sell Research Rights
				</button>
				<button class="btn more" onclick="sellrr.more()">
					+
				</button>
				<button class="btn more" onclick="sellrr.less()">
					-
				</button>
				&times;10<sup class="power hi">0</sup> = <span class="amount">1</span>
			</div>
		</div>
	</body>
</html>
