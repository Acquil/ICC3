window.onscroll = function() {
    growShrinkLogo()
};

function growShrinkLogo() {
    var Logo = document.getElementById("psgLogo")
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        Logo.style.height = '45px';
        Logo.style.width = '33px';
    } else {
        Logo.style.height = '90px';
        Logo.style.width = '66px';
    }
}
