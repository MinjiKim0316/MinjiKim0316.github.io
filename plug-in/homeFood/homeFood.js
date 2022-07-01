// Section : Navigation
let hf_menu_navi = document.querySelectorAll(".hf_menu_navi");

hf_menu_navi.forEach(function(hf_menu_navi_item){
  hf_menu_navi_item.addEventListener("click", function(){
    hf_menu_navi.forEach(function(hf_menu_navi_item){
      hf_menu_navi_item.classList.remove("active"); 
    })
    hf_menu_navi_item.classList.add("active");
  })
})

// Section : Home-Main
let counter = 1;
setInterval(function(){
  document.getElementById('hf-main-radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);

//Section : Home-Main-Coming Soon
$('.hf-new-detail-like').click(function(){
  $(this).toggleClass('active')
})