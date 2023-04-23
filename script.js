function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function show(){
    document.getElementById("showit").style.display="flex";
  }
  function closeit(){

    document.getElementById("showit").style.display="none";
  }

  function changeco1(){
    document.getElementById("buyit").style.backgroundColor="#ffffff";
    document.getElementById("rentit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
    document.getElementById("investit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
  }
  function changeco2(){
    document.getElementById("buyit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
    document.getElementById("rentit").style.backgroundColor="#ffffff";
    document.getElementById("investit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
  }
  function changeco3(){
    document.getElementById("buyit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
    document.getElementById("rentit").style.backgroundColor="rgba(255, 255, 255, 0.5019607843137255)";
    document.getElementById("investit").style.backgroundColor="#ffffff";
  }