/*!
 * injectsvg v1.0: Inject simple svg code where svg image is found
 * (c) 2018 Jaber Ibne Mahboob
 * MIT License
 * http://github.com/jaberibnemahboob/injectsvg
 */
document.querySelectorAll('.injectsvg').forEach(function(imgItem){
    let elem;
    let imgUrlProtocol="";
    if(imgItem.nodeName.toLowerCase() == 'img' && imgItem.src != ""){
        imgUrlProtocol = getUrlProtocol(imgItem.src);
        if(imgUrlProtocol == "http:" || imgUrlProtocol == "https:"){
            fetch(imgItem.src).then(function(response){
                return response.text();
            }).then(function(svgTxt){
                elem = document.createElement('div');
                elem.setAttribute('class',imgItem.classList.value);
                elem.innerHTML = svgTxt;
                imgItem.parentNode.insertBefore(elem,imgItem);
                imgItem.parentNode.removeChild(imgItem);
            });
        }
    }else console.log(imgItem.nodeName);
});

function getUrlProtocol(url){
    if(url.indexOf("https") === 0) return "https:";
    else if(url.indexOf("http") === 0) return "http:";
    else return (window.location.protocol || document.location.protocol);
}
