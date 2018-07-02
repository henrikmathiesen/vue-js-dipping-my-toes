/*

    Vue has built in directives like v-on, v-if, v-bind etc
    We can also create our own custom directives.

    Components are the building blocks of Vue, but sometimes we need some finer stuff on an element

    https://vuejs.org/v2/guide/custom-directive.html

    Hooks
    https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions

    Naming
    Give a name, prefix with v- in template

*/

var focus = {
    bind: function () { 
        console.log('bound');
        // Do one time setup work here
    },
    inserted: function (el, binding) {

        // Important
        // Apart from el, you should treat these arguments as read-only and never modify them.
        // https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments

        console.log('ok', binding, binding.value);
        el.focus();
    }
};

var vm = new Vue({
    el: '#app',
    directives: {
        'focus': focus
    }
});
