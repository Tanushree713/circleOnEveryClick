function createCircle(event) {


    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    document.getElementById("container").appendChild(circle);
    
  }
  