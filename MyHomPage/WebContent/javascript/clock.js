/**
 * 
 */
let time = document.querySelector(".time");

function get_Clock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    const text = document.createTextNode(`${hour}:${minute}:${second}`);
    time.innerText = `${hour}:${minute}:${second}`;
}
get_Clock();
setInterval(get_Clock,1000);


