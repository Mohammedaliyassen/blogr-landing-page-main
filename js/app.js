const navBar = document.querySelector('nav');
const intro = document.querySelector('intro');


window.onscroll= function(){
    if(window.pageYOffset > navBar.offsetHeight){
        navBar.style.cssText = 'background:linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
        console.log(navBar.offsetHeight)
    }else{
        navBar.style.cssText = 'background-color:transparent'
    }
}