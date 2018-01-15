// INITIALIZERS

if(localStorage.resources)
	resources = JSON.parse(atob(localStorage.resources));


// MAIN EVENT LOOP


$(document).ready(ready_to_rumble);


function ready_to_rumble(){
	console.log("Let's rumble, jQuery.");
	
	main_loop();
	setInterval(main_loop, 1000)
}

function main_loop(){
	
	resources.science += resources.science_diff
	resources.money   += resources.money_diff

	$("#resources .science").html(resources.science)
	$("#resources .money").html(resources.money)

	localStorage.resources = btoa(JSON.stringify(resources))
}
