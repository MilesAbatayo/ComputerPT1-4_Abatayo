var viewableflex = 0;

function minimizedham(){
    const vw = window.innerWidth;
    if(vw < 732){
        if(viewableflex == 0){
            document.getElementById("navbar_user_visibility").style.display = "flex";
            document.getElementById("user_ham_icon").innerHTML = "close";
            document.getElementById("user_ham_icon").style.color = "#ff4949";
            viewableflex = 1;
        }
        else if(viewableflex == 1){
            document.getElementById("navbar_user_visibility").style.display = "none";
            document.getElementById("user_ham_icon").innerHTML = "menu";
            document.getElementById("user_ham_icon").style.color = "#000000";
            viewableflex = 0;
        }
    }
}
function navbarlinkinghome(){
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth"
    })
}
function navbarlinkingabout(){
    document.getElementById("aboutsect").scrollIntoView({behavior:"smooth"});
}
function navbarlinkinghobbies(){
    document.getElementById("hobbiessect").scrollIntoView({behavior:"smooth"});
}
function navbarlinkinggames(){
    document.getElementById("gamessect").scrollIntoView({behavior:"smooth"});
}
function navbarlinkingsocials(){
    document.getElementById("socialssect").scrollIntoView({behavior:"smooth"});
}
function openlinks(ele){
    let variable = ele.getAttribute("data-linking");
    window.open(variable, '_blank');
}