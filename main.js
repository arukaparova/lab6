
function math(){
  console.log("Function that finds a perimeter of the rectangle given by two sides:")
  sum =two();
  console.log(sum);

  console.log("Function that greets a person by his/her name:")
  text =(four());
  console.log(text);

  console.log("Function that returns the greatest among the given two numbers:")
  number =(thirteen());
  console.log(number);
}
//2. Write a function that finds a perimeter of the rectangle given by two sides.
function two() {
    let a = 4;
    let b = 9;
    sum = a + b;
    return sum;
}

//4. Write a function that greets a person by his/her name (e.g. “Hi, John!”).
function four() {
    var username = prompt("What is your name?");
    text = "Hello, " + username + "!";
    //println("Hello " + username + "!");
    return text;
}  

//13. Write a function that returns the greatest among the given two numbers.
function thirteen() {
    let x = 20;
    let y = 13;
    if (x < y) {
      number = y;
    } else {
      number = x;
    }  
    return number;
  }  

  
