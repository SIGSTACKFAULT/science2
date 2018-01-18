var E = {}

function cacheCommonDomElements(){
	E.resources = {}
	E.resources.science = $("#resources .science");
	E.resources.money = $("#resources .money");
	
}

$(document).ready(cacheCommonDomElements);
