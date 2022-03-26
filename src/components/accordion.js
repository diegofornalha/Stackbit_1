export default function accordion(props) {
    return (
        <section>
            <accordion />
        </section>
    )
}

import React from 'react'



const acc = document.getElementsByClassName("accordion");
const i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    return(
        <div> 
        <button class="accordion">Section 1</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    )
    });
}


