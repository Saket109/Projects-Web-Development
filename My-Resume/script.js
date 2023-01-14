var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(let i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        
        interval = setInterval(()=>{
            scrollVertically(targetSectionId);
        },20);
    });
};


function scrollVertically(targetSectionId){
    var targetSection = document.getElementById(targetSectionId);
    var coordinates = targetSection.getBoundingClientRect();
    if(coordinates.top<=0){
        clearInterval(interval);
        return;
    }else if(targetSectionId == "contact"){
        if(coordinates.top<=140){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }else{
        window.scrollBy(0,50);
    }
}