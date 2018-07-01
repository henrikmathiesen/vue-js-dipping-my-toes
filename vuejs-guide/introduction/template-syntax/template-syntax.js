var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        rawHtml: '<h2>Iam raw html, but bindings are ignored {{ message }}</h2>',
        someId: 'foo',
        isButtonDisabled: false,
        url: 'https://github.com/',
        isA: true,
        isB: false
    },
    methods: {
        changeMessage: function () {
            this.message = 'Hello Vue!';
        },
        toggleDisableButton: function () {
            this.isButtonDisabled = !this.isButtonDisabled;
        },
        changeB: function (event) {
            console.log(event);
            this.isB = true;

            // Can use methodName(arg, $event) in template
            // if we want to send argument and also use the event
            // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers

            // Event modifiers are handy
            // https://vuejs.org/v2/guide/events.html#Event-Modifiers

            // As are key modifiers
            // https://vuejs.org/v2/guide/events.html#Key-Modifiers

            // Very good
            // "When a ViewModel is destroyed, all event listeners are automatically removed. You don’t need to worry about cleaning it up yourself."
            // https://vuejs.org/v2/guide/events.html#Why-Listeners-in-HTML
        }
    },
    computed: {
        // "This is a common and powerful pattern for toggling CSS classes"
        status: function () {
            return {
                'text-danger': this.isA,
                'text-warning': this.isB
            }
        }

        // Use array syntax for even more flexibility:
        // https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax

        // Can also bind inline styles (Vue will even add vendor prefixes to them!)
        // https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles
    }
});

// <template> can be used as an insisible wrapper
// https://vuejs.org/v2/guide/conditional.html#Conditional-Groups-with-v-if-on-lt-template-gt

// important about key on elements
// https://vuejs.org/v2/guide/conditional.html#Controlling-Reusable-Elements-with-key

// v-if vs v-show
// https://vuejs.org/v2/guide/conditional.html#v-if-vs-v-show

// important about key in repeaters (prefer to use them)
// https://vuejs.org/v2/guide/list.html#key

// Array change detection and mutation
// "Vue implements some smart heuristics to maximize DOM element reuse, so replacing an array with another 
// array containing overlapping objects is a very efficient operation."
// https://vuejs.org/v2/guide/list.html#Array-Change-Detection // also has a list of mutation vs non mutation methods on arrays

// Conditionally render a list item VS conditionaly render the whole loop
// https://vuejs.org/v2/guide/list.html#v-for-with-v-if
