const checklist = document.getElementById("checklist");
const userInput = document.getElementById("input-box");
const deleteBtn = document.getElementById("delete-btn");
const boxes = document.getElementsByClassName("chk");
const items = ["Candles", "Decorations", "Chocolate"];
// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

for (let item in items) {
  checklist.innerHTML += `<div><input class="chk" name="check" type="checkbox">
            <label for="check" class="checklist-item">${items[item]}</label></div>`;
}

userInput.addEventListener("keyup", shoppingList);
function shoppingList() {
  let textInput = event.target.value;
  items.push(textInput);
  if (event.keyCode == 13) {
    checklist.innerHTML += `<div><input class="chk" name="check" type="checkbox">
            <label for="check" class="checklist-item">${
              items[items.length - 1]
            }</label></div>`;
    userInput.value = "";
  }
}

deleteBtn.addEventListener("click", delBoxes);
function delBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (box.checked) {
      console.log(box);
      box.parentElement.remove();
    }
  }
}
