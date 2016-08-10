

var sonnetDiv = document.getElementById("sonnet").innerHTML;

console.log("Original sonnet: ",sonnetDiv);

var startingPosition = sonnetDiv.indexOf("orphans");
console.log("Starting position of orphans: ",sonnetDiv.indexOf("orphans"));



if(startingPosition === 422) {
  console.log("Hey there! This is an 'if' that's doing the same thing as the switch below.");
}


switch (startingPosition) {
  case 415 :
  case 419 :
  case 422 :
    console.log("Hey there! This is a 'switch'!");
    break;  // ALWAYS END A CASE IN A BREAK!!! //

  case 421 :
    console.log ("THIS IS WRONG!");
    break;  // If the break isn't put in these cases, it will run all of these cases and return everything //

  default :
    console.log("default output");
    break;  // Cases "fall through" when there are not Breaks //
}

switch (true) {
  case startingPosition > 410 :
    console.log("oooh, look! another switch");
    break;
  case startingPosition < 500 :
    console.log("let's try this too!")
    break;
  default :
    console.log("default output")
    break;
}

console.log("Number of characters in sonnet: ",sonnetDiv.length)

console.log("replace first 'winter'",sonnetDiv.replace("winter","yuletide"));

console.log("global replace 'the'",sonnetDiv.replace(/ the /g," a large "));

//g will take care of "the"... gi will take care of case sensitivity...The, tHe, thE, ThE, etc.//

var sonnetDiv = sonnetDiv.replace("winter","yuletide").replace(/ the /gi," a large ");

document.getElementById("sonnet").innerHTML = sonnetDiv;

//You can also substitue stuff that you've been reusing. for example:        //
//var sonnet = document.getElementById("sonnet") ... so now you can write:  //
//sonnet.innerHTML = sonnetDiv would do the same as the last line          //

///////////////////////////////////////////////////////////////////////////////////////////
console.log("Ok, now the sonnet lesson is more than done. Moving on!")

console.log("Now we will experiment with other items, starting with arrays and for-loops:")
///////////////////////////////////////////////////////////////////////////////////////////

var myArray = ["first element",2,false,"last element"]
console.log("First type: ", typeof(myArray[0]));

for (var i = 0; i < myArray.length; i++) {  //i++ is just i += 1//
  console.log(i + ": ",typeof(myArray[i]));
}


for (var i = 0; i < 150; i += 10) {   //i += is very important. without =, it runs forever//
  console.log("current value :", i);
}


for (var i = 100; i > 2; i /= 2) {    //this says "i divided by 2"//
  console.log("current value :", i);
}


for (var i = 100; i > 2; i /= 2) {
  console.log("current value :", i);
  myArray.push(i);
}
console.log("myArray: ",myArray); //okay so all this shit added the return values into the Array//


for (var i = 100; i > 0; i--) { //can also be "i -= 1" I think//
  if(i % 2 == 0) {//if a number is evenly divisible by 2 equals even
    myArray.push(i);
  } else {
    myArray.unshift(i);
  }
  console.log("myArray on iteration: " + i +" : ",myArray);
}

// What the fuck is up with this last one. Look it up, understand it!!!!!!!! //



