



//grab all the links
const triggers = document.querySelectorAll('a');

//making span element
const highlight = document.createElement("span");

//adding class of  to span
highlight.classList.add("highlight");

//put it in DOM
document.body.append(highlight);

function highlightLink()
{

    const linkCords = this.getBoundingClientRect();
    console.log(linkCords);

    const coords = { 
        width : linkCords.width,
        height : linkCords.height,
        top: linkCords.top + window.scrollY,
        left: linkCords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px`;

}


//if mouseEnter the trigger, call highlightLink
triggers.forEach(function (trigger){
    trigger.addEventListener("mouseenter", highlightLink)
})