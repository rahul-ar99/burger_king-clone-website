document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    const navbar1 = document.getElementsByClassName('navbar-a')
    if (window.scrollY >500){
        // document.querySelectorAll('.navbar-a').style.color = "black"
        header.style.backgroundColor = "#fff"
        header.style.boxShadow = "0px -20px 50px 10px #111"
    }else{
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    }
})