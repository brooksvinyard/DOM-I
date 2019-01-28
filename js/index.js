const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//nav
const navQuery = document.querySelectorAll('header nav a');

navQuery[0].textContent = siteContent.nav["nav-item-1"];
navQuery[1].textContent = siteContent.nav["nav-item-2"];
navQuery[2].textContent = siteContent.nav["nav-item-3"];
navQuery[3].textContent = siteContent.nav["nav-item-4"];
navQuery[4].textContent = siteContent.nav["nav-item-5"];
navQuery[5].textContent = siteContent.nav["nav-item-6"];
navQuery.forEach( element => {element.style.color = "green"});

// adding two new menus to the nav bar
const navMenu = document.querySelectorAll('header nav');

const newMenu1 = document.createElement("a");
newMenu1.textContent = "Blog";  
navMenu[0].appendChild(newMenu1);

const newMenu2 = document.createElement("a");
newMenu2.textContent = "HOME";  
navMenu[0].prepend(newMenu2);


//CTA
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

//Main Content
document.querySelectorAll('.top-content .text-content h4')[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll('.top-content .text-content p')[0].textContent = siteContent["main-content"]["features-content"];

document.querySelectorAll('.top-content .text-content h4')[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll('.top-content .text-content p')[1].textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelectorAll('.bottom-content .text-content h4')[0].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll('.bottom-content .text-content p')[0].textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll('.bottom-content .text-content h4')[1].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll('.bottom-content .text-content p')[1].textContent = siteContent["main-content"]["product-content"];
document.querySelectorAll('.bottom-content .text-content h4')[2].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll('.bottom-content .text-content p')[2].textContent = siteContent["main-content"]["vision-content"];

//Contact
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];
const contactQuery = document.querySelectorAll('.contact p');
contactQuery[0].textContent = siteContent.contact["address"];
contactQuery[1].textContent = siteContent.contact["phone"];
contactQuery[2].textContent = siteContent.contact["email"];

//Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;

