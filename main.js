let button = document.querySelector(".arrow"),
    links = document.querySelector(".nav-links");
     
    button.addEventListener("click",() => {
    links.classList.toggle("display");

    button.children[0].classList.toggle("toggle1");
    button.children[1].classList.toggle("toggle2");
    button.children[2].classList.toggle("toggle3");

})

window.addEventListener("scroll",function(){
    var container = document.querySelector(".container");
    container.classList.toggle("sticky",window.scrollY > 520);

})
