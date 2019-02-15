window.onscroll = function() {
    growShrinkLogo()
};

function growShrinkLogo() {
    var Logo = document.getElementById("psgLogo")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        Logo.style.height = '45px';                
        Logo.style.width = '33px';
    } else {
        Logo.style.height = '100px';                
        Logo.style.width = '75px';
    }
}