const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    }
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    });
});

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        scrollBtn.style.display="flex";
    }else{
        scrollBtn.style.display="none";
    }

});

scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{
        const sectionTop=section.offsetTop-150;

        if(window.scrollY>=sectionTop){
            current=section.getAttribute("id");
        }
    });

    navItems.forEach(link=>{
        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }
    });

    if(window.scrollY>50){
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
    }else{
        header.style.boxShadow="none";
    }

});

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".hero,.stat-card,.about-image,.about-content,.skill-card,.project-card,.timeline-item,.certificate-card,.contact-info,.contact-form").forEach(item=>{
    item.classList.add("hidden");
    observer.observe(item);
});
const roles=[
    "Electronics & Communication Engineer",
    "Frontend Developer",
    "Python Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

const typing=document.querySelector(".typing");

let roleIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

    const currentRole=roles[roleIndex];

    if(!deleting){
        typing.textContent=currentRole.substring(0,charIndex++);
    }else{
        typing.textContent=currentRole.substring(0,charIndex--);
    }

    let speed=100;

    if(!deleting && charIndex===currentRole.length+1){
        deleting=true;
        speed=1800;
    }

    if(deleting && charIndex===0){
        deleting=false;
        roleIndex=(roleIndex+1)%roles.length;
    }

    setTimeout(typeEffect,deleting?50:speed);
}

typeEffect();