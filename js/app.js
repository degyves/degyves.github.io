var containerStyleDisplay = null;

document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        containerStyleDisplay = document.querySelector('.container').style.display;
    }
});


document.onscroll = function() {
    if (window.innerHeight + window.scrollY >=
        (document.body.scrollHeight -5)
    ) {
        document.querySelector('.container').style.display='none';
    }else{
        document.querySelector('.container').style.display=containerStyleDisplay;
    }
    console.log("");
}
