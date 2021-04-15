let SearchFilterTags = [];
// filter function for location
var Location = document.getElementById("Location");
var locSearchButton = document.getElementById("locSearchButton");
var locFilterRemover = document.getElementById("locFilterRemover");
function addCheckedLocation() {
	for(var i = 0; i < Location.length;i++) {
		if (Location[i].checked) {
			if(SearchFilterTags.includes(Location[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Location[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Location[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Location[i].value);
			}
		}
	}
}
function removeLocFilter() {
	for(var i = 0; i < Location.length;i++) {
		if (Location[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Location[i].value);
			Location[i].checked = false;
		}
	}
}
locSearchButton.addEventListener("click", addCheckedLocation);
locFilterRemover.addEventListener("click", removeLocFilter);

// filter function for treatment
var Treatment = document.getElementById("Treatment");
var trtSearchButton = document.getElementById("trtSearchButton");
var trtFilterRemover = document.getElementById("trtFilterRemover");
function addCheckedTreatment() {
	for(var i = 0; i < Treatment.length;i++) {
		if (Treatment[i].checked) {
			if(SearchFilterTags.includes(Treatment[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Treatment[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Treatment[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Treatment[i].value);
			}
		}
	}
}
function removeTrtFilter() {
	for(var i = 0; i < Treatment.length;i++) {
		if (Treatment[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Treatment[i].value);
			Treatment[i].checked = false;
		}
	}
}
trtSearchButton.addEventListener("click", addCheckedTreatment);
trtFilterRemover.addEventListener("click", removeTrtFilter);

// filter function for hospital
var Hospital = document.getElementById("Hospital");
var hspSearchButton = document.getElementById("hspSearchButton");
var hspFilterRemover = document.getElementById("hspFilterRemover");
function addCheckedHospital() {
	for(var i = 0; i < Hospital.length;i++) {
		if (Hospital[i].checked) {
			if(SearchFilterTags.includes(Hospital[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Hospital[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Hospital[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Hospital[i].value);
			}
		}
	}
}
function removeHspFilter() {
	for(var i = 0; i < Hospital.length;i++) {
		if (Hospital[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Hospital[i].value);
			Hospital[i].checked = false;
		}
	}
}
hspSearchButton.addEventListener("click", addCheckedHospital);
hspFilterRemover.addEventListener("click", removeHspFilter);

// filter function for experience
var Experience = document.getElementById("experience");
var expSearchButton = document.getElementById("expSearchButton");
var expFilterRemover = document.getElementById("expFilterRemover");
function addCheckedExperience() {
	for(var i = 0; i < Experience.length;i++) {
		if (Experience[i].checked) {
			if(SearchFilterTags.includes(Experience[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Experience[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Experience[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Experience[i].value);
			}
		}
	}
}
function removeExpFilter() {
	for(var i = 0; i < Experience.length;i++) {
		if (Experience[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Experience[i].value);
			Experience[i].checked = false;
		}
	}
}
expSearchButton.addEventListener("click", addCheckedExperience);
expFilterRemover.addEventListener("click", removeExpFilter);
