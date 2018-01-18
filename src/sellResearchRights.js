var sellrr = class {
	
	constructor(){
		this.pow = 0;
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
		this.draw()
		return this.pow
	}

	draw(){
		$("#sell-research-rights .power").text(this.pow)
		$("#sell-research-rights .amount").text(Math.pow(10,this.pow))
	}
}

sellrr = new sellrr()
