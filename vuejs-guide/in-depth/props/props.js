/* 

    Iam not going in depth with code examples for props since they are so similar to React

    Casing
    https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case

    Prop Types
    https://vuejs.org/v2/guide/components-props.html#Prop-Types

    Passing Static or Dynamic Props
    https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props

    Passing numbers and booleans
    https://vuejs.org/v2/guide/components-props.html#Passing-a-Number
    https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean

    Shortcut for passing properties of an Object
    https://vuejs.org/v2/guide/components-props.html#Passing-the-Properties-of-an-Object

    One-Way Data Flow
    "All props form a one-way-down binding between the child property and the parent one: when the parent property updates, 
    it will flow down to the child, but not the other way around." For that we need an event, see component-communication.

    Do not mutate a prop in a child component, instead communicate to parent and make the change there

    https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow

    See also shortcut for events: https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier

    More on prop validation
    https://vuejs.org/v2/guide/components-props.html#Prop-Validation

    Usefull on adding CSS classes to child component
    https://vuejs.org/v2/guide/components-props.html#Replacing-Merging-with-Existing-Attributes

*/

var AppSomething = {
    props: {
        theSomething: String,
        theTitle: String,
        age: Number,
        isCorrect: Boolean
    },
    template: [
        '<div>',
        '<div>{{ theSomething }}</div>',
        '<div>{{ theTitle }}</div>',
        '<div>{{ age }}</div>',
        '<div>{{ isCorrect }}</div>',
        '</div>'
    ].join('')
};

var vm = new Vue({
    el: '#app',
    components: {
        'app-something': AppSomething
    },
    data: {
        theTitle: 'Lorem ipsum',
        age: 50,
        isCorrect: true
    }
});
