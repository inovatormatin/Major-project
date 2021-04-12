// Search js from Homepage start here
var Doctor = ["duke sanson","rose moon","coni star","georgia peter","jackline star"];
var Treatment = ["dentistry","orthopedic surgery","cancer","cardiology"];
var Hospital = ["apollo hospital","fortis","rockland hospital","primus super speciality hospital"];
var Others = ["tvastra plus","doctors","hospital","treatment"];
var S_input = document.getElementById("user_search_input");
var S_button = document.getElementById("user_search_button");
function makeInputInLowerCase() {
	S_input.value = S_input.value.toLowerCase();
}
function searchValue() {
	makeInputInLowerCase();
	switch(S_input.value) {
		case Doctor[0]:
			window.location.href = './doctors.html';
		break;
		case Doctor[1]:
			window.location.href = './doctors.html';
		break;
		case Doctor[2]:
			window.location.href = './doctors.html';
		break;
		case Doctor[3]:
			window.location.href = './doctors.html';
		break;
		case Doctor[4]:
			window.location.href = './doctors.html';
		break;
		case Treatment[0]:
			window.location.href = './treatment.html';
		break;
		case Treatment[1]:
			window.location.href = './treatment.html';
		break;
		case Treatment[2]:
			window.location.href = './treatment.html';
		break;
		case Treatment[3]:
			window.location.href = './treatment.html';
		break;
		case Hospital[0]:
			window.location.href = './hospitals.html';
		break;
		case Hospital[1]:
			window.location.href = './hospitals.html';
		break;
		case Hospital[2]:
			window.location.href = './hospitals.html';
		break;
		case Hospital[3]:
			window.location.href = './hospitals.html';
		break;
		case Others[0]:
			window.location.href = './tvastraplus.html';
		break;
		case Others[1]:
			window.location.href = './doctors.html';
		break;
		case Others[2]:
			window.location.href = './hospitals.html';
		break;
		case Others[3]:
			window.location.href = './treatment.html';
		break;
		default:
		    alert("Not found");
		break;
	}
}
function searchValueByEnter(event) {
	if (S_input.value.length > 0 && event.keyCode === 13) {
		searchValue();
		S_input.value = "";
	}
}
function searchValueByButton() {
	if (S_input.value.length > 0) {
		searchValue();
		S_input.value = "";
	}
}
S_input.addEventListener("keypress", searchValueByEnter);
S_button.addEventListener("click", searchValueByButton);

// Search js from Homepage ends here 

// How it works js from Homepage start here 
var option1 = document.getElementById("one");
var option2 = document.getElementById("two");
var option3 = document.getElementById("three");
var option4 = document.getElementById("four");
var option5 = document.getElementById("five");
var option6 = document.getElementById("six");
var option7 = document.getElementById("seven");
function active1() {x = 1; revaluex();}
function active2() {x = 2; revaluex();}
function active3() {x = 3; revaluex();}
function active4() {x = 4; revaluex();}
function active5() {x = 5; revaluex();}
function active6() {x = 6; revaluex();}
function active7() {x = 7; revaluex();}
var c;
var j = [option1, option2, option3, option4,option5, option6, option7];
function SpanColouring() {
	for (var i = 0; i <= 6; i++) {
		c = j[i];
		c.style.border = "1px solid #cccccc";
		c.style.color = "#cccccc";
		c.getElementsByTagName("span")[0].style.color = "#cccccc";
	}
}
var x;
function revaluex() {
	SpanColouring();
	switch (x) {
		case 1:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img1.png";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img1.png";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Fix Consultation";
			document.getElementById("sideimage_h3_mob").innerHTML = "Fix Consultation";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "This depicts that user will have to fix appointment first when it selects a particular doctor";
			document.getElementById("sideimage_p_mob").innerHTML = "This depicts that user will have to fix appointment first when it selects a particular doctor";
			option1.style.border = "2px solid #0173b2";
			option1.style.color = "#021433";	
			option1.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 2:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img2.png";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img2.png";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Upload Medical Reports";
			document.getElementById("sideimage_h3_mob").innerHTML = "Upload Medical Reports";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "This depicts that user will have to upload there medical report's";
			document.getElementById("sideimage_p_mob").innerHTML = "This depicts that user will have to upload there medical report's";
			option2.style.border = "2px solid #0173b2";
			option2.style.color = "#021433";
			option2.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 3:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img3.jpeg";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img3.jpeg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Consult with doctor";
			document.getElementById("sideimage_h3_mob").innerHTML = "Consult with doctor";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After uploading the medical reports user can directly consult with doctor.";
			document.getElementById("sideimage_p_mob").innerHTML = "After uploading the medical reports user can directly consult with doctor.";
			option3.style.border = "2px solid #0173b2";
			option3.style.color = "#021433";	
			option3.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 4:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img4.jpeg";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img4.jpeg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Fix surgery";
			document.getElementById("sideimage_h3_mob").innerHTML = "Fix surgery";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After Consultation user can check the details for surgery and can fix thier surgery.";
			document.getElementById("sideimage_p_mob").innerHTML = "After Consultation user can check the details for surgery and can fix thier surgery.";
			option4.style.border = "2px solid #0173b2";
			option4.style.color = "#021433";	
			option4.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 5:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img5.jpg";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img5.jpg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Hospital sent estimates";
			document.getElementById("sideimage_h3_mob").innerHTML = "Hospital sent estimates";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After fixing the surgery Hospital will calculate an estimate of all expenses and duties";
			document.getElementById("sideimage_p_mob").innerHTML = "After fixing the surgery Hospital will calculate an estimate of all expenses and duties";
			option5.style.border = "2px solid #0173b2";
			option5.style.color = "#021433";	
			option5.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 6:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img6.jpg";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img6.jpg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Payment";
			document.getElementById("sideimage_h3_mob").innerHTML = "Payment";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "User can make Payment in many ways directly to Hospital,doctor etc.";
			document.getElementById("sideimage_p_mob").innerHTML = "User can make Payment in many ways directly to Hospital,doctor etc.";
			option6.style.border = "2px solid #0173b2";
			option6.style.color = "#021433";
			option6.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		case 7:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img7.jpeg";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img7.jpeg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Surgery Completed";
			document.getElementById("sideimage_h3_mob").innerHTML = "Surgery Completed";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After the Payment surgery and treatment will be get done on given day.";
			document.getElementById("sideimage_p_mob").innerHTML = "After the Payment surgery and treatment will be get done on given day.";
			option7.style.border = "2px solid #0173b2";
			option7.style.color = "#021433";	
			option7.getElementsByTagName("span")[0].style.color = "#0173b2";
		break;
		default:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img1.png";
			document.getElementById("sideimage_HIW_mob").src = "https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img1.png";
			option1.style.border = "2px solid #0173b2";
			option1.style.color = "#021433";	
			option1.getElementsByTagName("span")[0].style.color = "#0173b2";	
		break;
	}
}
revaluex();
// // How it works js from Homepage ends here 