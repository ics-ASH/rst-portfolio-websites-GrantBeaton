//Greeter program that starts based off of the user clicking buttons on the front end

function greeter() {
    let name = prompt("What's your name?");
    document.getElementById("greet").innerHTML =
    "Hi "+name+"!";
  }
  
  function food() {
    let fav = prompt("What's your favourite food?");
    document.getElementById("fav").innerHTML =
    "My favourite food is also "+fav+"!";
  }

  function house() {
    let house = prompt("What's your address?");
    document.getElementById("house").innerHTML =
    "Expect a delivery of your favourite food at "+house+"!";
  }
