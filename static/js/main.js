const nav_about = document.getElementById('nav-about');
const nav_skills = document.getElementById('nav-skills');
const nav_work = document.getElementById('nav-work');
const nav_experience = document.getElementById('nav-experience');
const nav_contact = document.getElementById('nav-contact');


const about = document.getElementById('about');
const skills = document.getElementById('skills');
const work = document.getElementById('work');
const experience = document.getElementById('experience');
const contact = document.getElementById('contact');

console.log(nav_about);
console.log(nav_skills);
console.log(nav_work);
console.log(nav_experience);
console.log(nav_contact);

$(nav_about).click(function() {
    $('html,body').animate({ scrollTop: $(about).offset().top }, 'fast');
});

$(nav_skills).click(function() {
    $('html,body').animate({ scrollTop: $(skills).offset().top }, 'fast');
});

$(nav_work).click(function() {
    $('html,body').animate({ scrollTop: $(work).offset().top }, 'fast');
});

$(nav_experience).click(function() {
    $('html,body').animate({ scrollTop: $(experience).offset().top }, 'fast');
});

$(nav_contact).click(function() {
    $('html,body').animate({ scrollTop: $(contact).offset().top }, 'fast');
});

function downloadResume() {
    window.open('/downloaded/CV_Andrii_Demchenko.pdf');
}

