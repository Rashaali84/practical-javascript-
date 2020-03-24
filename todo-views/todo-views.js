debugger;
var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        debugger;
        //attach the delete listener tp the newly created delete button 
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (clickedLiInsideUl) {
            var elementClicked = clickedLiInsideUl.target;

            if (elementClicked.className === 'deleteButton') {
                //the id of the li item  inside the ul 
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};
debugger;
//call the listener for the delete button creted .
view.setUpEventListeners();