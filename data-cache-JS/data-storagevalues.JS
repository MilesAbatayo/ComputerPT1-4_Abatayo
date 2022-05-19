let developer = 0;
let debounce = 0;
let verbam = document.getElementById("userverify_u3x_developer");

document.addEventListener("contextmenu", (e) => {
    if(developer == 0){
        e.preventDefault();
    }
})

document.onkeydown = function(e) {
    if(developer == 0){
        if(event.keyCode == 123) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
         }
    }
}