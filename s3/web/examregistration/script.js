function validate(){
	var fname = document.forms["appform"]["fname"].value;
	var lname = document.forms["appform"]["lname"].value;
	var sex =   document.appform.sex.value;
	var dob =   document.forms["appform"]["dob"].value;
	var mothersname =   document.forms["appform"]["mothersname"].value;
	var fathersname =   document.forms["appform"]["fathersname"].value;

	var city =   document.forms["appform"]["city"].value;
	var state_code =   document.forms["appform"]["state_code"].value;
	var pincode =   document.forms["appform"]["pincode"].value;
	var country =   document.forms["appform"]["country"].value;
	var email =   document.forms["appform"]["email"].value;
	var mobile =   document.forms["appform"]["mobile"].value;
	var sameaddress =   document.forms["appform"]["sameaddress"].value;
	//alert("dhg");
	//Validate name
	if(fname == ""){
		alert("Name Field cannot be empty");
		document.forms["appform"]["fname"].focus();
		return false
	}
	//Validate last name
	if(lname == ""){
		alert("Name Field cannot be empty");
		document.forms["appform"]["lname"].focus();
		return false
	}
	if(sex == ""){
		alert("Choose a gender");
		document.forms["appform"]["sex"].focus();
		return false
	}
	if(email == ""){
		alert("email Field cannot be empty");
		document.forms["appform"]["email"].focus();
		return false
	}
	
	if(mobile == ""){
		alert("mobile no Field cannot be empty");
		document.forms["appform"]["mobile"].focus();
		return false
	}
	
	//validate email
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
		 //return (true)
	 }
	 else{
	 	alert("You have entered an invalid email address!")
	 	 document.forms["appform"]["email"].focus();
	        return (false);
	 }
	 
	 //Validate mobile no
	 var phoneno = /^\d{10}$/;
	 if(mobile.match(phoneno)){
	 	return true
	 }
	 else{
	 	alert("Invalid Mobile No");
	 	return false;
	 	
	 }
	
	 
}// Close of function
	//Copying the address
	function changefunctionyes1(){
	//Copying address
	//alert("sdh");
		document.forms["appform"]["permanentaddress1"].value =  document.forms["appform"]["address1"].value;
		document.forms["appform"]["permanentaddress2"].value =  document.forms["appform"]["address2"].value;
		document.forms["appform"]["permanentaddress3"].value =  document.forms["appform"]["address3"].value;
		document.forms["appform"]["permanentaddress4"].value =  document.forms["appform"]["address4"].value;
		document.forms["appform"]["city1"].value =  document.forms["appform"]["city"].value;
		document.forms["appform"]["state_code1"].value =  document.forms["appform"]["state_code"].value;
		document.forms["appform"]["pincode1"].value =  document.forms["appform"]["pincode"].value;
		document.forms["appform"]["phone1"].value =  document.forms["appform"]["phone"].value;
		document.forms["appform"]["country1"].value =  document.forms["appform"]["country"].value;
		
		
		
	}
	function changefunctionno(){
	//removing address
		document.forms["appform"]["permanentaddress1"].value =  "";
		document.forms["appform"]["permanentaddress2"].value =  "";
		document.forms["appform"]["permanentaddress3"].value =  "";
		document.forms["appform"]["permanentaddress4"].value =  "";
		document.forms["appform"]["city1"].value =  "";
		document.forms["appform"]["state_code1"].value =  "";
		document.forms["appform"]["pincode1"].value =  "";
		document.forms["appform"]["phone1"].value =  "";
		document.forms["appform"]["country1"].value =  "";
	}

