const favoriteIcons = document.querySelectorAll(".favorite-icon");

favoriteIcons.forEach(icon => {
  icon.addEventListener("click", () => {
let check = icon.classList.toggle("filled");
    
if(check){
(icon.class)    
    icon.innerHTML = "&#10084";
} 
else{
  (icon.class)    
    icon.innerHTML = "&#9825";
}
  });
});