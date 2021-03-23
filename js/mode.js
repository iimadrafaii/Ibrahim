// Check if there's Local Storage Color Option
let darkColors = localStorage.getItem("W-Color");
let lightColors = localStorage.getItem("B-Color");
if (lightColors !== null) {
    document.documentElement.style.setProperty('--W-color', darkColors);
    document.documentElement.style.setProperty('--B-color', lightColors);

    // Remove class active from li colors
    document.querySelectorAll(".mode-list i").forEach(element => {
        element.classList.remove("active");

        // Add active class on elements with data-Color === Local storage Item  
        if (element.dataset.colors === darkColors) {

            // Add class active
            element.classList.add('active');

        }
    });


}


/* Switch Colors START */
const modeLi = document.querySelectorAll(".mode-list i");
// Loop On All List Items
modeLi.forEach(li => {

    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set main Color On Root
        document.documentElement.style.setProperty('--W-color', e.target.dataset.colors);

        //Set hover color On Root
        document.documentElement.style.setProperty('--B-color', e.target.dataset.bg);

        //Set colors On Local Stotage
        localStorage.setItem("W-Color", e.target.dataset.colors);

        //Set hover colors On Local Stotage
        localStorage.setItem("B-Color", e.target.dataset.bg);


        // Remove class active from li colors
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add active on self
        e.target.classList.add("active");

    });
});

/* Switch Colors END */