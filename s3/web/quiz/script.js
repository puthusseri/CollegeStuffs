function calculate () {
	var mark = 0;
	var q1=document.getElementsByName('q1');
	var q2=document.getElementsByName('q2');
	var q3=document.getElementsByName('q3');
	var q4=document.getElementsByName('q4');
	
	document.getElementById('q1lab').innerHTML="Correct Answer: <script>";
	document.getElementById('q2lab').innerHTML="Correct Answer: var book = new Object();";
	document.getElementById('q3lab').innerHTML="Correct Answer: forEach()";
	document.getElementById('q4lab').innerHTML="Correct Answer: concat()";
	
	if(q1[2].checked == true) {
		document.getElementById('q1lab2').innerHTML="Correct" ;
		document.getElementById('q1lab2').style.color="green";
		mark+=1;
	} else {
		document.getElementById('q1lab2').innerHTML="Incorrect";
	    	document.getElementById('q1lab2').style.color="red";
	}
	
	if(q2[1].checked == true) {
		document.getElementById('q2lab2').innerHTML="Correct" ;
		document.getElementById('q2lab2').style.color="green";
		mark+=1;
	} else {
		document.getElementById('q2lab2').innerHTML="Incorrect";
	    	document.getElementById('q2lab2').style.color="red";
	}
	
	if(q3[2].checked == true) {
		document.getElementById('q3lab2').innerHTML="Correct" ;
		document.getElementById('q3lab2').style.color="green";
		mark+=1;
	} else {
		document.getElementById('q3lab2').innerHTML="Incorrect";
	    	document.getElementById('q3lab2').style.color="red";
	}
	
	if(q4[2].checked == true) {
		document.getElementById('q4lab2').innerHTML="Correct" ;
		document.getElementById('q4lab2').style.color="green";
		mark+=1;
	} else {
		document.getElementById('q4lab2').innerHTML="Incorrect";
	    	document.getElementById('q4lab2').style.color="red";
	}
	
	
	 document.getElementById('score').innerHTML="Total Score="+mark+"/4";
	 
	 }
		
