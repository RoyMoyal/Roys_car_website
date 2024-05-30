 //חיפוש תמונות בגלריה
const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup",e =>{
    if(e.key=="Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){
                  return image.style.display = "block";
                }
                image.style.display = "none";
            });
    }
});

search.addEventListener("keyup",()=>{
    if(search.value != "") return;

    images.forEach(image =>{
        image.style.display="block";
    })
})

//אקטיב לגזרות
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//גלילה עם אנימציה
ScrollReveal({
    reset: true, 
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('', { origin: 'top' });

//about כיתוב רנדומלי
var typed = new Typed(".auto-type",{
    strings: ["Student" , "Boxer" , "CarLover"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

//home כיתוב רנדומלי 
var typed = new Typed(".auto-type1",{
    strings: ["Hello there!" , "Greetings!" , "whats up!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
