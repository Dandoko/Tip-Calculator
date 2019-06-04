var list = []; //declared var list as an array

function randomServiceGenerator(){

  var number = Math.floor(Math.random() * 5);    // This is the math library where the random integers are generated from 0 to 5

  switch (number) {
    case 0:
  	 return 'very bad';
    break;

    case 1:
    	return 'bad';
    break;

    case 2:
    	return 'okay';
    break;

    case 3:
    	return 'good';
    break;

    case 4:
    case 5: //fall through switch statement
    	return 'very good';     //Case 5 was added to increase the probability of resulting in "very good"
    break;

    default:
    	return 'error';
    break;
  }

}

function randomService(){

  var service = randomServiceGenerator();
  var tipAmount;

  if (service === "very bad"){
    tipAmount = 0;
  } else if (service === "bad"){
    tipAmount = 5;
  } else if (service === "okay"){
    tipAmount = 10;
  } else if (service === "good"){
    tipAmount = 15;
  } else {
    tipAmount = 20;
  }

  document.getElementById("tipPercentage").value = tipAmount //Makes the tipPercentage text box to be equal to the random tip amount generated
  alert("Your service was " + service + ". Recommended tip is " + tipAmount + "%.");

}

function calculatingBills(){ //function calculatingBills
  var bill = Number(document.getElementById("billAmount").value); //declared var bill as the value of text box
  var tip = Number(document.getElementById("tipPercentage").value); //declared var tip as the value of text box

  if (isNaN(bill) || isNaN(tip) || bill === 0){
    alert("Please type in numbers.");
  } else {
    var billTotal = ((tip/100)*bill) + bill;

    list.push(billTotal); //added the inputted billTotal into the array

    alert("Your total bill is $" +  billTotal + ". Press 'ok' and type in another bill amount."); //alerts what has been added
  }
}

function removingBills(){ //function removingBills

  if (list.length === 0){
    alert("There are no bills in your list");
  } else {
    list.pop(); //removes the last bill total that's been inputted

    alert("The last bill has been removed. Press 'ok' and type in another amount."); //alerts that a bill total has been removed
  }
}

function everything(){ //function everything

  if (list.length === 1){ //if statement to check if the array only has 1 element+
    alert("There is " + list.length + " bill(s) in your list."); //alerts that there is only 1 element
  } else { //else statement for more than 1 word
    alert("There are " + list.length + " bills in your list."); //alerts how many bills are in the array
  }

  document.getElementById("ok").innerHTML = ""; //use of span to make the result print out on the same screen

  for (var i = list.length-1; i >=0; --i){ //for loop to check the number of bills in the list
    document.getElementById("ok").innerHTML += "<br>$" + list[i]; //prints out all the bills
  }

}
