var stats;
var J = null;

$(document).ready(function(){
	// we can assume hiretype is set
	if(typeof hiretype == "undefined"){ alert("!!!"); return; }
	
	stats = $("#unit-stats");
	
	$.getJSON("/common/hiredata.json", function(j){
		J = j[hiretype];
		// human-readable description
		for(i in J.human){
			var li = $("<li>").html(J.human[i])
			stats.append(li)
		}
		
		
	})
})


function xyzzy(){
	// Are we ready yet?
	if(J == null){ alert("Hang on, still loading!"); return }
	
	console.log("Hire!");
}
