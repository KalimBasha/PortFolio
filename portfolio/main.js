// Toggle Icon Navbar

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('ative');
}

// Scroll Section Active Link

let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    Sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // Remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}