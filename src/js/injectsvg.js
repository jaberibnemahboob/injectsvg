/*!
 * injectsvg v1.0: Inject simple svg code where svg image is found
 * (c) 2018 Jaber Ibne Mahboob
 * MIT License
 * http://github.com/jaberibnemahboob/injectsvg
 */
document.querySelectorAll('.injectsvg').forEach(function(imgItem){
    let elem;
    console.log(imgItem);
    if(imgItem.nodeName.toLowerCase() == 'img'){
        fetch(imgItem.src).then(function(response){
            return response.text();
        }).then(function(svgTxt){
            elem = document.createElement('div');
            elem.setAttribute('class',imgItem.classList.value);
            elem.innerHTML = svgTxt;
            imgItem.parentNode.insertBefore(elem,imgItem);
            imgItem.parentNode.removeChild(imgItem);
        });
    }else console.log(imgItem.nodeName);
});
