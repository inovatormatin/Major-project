var coll = document.getElementsByClassName("dropdown-1");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function userdropdown() {
  document.getElementById("user-dropdown").classList.toggle("user-show"); 
}
window.onclick = function(event) {
  if (!event.target.matches('.user-dropbtn')) {
    var userdropdowns = document.getElementsByClassName("user-dropdown-content");
    var i;
    for (i = 0; i < userdropdowns.length; i++) {
      var useropenDropdown = userdropdowns[i];
      if (useropenDropdown.classList.contains('user-show')) {
        useropenDropdown.classList.remove('user-show');
      }
    }
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const showpass = () =>{
  let eye = document.getElementById('password-eye').classList;
  let pass = document.getElementById('password');
  if(eye.value.includes('fa-eye-slash')){
    eye.remove('fa-eye-slash');
    eye.add('fa-eye');
    pass.type = 'text';
  }
  else{
    eye.remove('fa-eye');
    eye.add('fa-eye-slash');
    pass.type = 'password';
  }
}
