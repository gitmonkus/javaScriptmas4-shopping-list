const checklist = document.getElementById("checklist");
const userInput = document.getElementById("input-box");
const deleteBtn = document.getElementById("delete-btn");

const items = ["Candles", "Decorations", "Chocolate"];
// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// function isChecked() {
//     for (i = 0; i < checkbox.length; i++) {
//         let check = checkbox[i]
//         if (check.checked) {
//             console.log('checked')
//         } else {
//             console.log('WtF')
//         }
//     }
// }

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

for (let item in items) {
  checklist.innerHTML += `<li><input class="chk" name="check" type="checkbox">
            <label for="check" class="checklist-item chk">${items[item]}</label></li>`;
}

userInput.addEventListener("keyup", shoppingList);
function shoppingList() {
  let textInput = event.target.value;
  items.push(textInput);
  if (event.keyCode == 13) {
    checklist.innerHTML += `<li><input class="chk" name="check" type="checkbox">
            <label for="check" class="checklist-item chk">${
              items[items.length - 1]
            }</label></li>`;
    userInput.value = "";
  }
}

deleteBtn.addEventListener("click", delBoxes);
function delBoxes() {
  let boxes = document.getElementsByClassName("chk");
  for (let i = 0; i < boxes.length; i++) {
    box = boxes[i];
    if (box.checked) {
      box.parentElement.remove();
    }
  }
}
