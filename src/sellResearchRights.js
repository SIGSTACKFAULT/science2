var sellrr = class {
	
	constructor(){
		this.pow = 0;
		if(localStorage.sellrr_pow != undefined)
			this.pow = parseInt(localStorage.sellrr_pow);
		$(document).ready(function(){sellrr.draw()})
	}

	sell(){
		var amt = Math.pow(10,this.pow)
		if(resources.science < amt) return;
		
		resources.science -= amt
		resources.money += amt
		
		draw();
	}

	more(){
		this.pow++;
		this.draw()
		return this.pow
	}

	less(){
		this.pow--;
		this.pow = Math.max(this.pow, 0);
		this.draw()
		return this.pow
	}

	draw(){
		$("#sell-research-rights .power").text(this.pow)
		$("#sell-research-rights .amount").text(Math.pow(10,this.pow))
		if(this.pow == 0){
			$("#sell-research-rights .less").prop("disabled", true)
		} else {
			$("#sell-research-rights .less").prop("disabled", false)
		}
		localStorage.sellrr_pow = sellrr.pow
		return $("sell-research-rights")
	}
}

sellrr = new sellrr()
