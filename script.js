$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

var typed = new Typed(".typing1", {
    strings: ["Nguyen Phuong Du", "Nguyen Dang Duc An"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing2", {
    strings: ["Youtuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})