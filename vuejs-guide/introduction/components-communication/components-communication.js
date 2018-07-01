Vue.component('todo-item', {
    props: ['todo'],
    template: [
        '<li>',
        '{{ todo.text }}',
        ' <button v-on:click="$emit(\'todo-selected\', todo)">Select</button>',
        '</li>'
    ].join('')
});

var vm = new Vue({
    el: '#app',
    data: {
        selectedTodo: null,
        todos: [
            {
                id: 1,
                text: 'Learn Vue'
            },
            {
                id: 2,
                text: 'Lorem ipsum'
            },
            {
                id: 3,
                text: 'Dolores es sita met'
            }
        ],
    },
    methods: {
        onTodoSelected: function (todo) {
            this.selectedTodo = todo;
        },
        changeTextInLastTodo: function () { 
            var newTodos = this.todos.slice(0, -1);
            newTodos.push({
                id: 3,
                text: 'New text here...'
            });

            this.todos = newTodos;
            
            console.log(this.todos);
        }
    }
});
