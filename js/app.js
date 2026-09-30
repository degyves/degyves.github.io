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
    }
});

document.onscroll = function() {
    if (window.innerHeight + window.scrollY >=
        (document.body.scrollHeight -5)
    ) {
        document.querySelector('.scrollers').style.display='none';
    }else{
        document.querySelector('.scrollers').style.display=scrollersStyleDisplay;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tabs = Array.from(document.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    function activateTab(tab, moveFocus) {
        tabs.forEach(function(item) {
            var selected = item === tab;
            item.setAttribute('aria-selected', selected);
            item.tabIndex = selected ? 0 : -1;
            document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
        });
        if (moveFocus) tab.focus();
    }

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            activateTab(tab, false);
        });
        tab.addEventListener('keydown', function(event) {
            var nextIndex;
            if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
            else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
            else if (event.key === 'Home') nextIndex = 0;
            else if (event.key === 'End') nextIndex = tabs.length - 1;
            else return;
            event.preventDefault();
            activateTab(tabs[nextIndex], true);
        });
    });
});


