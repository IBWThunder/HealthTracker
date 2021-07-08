function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var form = document.getElementById('id01')
window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}