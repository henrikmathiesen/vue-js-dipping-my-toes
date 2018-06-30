/* 

    Some things to note here
        - The logic must be in correct order. Or if this was seperate files, they had to be included / bundled in correct order
        - In a Vue.component, data must be a function returning an object with the data
        - Just like React, we need a key

*/

// file

var vm;

var app = {
    services: {}
};

// file

app.services.logTodoId = function (todo) {
    console.log(this.todo.id);
};

// file

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li v-on:click="logTodoId">{{ todo.text }}</li>',
    methods: {
        logTodoId: app.services.logTodoId
    }
});

// file

Vue.component('todo', {
    template: [
        '<div>',
        '<h3>Todos</h3>',
        '<ol>',
        '<todo-item v-for="t in todos" v-bind:todo="t" v-bind:key="t.id"></todo-item>',
        '</ol>',
        '</div>'
    ].join(''),
    data: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Adam'
                },
                {
                    id: 2,
                    text: 'Bertil'
                },
                {
                    id: 3,
                    text: 'Ceasar'
                }
            ]
        }
    }
});

// file

var vm = new Vue({
    el: '#app',
    data: {
        title: 'We are composing great things'
    }
});
