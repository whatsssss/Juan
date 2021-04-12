const title = document.querySelector('#title');

const BASE_COLOR = "rgb(52, 73, 94)";
const ORTER_COLOR = "#7f8c8d";
function handleClick(){
    const currentColor =title.style.color;
    if(currentColor ===BASE_COLOR){
        title.style.color = ORTER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener('click',handleClick)
}
init();
