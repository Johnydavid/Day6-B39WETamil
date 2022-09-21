// 1.  Find the culprit

alert( "I'm JavaScript!")

// ----------------------------------------------

// 2.  Find the culprit and invoke the alert

alert("I'm invoked!")

// ---------------------------------------------
// 3.  Explain the below how it works

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

// ----------------------------------------------------------
// 4. Fix the below to alert Guvi geek

var admin=9, fname = 10.5; 
fname = "Guvi ";
lname = "geek"
admin = fname+lname;
alert( admin );
 // "Guvi geek"

 // -----------------------------------------------

//  5. Fix the below to alert hello Guvi geek

var fname = 10.5;
fname = "Guvi ";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );

 // -------------------------------------------------------

// 6.  Fix the below to alert sum of two numbers

var a = Number(prompt("First number?"));
let b = Number (prompt("Second number?"))
alert(a+b);

 // ---------------------------------------------------

// 7.  If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


 // -----------------------------------------------------

// 8.  How to get the success in console.

var a =  Number(prompt("Enter a number?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// -------------------------------------------------------------
// 9.  How to get the correct score in console.

let value = Number(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


// // // --------------------------------------------------------------------------

// 10.  Fix the code to welcome the Employee

let login = prompt("Enter Login Credential");
var message = (login == 'Employee');

if (login == 'Employee'){
    console.log(`Greetings ${login}`);
}
  else if (login == 'Director'){
    console.log(`${login}`);
  }
  else if
  (login == '') {
    console.log('No login' );
  }
  
console.log(message);


// // ---------------------------------------------------------

// 11.  Fix the code to welcome the boss

var message ;


if (message = null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);


// // // ---------------------------------------------------------

// 12.  Fix the code to welcome the boss

var message ;
var lock = 0;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);


// // // ----------------------------------------------------------------

// 13.  Fix the code to welcome the boss

var message;
var lock = 0;

//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


// // // --------------------------------------------------------------------

// 14.  Change the code to print

// // // //You can change only 2 characters
let i = 3;
while (i>0) {
  console.log(i--);
}

// // // ------------------------------------------

// 15.  Change the code to print 1 to 10 in 4 lines
var num = 10;

for(i = 1; i<=num; i++){
    console.log(i);
}


 // ------------------------------------------------
// 16.  Change the code to print even numbers

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
    if (num%2 == 0){
        console.log(num);
    }
}


// // // ----------------------------------------------------------

// 17.  Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];

  console.log(`Wrapped ${gifts} and added a bow!`);


// // // ------------------------------------------------------------

// 18.  Fix the code to disarm the bomb.

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}


// // // ------------------------------------------------------------------------------------

// 19.  Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);



// --------------------xxxxxxxxxx-----------------------
















