function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
document.addEventListener('DOMContentLoaded', function() {
  var sticky =
      !!getComputedStyle(document.querySelector('main')).webkitOverflowScrolling;
  if(sticky) {
      document.body.className = "sticky";
  }
});