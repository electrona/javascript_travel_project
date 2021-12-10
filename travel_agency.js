"use strict";

const $ = (selector) => document.querySelector(selector);

// place constants(methods) here

document.addEventListener("DOMContentLoaded", () => {
//place code here
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const processEntries = () => {
  // get form controls to check for validity
  const name = $("#name");
  const passport = $("#passport");
  const country = $("#country");
  const terms = $("#terms");

  // check user entries for validity
  let isValid = true;
  if (name.value == "") {
      name.nextElementSibling.textContent = "<span1>";
      isValid = false; 
  } else {
      name.nextElementSibling.textContent = ""; 
  }

  var numberOfChars = 6;
  if (passport.value == ""){
    ;

      passport.nextElementSibling.textContent = "<span1>";
      isValid = false; 
  } else { 
      passport.nextElementSibling.textContent = "";
  }

  if (creditcard.value == "") {
      creditcard.nextElementSibling.textContent = "<span3>";
      isValid = false; 
  } else { 
      $("#creditcard").nextElementSibling.textContent = "";
  }

 
  // submit the form if all fields are valid
  if (isValid == true) {
      $("form").submit(); 
  }
};

const resetForm = () => {
  $("form").reset();
  $("#name").nextElementSibling.textContent = "*";
  $("#passport").nextElementSibling.textContent = "*";
  $("#creditcard").nextElementSibling.textContent = "*";	
  
};

document.addEventListener("DOMContentLoaded", () => {
  $("#process").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);  
    
});
