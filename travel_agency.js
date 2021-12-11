"use strict";

const $ = (selector) => document.querySelector(selector);


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
  const creditcard = $("#creditcard");
  

  // check user entries for validity
  let isValid = true;
  if (name.value == "") {
      name.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else {
      name.nextElementSibling.textContent = ""; 
  }
   var numberOfChars = 6;
  if (passport.value == "") {
      passport.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else { 
      passport.nextElementSibling.textContent = "";
  }
   var numberOfChars = 6;
  if (creditcard.value == "") {
      creditcard.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else { 
      creditcard.nextElementSibling.textContent = "";
  }

  if (isValid == true) {
    
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("Book Trip"));
    var page = document.getElementById("booktrip");
    page.appendChild(element);
    
  }
  
};
const bookTrip = () => {
  
  $("form").submit();
  document.getElementById('forname').setAttribute("placeholder", "100");
  
  // $("#name")
  
  // $("#citya")
}
const resetForm = () => {
  $("form").reset();
  $("#name").nextElementSibling.textContent = "*";
  $("#passport").nextElementSibling.textContent = "*";
  $("#creditcard").nextElementSibling.textContent = "*";	
  
};

document.addEventListener("DOMContentLoaded", () => {
  $("#process").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);  
  $("#booktrip").addEventListener("click", bookTrip);
});
