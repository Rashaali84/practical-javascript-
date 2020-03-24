# To-do List Project: Development Strategy

Building this site one step at a time

---

## 0. README

- Write the `README.md`, including the final screen shot
- Include a License
- Include this `development-strategy.md` file

---

## 1. Setup

- Create boilerplate index.html
- Create boilerplate style.css
- Create boilerplate log.js
- Create boilerplate init.js
- Create boilerplate todo-data/todo-data.js
- Create boilerplate todo-handlers/todo-handlers.js
- Create boilerplate todo-views/todo-views.js

---

## 2. User Story: The ability to add an item

**A user can see in the front page a list of unsorted names**

### DOM:

- Create input-filed named `addTodoTextInput` in index.html .
- Create button tag to handle the onclick action of adding .
- Create unordered list tag . `ul` to display added tasks .
- Add link to style file, add basic classes.

### Data:

- Create an object in `todo-data\todo-data.js`. It will be a list of todo-tasks.

### handlers :

- create `add-Todo` function as a handler for the add button on click listener in DOM .

### views :

- Create a `display` list to do feature to display added to-dos list .
- Create a `delete` button beside each item 'to-do' name , so the user can use this button to delete the item later .
- Clear the input text of the todo name .

### listeners :

-Add `on-click` listener to the to-do `add`button in DOM .
-Add `click` listener to `delete` buttons in the displayed to-dos list .

### Log:

- Create a `log state` object to log the program steps.

### Init:

- Create `necessary initialization` to display unsorted list.

## 3. User Story: The ability to remove an item

**A user remove any todo item list , that is previously added from the list use delete button created before in user tory '2'**

### data:

- `Delete` the todo form the data object list .

### handlers:

- `Invoke delete` a todo function in handlers.

### views:

- `Display` the updated list after deleting in views .

---

## 4. User Story: The ability to edit an item

**A user can edit a displayed already stored list , and then the updated list is displayed again .\***

### View:

- Add `new text-input` field one for the required to-do name to be changed and `another text-input` field for the new name to be for the entered to-do
- Add a `button` tag to click and apply the edit logic .

### Data :

- Add a `feature for the to-do object to edit` a specific todo index in the data - list .

### listeners :

-Add listener `on-click` on edit-todo button in DOM .

### handler:

- Add handler Function to be applied when the `on-click` listeners fires , to `edit specified item number` in the todo list .

## 5. User Story: The ability to toggle an item

**A user can use a the sorted list in a well-styled page**

### View:

- Add a `text-input` field for the todo-number index to be modified in the to-dolist
- Add a `button` to handle on-click and apply the toggle action linked to that created input text.

### data :

- Create a function to `handle toggling inside the stored data list`.

### listeners :

- Add `on-click` listener to apply a handler for the toggle logic .

### handlers :

-Create a `toggle-complete handler` to be invoked to update the data-to do list .

### Log:

- log the step intp the log array in view.js .

## 6. User Story: The ability to toggle all items at once

**A user can click on a button to toggle all tasks displayed .**

### View:

- Add a `button` to invoke a function to call toggle-all function , when clicked .

### listeners :

- Add `on-click listener` on the toggle all button in DOM .

### handlers :

- Create a `function in handler` to `toggle all` list in the data-object .

### data :

- `Update the data list` of to-dos in the data-objects .

### Log:

-`log the step` into the log array in view.js .
