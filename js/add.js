/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list')
const section = Array.from(document.querySelectorAll('section'))
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem(){
    for(sections of section ){
    listItem =document.createElement('li')
    listItem.innerHTML = `<li><a href = '#${sections.id}' data-nav = "${sections.id}" class ="menu__link">${sections.dataset.nav}</a></li>`
    navBar.appendChild(listItem)
}
}
createListItem();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
window.onscroll = function (){
    document.querySelectorAll('section').forEach(function (active) {
        // Add class 'active' to section when near top of viewport

    if (
        active.getBoundingClientRect().top >= -400 &&
        active.getBoundingClientRect().top <= 150 
    ) {
        active.classList.add("your-active-class")
    }else {
        active.classList.remove("your-active-class")
 
    }    
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Scroll to anchor ID using scrollTO event

 navBar.addEventListener('click', (toSections) =>{
    toSections.preventDefault();
    if (toSections.target.dataset.nav){
        document
        .getElementById(`${toSections.target.dataset.nav}`)
        .scrollIntoView({behavior : "smooth"})
        setTimeout(() =>{
            Location.hash = `${toSections.target.dataset.nav}`
        },170)
    }
 })






// build the nav







// Build menu 

// Scroll to section on link click

// Set sections as active
