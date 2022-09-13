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
 * Define Global Variables
 * 
*/
//variable to keep track of nav bar dynamically

const navBar=document.getElementById("navbar__list");


/** End Global Variables*/


/* Begin Main Functions
 * 
*/

// build the nav

const createItems = () =>{
    navBar.innerHTML ="";
    document.querySelectorAll("section").forEach((section) =>{
        const item =`<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navBar.insertAdjacentHTML("beforeend",item);



    });

};
// Add class 'active' to section when near top of viewport
const activeSection= () =>{
    const view =new IntersectionObserver(
        function(sec){
            sec.forEach((sec) => {
                let active = navBar.querySelector(`[data-nav=${sec.target.id}]`);
                if(sec.isIntersecting){
                    sec.target.classList.add("your-active-class");
                    active.classList.add("active-link");
                    location.hash=`${sec.target.id};`


                }
                else{
                    sec.target.classList.remove("your-active-class");
                    active.classList.remove("active-link");
                }
            });
        },
        {threshold:0.66,}
    );

return document.querySelectorAll('section').forEach((section) =>{
    view.observe(section);
});
};

// Scroll to anchor ID using scroll into view function on click event
navBar.addEventListener('click',(event) =>{
    event.preventDefault();
    if(event.target.dataset.nav){
        document.getElementById(event.target.dataset.nav).scrollIntoView({ behavior:"smooth" });
        

    }

} );

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createItems();
// Set sections as active
activeSection();