"use strict";

//task 1 

function aStyle() {
    for (let e of Array.from(document.links)) {
        if (e.href.indexOf("http://") === 0) {
            e.style.cssText = "color: blue; textDecoration: none;"
        }
    }
}
aStyle()
//Task 2 
function show(e) {
    let elem = document.getElementById(e);
    elem.style.display = (elem.style.display === 'none') ? 'block' : 'none';
} 
