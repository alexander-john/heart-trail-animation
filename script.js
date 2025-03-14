const body = document.querySelector("body");

body.addEventListener("mousemove", (event)=>{
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const size = Math.random() * 100;

    const span = document.createElement("span");
    span.style.left = xPosition + "px";
    span.style.top = yPosition + "px";
    span.style.width = size + "px";
    span.style.height = size + "px";
    body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
})