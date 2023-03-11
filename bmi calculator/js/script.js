
function calculate() {
	let height = parseInt(document
			.querySelector("#hig").value);
	let weight = parseInt(document
			.querySelector("#weig").value);
            if((height === "" || isNaN(height)) || (weight === "" || isNaN(weight)))

            {
            alert("Provide all the details");
            }
          else{
            var heimeter=height/100;
            var sqrHight=heimeter*heimeter;
            var bmi=weight/sqrHight;
		if (bmi < 18.6) {
			alert("underweight");
        }

		else if (bmi >= 18.6 && bmi < 24.9)
			{
                alert("normal");
            }

            else if(bmi>=25.0 && bmi<29.9)
            {
                alert("overweight");
            }
               else
            {     
             alert("obsese");
              }
	}
}
