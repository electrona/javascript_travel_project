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

const display = msgs => {
  // create a new ul element
  const ul = document.createElement("ul");
  ul.classList.add("messages");

  // create a new li element for each error message, add to ul
  for (let msg of msgs) {
      const li = document.createElement("li");
      const text = document.createTextNode(msg);
      li.appendChild(text);
      ul.appendChild(li);
  }

  // if ul node isn't in document yet, add it
  const node = $("ul");
  if (node == null) {
      // get the form element 
      const form = $("form");

      // add ul to parent of form, before the form
      form.parentNode.insertBefore(ul, form);
  } else {
      // replace existing ul node
      node.parentNode.replaceChild(ul, node);
  }  
}


const processEntries = () => {
  // get form controls to check for validity
  const name = $("#name");
  const passport = $("#passport");
  const creditcard = $("#creditcard");
  
  const msgs = []
  
  // check user entries for validity
  let isValid = true;
  if (name.value == "") {
      name.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else {
      msgs[msgs.length] = $(name);
  }
  

  var numberOfChars = 6;
  if (passport.value == ""){
    ;

      passport.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else { 
      msgs[msgs.length] = $(passport);
  }

  if (creditcard.value == "") {
      creditcard.nextElementSibling.textContent = "<span>";
      isValid = false; 
  } else { 
      msgs[msgs.length] = $(passport);
  }

  // submit the form or notify user of errors
  if (msgs.length == 0) {  // no error messages
    $("form").submit(); 
  } else {
    display(msgs);
  }

 
  // submit the form if all fields are valid
  if (isValid == true) {
      $("form").submit(); 
  }
  
};

const resetForm = () => {
  $("form").reset();
  
  // remove error messages
  $("ul").remove();
  
  
};

document.addEventListener("DOMContentLoaded", () => {
  $("#process").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);  
     
});

// const resetForm = () => {
//   $("form").reset();
//   $("#name").nextElementSibling.textContent = "*";
//   $("#passport").nextElementSibling.textContent = "*";
//   $("#creditcard").nextElementSibling.textContent = "*";	
  
// };

// document.addEventListener("DOMContentLoaded", () => {
//   $("#process").addEventListener("click", processEntries);
//   $("#reset_form").addEventListener("click", resetForm); 
  

    
// });
        