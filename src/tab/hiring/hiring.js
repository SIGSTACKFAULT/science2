var stats;
var J = null;

var staff = {}

if(localStorage.staff == "[object Object]"){
	localStorage.staff = JSON.stringify(staff)
}
if(typeof localStorage.staff != "undefined"){
	staff = JSON.parse(localStorage.staff)
}

if(typeof staff[hiretype] == "undefined") staff[hiretype] = 0;

setInterval(function(){
	localStorage.staff = JSON.stringify(staff);
}, 1000);



$(document).ready(function(){
	// we can assume hiretype is set
	if(typeof hiretype == "undefined"){ alert("!!!"); return; }
	
	stats = $("#unit-stats");
	
	$.getJSON("/common/hiredata.json", function(j){
		J = j[hiretype];
		$(".cost").text(J.cost.money);
		// human-readable description
		for(i in J.human){
			var li = $("<li>").html(J.human[i])
			stats.append(li)
		}
		
		
	});

})

class Hire {
	constructor(){}
	
	hire(){
		// Are we ready yet?
		if(J == null){ alert("Hang on, still loading!"); return }
		
		
		if(resources.money >= J.cost.money){
			console.log("Accepted.");
			resources.money -= J.cost.money;
			staff[hiretype]++;
		} else {
			console.log("Rejected.");
		}
	}
}

var hire = new Hire();

