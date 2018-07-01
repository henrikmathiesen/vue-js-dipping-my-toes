var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: '1 + 1 = ' + (1 + 1),
        isVisible: true,
        todos: [
            {
                prio: 1,
                text: 'Learn Vue'
            },
            {
                prio: 2,
                text: 'Learn RegEx'
            },
            {
                prio: 3,
                text: 'Learn Angular Routing'
            }
        ],
    },
    methods: {
        toggleIsVisible: function () {
            this.isVisible = !this.isVisible;
        }
    }
});
