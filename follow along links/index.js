


//grabbing all the links
const triggers = document.querySelectorAll("a");

//create a span element
const highlight = document.createElement("span");

//add class of highlight to span
highlight.classList.add("highlight");

//add span element to DOM
document.body.append(highlight);

//method
function highlightWork(e)
{
    //get the size info of trigger element   
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    //to compensate for the offset of highlight's position, create coords object for using it's properties
    const coords = {
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX
    };
        



    //set width and height of highlight as linkCoords( width and height) 
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;

    
}




//if mouse moves over triggers then call highlightWork method
triggers.forEach(function (trigger){
    trigger.addEventListener("mouseenter", highlightWork);
})
