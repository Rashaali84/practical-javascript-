debugger;
var todoList = {
    todos: [],
    addTodo: function (todoText) {
        debugger;
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (positionToChange, todoText) {
        this.todos[positionToChange].todoText = todoText;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (positionToModify) {
        var todo = this.todos[positionToModify];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function (todo) {
            // Case 1: If everything's true, make everything false.
            if (completedTodos === totalTodos) {
                todo.completed = false;
                // Case 2: Otherwise, make everything true.
            } else {
                todo.completed = true;
            }
        });
    }
};