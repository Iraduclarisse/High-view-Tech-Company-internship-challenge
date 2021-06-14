var img = document.querySelectorAll('img');
//console.log("my pictures");
img[2].addEventListener('click',function(){

    var overlay= document.createElement('div')
    overlay.style.width = window.innerWidth + 'px';
    overlay.style.height = window.innerHeight + 'px';
    overlay.style.background= rgba(0,0,0,1);

    Document.body.appendChild(img);
}
);