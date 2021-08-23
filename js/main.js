
document.querySelector("#submit").addEventListener("click", function (e) {
    //dont do default behaviour
    e.preventDefault();
    alert("Thank you for your message")
  })
   
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }