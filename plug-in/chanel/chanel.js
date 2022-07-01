// Section : icon-user
let windowObjectReference = null; 

function openRequestedPopup(url, chanelUser) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open("/plug-in/chanel/chanel_user/chanel_user.html", chanel-user, "popup");
  } else {
    windowObjectReference.focus();
  };
}

// Section : nav
let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav a");

horizontalMenus.forEach(menu=>
  menu.addEventListener("click",(e)=> horizontalIndicator(e))
  );

function horizontalIndicator(e){
  horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";  
}

// Section: nav-modal
let modals = document.getElementsByClassName('modal');
let btns = document.getElementsByClassName("modalBtn");
let spans = document.getElementsByClassName("closeBtn");
for(let i=0;i<btns.length;i++){
  btns[i].onclick = function(){
    modals[i].style.display = "block";
  }
}
for(let i=0;i<spans.length;i++){
  spans[i].onclick = function(){
    modals[i].style.display = "none";
  }
}

// Section: Responsive Nav side bar
const navToggler = document.querySelector(".cn-toggle");
navToggler.addEventListener("click", navToggle);

function navToggle() {
 navToggler.classList.toggle("active");
 const nav = document.querySelector(".cn-nav");
 nav.classList.toggle("open");
 if(nav.classList.contains("open")){
   nav.style.maxWidth = nav.scrollWidth + "px";
 } else {
   nav.removeAttribute("style");
 }
}