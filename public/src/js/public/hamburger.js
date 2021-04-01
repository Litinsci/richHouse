document.querySelectorAll(".hamburger").forEach(wrap=>{
    // wrap.addEventListener('click', () => {
    //     wrap.childNodes[0].childNodes[0].classList.toggle("hamburger__line_left_active");
    //     wrap.childNodes[0].childNodes[1].classList.toggle("hamburger__line_none");
    //     wrap.childNodes[0].childNodes[2].classList.toggle("hamburger__line_right_active");
    // });
    wrap.onclick = () =>{
        wrap.childNodes[0].childNodes[0].classList.toggle("hamburger__line_left_active");
        wrap.childNodes[0].childNodes[1].classList.toggle("hamburger__line_none");
        wrap.childNodes[0].childNodes[2].classList.toggle("hamburger__line_right_active");
    }
});