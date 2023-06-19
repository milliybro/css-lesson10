window.addEventListener("scroll", function () {
   toggleBacktop();
 });
 
 let backtop = document.getElementById("backtop");
 
 function toggleBacktop() {
   if (
     document.body.scrollTop > 200 ||
     document.documentElement.scrollTop > 200
   ) {
     backtop.classList.add('backtop-show')
   } else {
     backtop.classList.remove('backtop-show')
   }
 }

 
 function openNavbar() {
   document.getElementById("navbar-responsive").style.left = "0";
   // document.getElementById("navbar-responsive").style.top = "0";
 }
 function closeNavbar() {
   document.getElementById("navbar-responsive").style.left = "-100%";
   // document.getElementById("navbar-responsive").style.top = "-100%";
 }
 
 document.getElementById("navbar-open").addEventListener("click", openNavbar);
 document.getElementById("navbar-close").addEventListener("click", closeNavbar);

 const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});
