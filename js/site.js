//Get values from the input
//Controller function
function getValues (){

  //Get Buzz Value and Fizz Value
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //Parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //Check to see if inputted values are integers
  if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

    //Call fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    //Display result
    displayData(fbArray);

  } else {
    alert("Please use integers")
  }

}

//Generate values from start to end
//Logics
function fizzBuzz(fizzValue, buzzValue){

  let returnArray = [];

  //Create array with numbers from 1-100
  for (let i = 1; i <= 100; i++) {

    //Check for fizz and buzz Values
    if(i % fizzValue == 0 && i % buzzValue == 0) {

      returnArray.push('FizzBuzz');

    } else if (i % fizzValue == 0){
      returnArray.push('Fizz')

    } else if(i % buzzValue == 0){
      returnArray.push('Buzz')

    } else {
      returnArray.push(i);

    }    
  }

  return returnArray;

}

//Display results
//View
function displayData(fbArray){

  //Get table body
  let tableBody = document.getElementById("results");

  //Get the template itself
  let templateRow = document.getElementById("fbTemplate");

  //Clear table
  tableBody.innerHTML = "";

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    //Grab tb of the table and put into array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index +1]);
    rowCols[1].textContent = fbArray[index +1];

    rowCols[2].classList.add(fbArray[index +2]);
    rowCols[2].textContent = fbArray[index +2];

    rowCols[3].classList.add(fbArray[index +3]);
    rowCols[3].textContent = fbArray[index +3];

    rowCols[4].classList.add(fbArray[index +4]);
    rowCols[4].textContent = fbArray[index +4];

    tableBody.appendChild(tableRow);
    
  }

  //Add all rows to the table



}