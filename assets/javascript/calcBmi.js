function mod(div,base) {
	return Math.round(div - (Math.floor(div/base)*base));
}


function calcBmi() {
	var w = document.bmi.weight.value * 1;
	var HeightFeetInt = document.bmi.htf.value * 1;
	var HeightInchesInt = document.bmi.hti.value * 1;
	var HeightFeetConvert = HeightFeetInt * 12;
	h = HeightFeetConvert + HeightInchesInt;
	displaybmi = (Math.round((w * 703) / (h * h)));
	var rvalue = true;
	
	if ( (w <= 35) || (w >= 500)  || (h <= 48) || (h >= 120) ) {
		alert ("Invalid data.  Please check and re-enter!");
		rvalue = false;
	}
	
	if (rvalue) {
		if (HeightInchesInt > 11) {
			reminderinches = mod(HeightInchesInt,12);
			document.bmi.hti.value = reminderinches;
			document.bmi.htf.value = HeightFeetInt + 
			((HeightInchesInt - reminderinches)/12);
			document.getElementById("answer").innerHTML = displaybmi;
		}
		
		if (displaybmi <19) document.getElementById("comment").innerHTML = "Underweight";
		if (displaybmi >=19 && displaybmi <=25) document.getElementById("comment").innerHTML = "Desirable";
		if (displaybmi >=26 && displaybmi <=29) document.getElementById("comment").innerHTML = "prone to health risks";
		if (displaybmi >=30 && displaybmi <=40) document.getElementById("comment").innerHTML = "Obese";
		if (displaybmi >40) 
			document.getElementById("comment").innerHTML = "Extremely obese";
			document.getElementById("answer").innerHTML = displaybmi;
		}
	return rvalue;
}
