// Solution for second iteration of All the Wizards!

// const unorderedListElement = document.createElement("ul");
// unorderedListElement.id = "list";
// document.body.appendChild(unorderedListElement);
// const unorderedList = document.getElementById("list");
/*
const harry = {
  firstName: "Harry",
  lastName: "Potter",
  hairColor: "black",
};
*/
// const hermione = {
//   firstName: "Hermione",
//   lastName: "Granger",
//   hairColor: "brown",
// };

// const ron = {
//   firstName: "Ron",
//   lastName: "Weasley",
//   hairColor: "red",
// };

// const allWizards = [harry, hermione, ron];
// console.log(allWizards);

// const renderAllTheWizards = (allWizards) => {
//   allWizards.forEach(({ firstName, lastName, hairColor }) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${firstName} ${lastName}`;
//     listItem.style.cssText = `color: ${hairColor}`;
//     unorderedList.appendChild(listItem);
//   });
//   // For each wizard, construct a list item with the correct font color, corresponding to the wizard's hair color
//   // Add the list item to the unordered list with the id 'list'
// };
// renderAllTheWizards(allWizards);

// // Creating a button element and adding an onClick
// // listerner which runs the above function
// const buttonElement = document.createElement("button");
// buttonElement.textContent = "Press me!";

// buttonElement.onclick = () => {
//   renderAllTheWizards(allWizards);
// };
// document.body.appendChild(buttonElement);

// BOOM extra description
/*
      40 
     + -
    {BOOM!}

    [input input] [button to update input value]
    [limit input] [button to update limit value]

    1. Pressing + by default incremenets by 5
      - Updating input changes this increment count (e.g. inputing 3, results in +/- 3)
    2. Going above 35 displays the BOOM! tag
      - Updating limit input reflects the limit required to display BOOM

*/

// Input example
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");

// buttonElement.onclick = () => {
//   // Input element value accessible within
//   // an onClick listener function
//   console.log(inputElement.value);
// };

// const handleClickToGetInputValue = () => {
//   console.log(inputElement.value);
// };

// buttonElement.onclick = handleClickToGetInputValue;

let counter = 0;
let limit = 35;
let numberChange = 5;

/*
if(counter>limit ){ // OR LESS THAN
  // display boom message
}

*/

// localStorage.setItem("foo", "bar");

// const ten = 10;
// console.log(typeof ten);
// // JSON.stringify(ten) => "ten"
// localStorage.setItem("ten", ten);
// const newTen = localStorage.getItem("ten");
// console.log(typeof newTen);
// console.log(typeof JSON.parse(newTen));

// localStorage.setItem("foo", "bar");

// const handleClickToGetInputValue = () => {

// };

// buttonElement.onclick = handleClickToGetInputValue;

localStorage.setItem("harry", JSON.stringify(harry));
const newHarry = localStorage.getItem("harry");
console.log(newHarry);
console.log(typeof newHarry);
console.log(JSON.parse(newHarry));
console.log(typeof JSON.parse(newHarry));
