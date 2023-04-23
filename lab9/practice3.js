
function validate() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  
if (password1 !== password2) {
    alert("two passwords don't match");
  } else {
    alert("two passwords are matched");
  }
}
