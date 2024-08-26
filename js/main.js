// ====== Show And Hide Nav-Bar ======
const openIcon = document.querySelector('.fa-bars');
const openUl = document.querySelector('nav ul');
openIcon.addEventListener('click' , ()=>{
    openUl.classList.toggle('show');
});

// ====== Change Nav Bar Color In Scroll ======
const navBar = document.querySelector("header nav");
window.addEventListener("scroll" , ()=>{
    if(scrollY >= 55) {
        navBar.classList.add("change-color");
    }else {
        navBar.classList.remove("change-color");
    }
})

// ====== Change Nav Bar Links Colors ======
const links = document.querySelectorAll("nav ul li a");
const homeLink = document.querySelector(".homeLink");
const aboutLink = document.querySelector(".aboutLink");
const servicesLink = document.querySelector(".servicesLink");
const skillsLink = document.querySelector(".skillsLink");
const projectLink = document.querySelector(".projectLink");
const contactLink = document.querySelector(".contactLink");

window.addEventListener("scroll" , ()=>{
    if(scrollY >= -5 && scrollY <= 600) {
        links.forEach((allLinks)=>{
            homeLink.classList.add("active");
            allLinks.classList.remove("active");
        });
    } else if (scrollY >= 600 && scrollY <= 1200) {
        links.forEach((allLinks)=>{
            aboutLink.classList.add("active");
            allLinks.classList.remove("active");
        });
    } else if (scrollY >= 1200 && scrollY <= 1800) {
        links.forEach((allLinks)=>{
            servicesLink.classList.add("active");
            allLinks.classList.remove("active");
        });
    } else if (scrollY >= 1800 && scrollY <= 2200) {
        links.forEach((allLinks)=>{
            skillsLink.classList.add("active");
            allLinks.classList.remove("active");
        });
    } else if (scrollY >= 2200 && scrollY <= 3900) {
        links.forEach((allLinks)=>{
            projectLink.classList.add("active");
            allLinks.classList.remove("active");
        });
    }
    else if (scrollY >= 3900 ) {
        links.forEach((allLinks)=>{
            allLinks.classList.remove("active");
            contactLink.classList.add("active");
        });
    }
})

// ====== Arrow Back Up ======
const backUp = document.querySelector(".back-up");
window.addEventListener("scroll", () => {
  if (scrollY >= 250) {
    backUp.style.right = "15px";
  } else {
    backUp.style.right = "-40px";
  }
});
backUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== Auto Write Words ======
let x = 0;
const autoWrite = document.querySelector(".auto-write");
const autoWriteFn = () => {
  const title = "Frontend Developer.";
  autoWrite.innerHTML = title.slice(0, x);
  x++;
  if (title.length < x) {
    x = 1;
  }
};
const SetIntervalAutoWrite = setInterval(autoWriteFn, 300);

// ====== Light Mode ======
const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
lightMode.addEventListener("click" , ()=>{
    lightMode.style.display = "none";
    darkMode.style.display = "block";
    document.querySelector('nav').style.background = "#f3f3f3";
    document.querySelector('header').style.background = "#f3f3f3";
    document.querySelector('.about').style.background = "#f3f3f3";
    document.querySelector('.services').style.background = "#f3f3f3";
    document.querySelector('.skills').style.background = "#f3f3f3";
    document.querySelector('.projects').style.background = "#f3f3f3";
    document.querySelector('.contact').style.background = "#f3f3f3";
    document.querySelector('.copyright').style.background = "#f3f3f3";
    document.querySelectorAll('nav li a').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelector('#light-mode').style.color = "#27272a";
    document.querySelector('#dark-mode').style.color = "#27272a";
    document.querySelector('header').style.borderBottomColor = "#ccc";
    document.querySelector('.about').style.borderBottomColor = "#ccc";
    document.querySelector('.services').style.borderBottomColor = "#ccc";
    document.querySelector('.skills').style.borderBottomColor = "#ccc";
    document.querySelector('.projects').style.borderBottomColor = "#ccc";
    document.querySelector('.contact').style.borderBottomColor = "#ccc";
    document.querySelector('header nav .icon p').style.color = "#27272a";
    document.querySelector('header nav ul li a.active').style.color = "#0075ff";
    document.querySelector('header .content .main h3').style.color = "#27272a";
    document.querySelector('header .content .main h4').style.color = "#27272a";
    document.querySelector('header .content .main h5').style.color = "#777";
    document.querySelector('header .content .main p').style.color = "#777";
    document.querySelectorAll('header .content .main .icons i').forEach((e)=>{e.style.color = "#444"});
    document.querySelector('.about .image img').setAttribute("src" , "images/light.jpg");
    document.querySelector('.about .image img').style.borderColor = "#ccc"; 
    document.querySelector('.about .main h2').style.color = "#27272a";
    document.querySelector('.about .main h3').style.color = "#27272a";
    document.querySelector('.about .main p').style.color = "#777";
    document.querySelector('.services .main').style.color = "#27272a";
    document.querySelectorAll('.services .items .item').forEach((e)=>{e.style.borderColor = "#ccc"});
    document.querySelectorAll('.services .items .item i').forEach((e)=>{e.style.background = "#fff"});
    document.querySelectorAll('.services .items .item i').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelectorAll('.services .items .item h2').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelectorAll('.services .items .item p').forEach((e)=>{e.style.color = "#777"});
    document.querySelector('.skills .main').style.color = "#27272a";
    document.querySelectorAll('.skills .boxs .box').forEach((e)=>{e.style.borderColor = "#ccc"});
    document.querySelectorAll('.skills .boxs .box .image .layer').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelector('.projects .main').style.color = "#27272a";
    document.querySelectorAll('.projects .boxs .box').forEach((e)=>{e.style.borderColor = "#ccc"});
    document.querySelectorAll('.projects .boxs .box .info p').forEach((e)=>{e.style.color = "#777"});
    document.querySelectorAll('.projects .boxs .box .image .layer a').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelectorAll('.projects .boxs .box .image .layer .code').forEach((e)=>{e.style.background = "#f3f3f3"});
    document.querySelectorAll('.projects .boxs .box .image .layer .eye').forEach((e)=>{e.style.background = "#f3f3f3"});
    document.querySelector('.contact .main').style.color = "#27272a";
    document.querySelector('.contact .main-contact .contact-me').style.background = "#f3f3f3";
    document.querySelector('.contact .main-contact .contact-me').style.borderColor = "#ccc";
    document.querySelectorAll('.contact .main-contact .contact-me ul li .info p:first-child').forEach((e)=>{e.style.color = "#0c9"});
    document.querySelectorAll('.contact .main-contact .contact-me ul li .info p').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelector('.contact .main-contact .contact-me h2').style.color = "#27272a";
    document.querySelectorAll('.contact .main-contact .contact-me ul li .info p:first-child').forEach((e)=>{e.style.color = "#0075ff"});
    document.querySelector('.contact .main-contact .forms').style.background = "#fff";
    document.querySelector('.contact .main-contact .forms').style.borderColor = "#ccc";
    document.querySelector('.contact .main-contact .forms textarea').style.background = "#f3f3f3";
    document.querySelectorAll('.contact .main-contact .forms .two input').forEach((e)=>{e.style.background = "#f3f3f3"});
    document.querySelectorAll('.contact .main-contact .forms input').forEach((e)=>{e.style.background = "#f3f3f3"});
    document.querySelectorAll('.contact .main-contact .contact-me ul li i').forEach((e)=>{e.style.color = "#fff"});
    document.querySelectorAll('.contact .main-contact .contact-me ul li i:hover').forEach((e)=>{e.style.color = "#27272a"});
    document.querySelector('.contact .main-contact .forms button').style.color = "#fff";
    document.querySelector('.copyright').style.color = "#27272a";
    document.querySelector('.back-up i').style.color = "#fff";
    document.querySelector('header nav ul').style.background = "#f3f3f3";
    document.querySelector('header nav ul').style.borderColor = "#ccc";
});
darkMode.addEventListener("click" , ()=>{
    location.reload();
});






