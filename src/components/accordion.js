export default function accordion(props) {
    return (
        <section>
            <accordion />
        </section>
    )
}

import React from 'react'



const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


