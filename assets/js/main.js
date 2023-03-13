/*=============== Show Menu =============== */
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');


    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');


    });
}
/*=============== Remove Menu Mobile=============== */
const navLink=document.querySelectorAll('.nav__link');
function linAction(params) {
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linAction));

/*=============== Active Link =============== */
const navlink= document.querySelectorAll('.nav__link');
function activeLink(){
    linkWork.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click',activeLink)); 




/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300,
    },
});
/*=============== Testimonials Swiper =============== */
/*=============== Active Work =============== */
const linkWork= document.querySelectorAll('.category__btn');
function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click',activeWork)); 

/*=============== Contact form =============== */
const contactForm=document.getElementById('contact-form'),
contactName=document.getElementById('contact-name'),
contactEmail=document.getElementById('contact-email'),
Message=document.getElementById('message')
contactMessage=document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //Chef element
    if ( 
        contactName.value==='' || contactEmail==='' || Message.value===''
    ){
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message 
        contactMessage.textContent='Write all the input fiels'
    } else{
        emailjs.sendForm('service_9eo5rpl','template_5jbf65i','#contact-form', 'g-Nemp5YM__1Z92LI')
        .then(
            () =>{
                //emoji .
                contactMessage.classList.add('color-light');
                contactMessage.textContent='Message sent ✅' 

                //remove message after 5 s
                setTimeout(() =>{
                    contactMessage.textContent='';

                },5000);
            },(error) => { alert('Something went wrong',error);
            
            }) ;
            contactName.value='';
            contactEmail.value='';
            Message.value='';
    }
};

contactForm.addEventListener('submit',sendEmail);


/*=============== Background Header =============== */
function scrollHeader() {

    const header=document.getElementById('header');
//when scroll > 50 viewport height , add the scroll header class to header tag
if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');

    
}
window.addEventListener('scroll',scrollHeader);

/*=============== Style Switcher =============== */
const styleSwitcherToggle=document.querySelector('.style__switcher-toggler');
styleSwitcher=document.querySelector('.style__switcher');
styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});


//hide switcher on scroll

window.addEventListener('scroll',() => {
    if(styleSwitcher.classList.contains('open')){
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyles=document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if (color===style.getAttribute('title')){
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled','true');
        }
    })
}
