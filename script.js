/*=========================================
  ELDORADO DIGITAL SOLUTION
  SCRIPT.JS PART 1
==========================================*/

// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() =>{

            loader.style.opacity="0";
            loader.style.visibility="hidden";

        },1200);

    }

});

// ==============================
// STICKY HEADER
// ==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

}

// ==============================
// CLOSE MENU WHEN LINK CLICKED
// ==============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

    nav.classList.remove("active");

});

});

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

// ==============================
// SCROLL TO TOP
// ==============================

const scrollTop=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

});

if(scrollTop){

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ==============================
// REVEAL ANIMATION
// ==============================

const revealElements=document.querySelectorAll(".reveal");

const revealOnScroll=()=>{

revealElements.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

item.classList.add("active");

}

});

};

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// ==============================
// FADE ANIMATION
// ==============================

const fadeItems=document.querySelectorAll(".fade");

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeItems.forEach(item=>{

fadeObserver.observe(item);

});

// ==============================
// ZOOM ANIMATION
// ==============================

const zoomItems=document.querySelectorAll(".zoom");

const zoomObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

zoomItems.forEach(item=>{

zoomObserver.observe(item);

});

// ==============================
// SLIDE LEFT
// ==============================

const slideLeft=document.querySelectorAll(".slide-left");

const slideLeftObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

slideLeft.forEach(item=>{

slideLeftObserver.observe(item);

});

// ==============================
// SLIDE RIGHT
// ==============================

const slideRight=document.querySelectorAll(".slide-right");

const slideRightObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

slideRight.forEach(item=>{

slideRightObserver.observe(item);

});

/*=========================================
  ELDORADO DIGITAL SOLUTION
  SCRIPT.JS PART 2
==========================================*/

// ==============================
// ANIMATED COUNTERS
// ==============================

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = Number(counter.dataset.target);
    const speed = 200;
    let count = 0;

    const update = () => {

        const increment = Math.ceil(target / speed);

        count += increment;

        if(count >= target){

            counter.innerText = target.toLocaleString();
            return;

        }

        counter.innerText = count.toLocaleString();

        requestAnimationFrame(update);

    };

    update();

};

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter(entry.target);
            counterObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// ==============================
// FAQ ACCORDION
// ==============================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const answer = button.nextElementSibling;

        faqButtons.forEach(item=>{

            if(item!==button){

                item.nextElementSibling.style.maxHeight = null;

            }

        });

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        const rect=button.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=(e.clientX-rect.left-size/2)+"px";
        ripple.style.top=(e.clientY-rect.top-size/2)+"px";

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// ==============================
// FLOATING EFFECT
// ==============================

const floatingCards=document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/40;
    const y=(window.innerHeight/2-e.clientY)/40;

    floatingCards.forEach(card=>{

        card.style.transform=`translate(${x}px,${y}px)`;

    });

});

// ==============================
// HERO IMAGE PARALLAX
// ==============================

const heroImage=document.querySelector(".profile-wrapper img");

window.addEventListener("scroll",()=>{

    if(heroImage){

        heroImage.style.transform=
        `translateY(${window.scrollY*0.08}px)`;

    }

});

// ==============================
// DASHBOARD BARS
// ==============================

const bars=document.querySelectorAll(".chart div");

const randomHeight=()=>{

bars.forEach(bar=>{

const height=Math.floor(Math.random()*80)+20;

bar.style.height=height+"%";

});

};

setInterval(randomHeight,2500);

// ==============================
// TYPING EFFECT
// ==============================

const typing=document.querySelector(".typing");

if(typing){

const words=[

"Shopify Expert",

"Ecommerce Developer",

"Conversion Specialist",

"Digital Partner"

];

let wordIndex=0;
let letterIndex=0;
let deleting=false;

const type=()=>{

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=currentWord.substring(0,letterIndex++);

if(letterIndex>currentWord.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=currentWord.substring(0,letterIndex--);

if(letterIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?60:100);

};

type();

}

// ==============================
// PREVENT EMPTY LINKS
// ==============================

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

// ==============================
// CURRENT YEAR
// ==============================

const year=document.querySelector("#year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================================
  ELDORADO DIGITAL SOLUTION
  SCRIPT.JS PART 3
==========================================*/

// ==============================
// CONTACT FORM VALIDATION
// ==============================

// ================================
// EMAILJS CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.disabled = true;
        button.textContent = "Sending...";

        emailjs.sendForm(
            "service_x32413o",
            "template_qb7mabk",
            this
        )

        .then(function () {

            alert("Message sent successfully!");

            contactForm.reset();

            button.disabled = false;
            button.textContent = "Send Message";

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("Failed to send message.");

            button.disabled = false;
            button.textContent = "Send Message";

        });

    });

}

// ==============================
// EMAIL VALIDATION
// ==============================

const emailField = document.querySelector("#email");

if(emailField){

emailField.addEventListener("blur",()=>{

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailField.value!==""){

if(!emailPattern.test(emailField.value)){

emailField.style.borderColor="red";

}else{

emailField.style.borderColor="#00e676";

}

}

});

}

// ==============================
// BUTTON HOVER GLOW
// ==============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

// ==============================
// IMAGE LAZY LOADING
// ==============================

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

// ==============================
// SECTION HIGHLIGHT
// ==============================

const sectionsHighlight=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sectionsHighlight.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-150){

section.classList.add("active");

}

});

});

// ==============================
// SIMPLE PAGE LOADER
// ==============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
"%cEldorado Digital Solution",
"color:#00e676;font-size:20px;font-weight:bold;"
);

console.log(
"%cWebsite Developed Successfully",
"color:#38bdf8;font-size:14px;"
);

// ==============================
// END
// ==============================

