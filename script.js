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

function average(){
  let n1 = 0;//Sets the n values as placeholder 0s 
  let n2 = 0;
  let userenter = prompt("Do you have numbers that need averaging (y/n) ");//Queues up the call on the function

    while (userenter == "y"){
        let n = Number(prompt("How many numbers do you have to average? "));//Asks how many numbers they have to average, sets as n
        let ogn = n;//Makes ogn, which is the original n value
        while (n > 0){//while true, gains a new number, adds it value to n2, and reduces n
            n1 = Number(prompt("Give me a number: "));//Asks the user for the number
            n2 = n2 + n1;
            n = n - 1;
    }
        let average = (n2 / ogn);//Calculates the average
        userenter = "no longer";//Stops userenter, so that we don't get an infinite while loop
        return average;
   } 
   while (userenter == "n"){
    document.getElementById("average").innerHTML =
    "Well then, Bye, Bye, Bye, BYE BYE! - NSync"
    userenter = "no longer";//Stops userenter, so that we don't get an infinite while loop
   }
}
    while (userenter == "y"){
      document.getElementById("average").innerHTML =
      "The average is " +average+ "!";
    }