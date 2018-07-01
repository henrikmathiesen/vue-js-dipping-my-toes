/* 

    Some things to note here
        - The logic must be in correct order. Or if this was seperate files, they had to be included / bundled in correct order
        - In a Vue.component, data must be a function returning an object with the data, reason being that all instances should have its own data
            - https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
        - Just like React, we need a key
        - Both new Vue and Vue.component can have life cycle hooks
            - All of them here: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
            - See note on mounted and children mounted: https://vuejs.org/v2/api/#mounted
        - We also do some API stuff at the bottom

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
    },
    created: function () {
        console.log('todo created');
    },
    mounted: function () {
        console.log('todo mounted');
    },
    updated: function () {
        console.log('todo updated');
    },
    destroyed: function () {
        console.log('todo destroyed');
    }
});

// file

var test = {
    name: 'Henke'
};

var vm = new Vue({
    el: '#app',
    data: {
        title: 'We are composing great things',
        test: test
    },
    created: function () {
        console.log('app created');
    },
    mounted: function () {
        console.log('app mounted');
    },
    updated: function () {
        console.log('app updated');
    },
    destroyed: function () {
        console.log('app destroyed');
    },
    methods: {
        changeName: function () {
            this.test.name = 'Benke';
        }
    }
});

console.log(test == vm.test);
console.log(vm.$data.test == test);

vm.$watch('test.name', function (newValue, oldValue) {
    console.log(newValue, oldValue);
});
