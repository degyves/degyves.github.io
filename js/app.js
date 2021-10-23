var scrollersStyleDisplay = null;
var displayToggle = 'block';
var tagCloudToggle = 'inline';

var onClickFieldsOfInterest = function(){
    console.log("displayToggle: "+displayToggle);
    var fields = document.getElementById('fieldsOfInterest');
    if( fields.style.display == 'none'){
        displayToggle = 'block';
    }else{
        displayToggle = 'none';
    }
    fields.style.display = displayToggle;
    console.log("displayToggle: "+displayToggle);
}

var onClickTagCloud = function(){
    var tagCloud = document.getElementById('tagCloud');
    var imgTagCloud = document.getElementById('imgTagCloud');
    //console.log("data-src: "tagCloud.data-src);
    imgTagCloud.src = imgTagCloud.getAttribute("data-src");
    if( tagCloud.style.display == 'none'){
        tagCloudToggle = 'inline';
    }else{
        tagCloudToggle = 'none';
    }
    tagCloud.style.display = tagCloudToggle;
    console.log("tagCloudToggle: "+tagCloudToggle);
}

var openTagCloud = function(){
    url = 'images/original/tagcloud.png';
    img = '<img src="'+url+'">';
    popup = window.open();
    popup.document.write(img);                        
    popup.print();
}

function swipe() {
   var largeImage = document.getElementById('tagCloud');
   largeImage.style.display = 'block';
   largeImage.style.width=200+"px";
   largeImage.style.height=200+"px";
   var url=largeImage.getAttribute('src');
   window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}


document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        scrollersStyleDisplay = document.querySelector('.scrollers').style.display;
        resizeCards();
    }
});

var resizeCards = function () {
    var width = screen.width * 0.9
    Array.from(
    document.querySelectorAll('.cards') ).map( card =>
        card.setAttribute('style',' \
        padding: 1rem; \
        display: grid; \
        grid-template-columns: repeat(auto-fit, minmax('+width+'px, 1fr)); \
        grid-gap: 1rem;')
    );
}

document.onscroll = function() {
    if (window.innerHeight + window.scrollY >=
        (document.body.scrollHeight -5)
    ) {
        document.querySelector('.scrollers').style.display='none';
    }else{
        document.querySelector('.scrollers').style.display=scrollersStyleDisplay;
    }
}




