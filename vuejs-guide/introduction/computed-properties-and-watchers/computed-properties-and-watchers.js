/* 

    It is best practice to not have lots of logic in the template, so we use a method, reversedMessageMethod, and execute it from the template.
    However the method is executed on every re-render, for example if we change foo

    It is better to use a computed property, since it caches the result and only run if something that it depends on changes.
    reverseMessageComputed is only run when this.message changes

    Computed properties are by default getter-only, but you can also provide a setter 
    https://vuejs.org/v2/guide/computed.html#Computed-Setter

    Watch
        - Could do some logic in watch when a property change also...
*/

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
        foo: 'bar'
    },
    methods: {
        reversedMessageMethod: function () {
            console.log('reversedMessageMethod executing');
            return this.message.split('').reverse().join('');
        },
        changeMessage: function () {
            this.message = 'World';
        },
        changeFoo: function () {
            this.foo = 'baz';
        }
    },
    computed: {
        reverseMessageComputed: function () {
            console.log('reverseMessageComputed executing');
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
        message: function (newValue, oldValue) { 
            console.log('WATCH');
            console.log('newValue: ' + newValue);
            console.log('oldValue: ' + oldValue);
            console.log('/WATCH');
        }
    }
});


// watch
// watch on vm $
// make note about angular and computed property
