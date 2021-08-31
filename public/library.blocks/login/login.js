function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function loginOpen() {
  document.getElementById("login-box").style.display = "flex";
  document.getElementById("loginOpen").click();
  document.getElementsByClassName("body")[0].style.overflow = "hidden"
  closeModal();
}

function regOpen() {
  document.getElementById("login-box").style.display = "flex";
  document.getElementById("regOpen").click();
  document.getElementsByClassName("body")[0].style.overflow = "hidden"
  closeModal();
}

function closeModal() {
  let modal = document.getElementById('login-box');

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    document.getElementsByClassName("body")[0].style.overflow = "auto"
    }
  }
}