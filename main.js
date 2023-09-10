function transition(pressedBox) {
    const element = "#" + pressedBox;
    let x =          document.querySelector(element);
    x.style.transform = "scale(1.2)";
    x.style.transition = "all 0.5s ease-out";
    setTimeout(function(){
          x.style.transform = "scale(1)";
      }, 200);
  }
  
  function colorToggle() {
    let container = document.querySelector(".container");
    const pressedBox = event.target.id;
    switch(pressedBox) {
      case "red":
        container.style.
        backgroundColor="red";
        transition(pressedBox);
        break;
      case "blue":
        container.style.
        backgroundColor="blue";
        transition(pressedBox);
        break;
      case "green":
        container.style.
        backgroundColor="green";
        transition(pressedBox);
        break;
      case "pink":
        container.style.
        backgroundColor="pink";
        transition(pressedBox);
        break;
      default:
        container.style.
        backgroundColor="#212121";
        transition(pressedBox);
    }
  }
  