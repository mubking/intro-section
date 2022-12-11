function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
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
   

  function Clickme() {
    document.getElementById("drop").classList.toggle("open");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropctn')) {
      var dropdowns = document.getElementsByClassName("dropdown-show");
      var b;
      for (b = 0; b < dropdowns.length; b++) {
        var openDropdown = dropdowns[b];
        if (openDropdown.classList.contains('open')) {
          openDropdown.classList.remove('open');
        }
      }
    }


   
  }

  function toggler(){
    let mobile = document.querySelector(".mobile-nav");
    let navLink = document.querySelector(".nav-item");
    let tg = document.querySelector(".toggle");
    mobile.classList.toggle("mobile-toggle");
}





