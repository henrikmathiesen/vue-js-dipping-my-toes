/* 

    - Always name component with a prefix
        - https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential
        - https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended

    
    GLOBAL REGISTRATION
        app-some-component-a and app-some-component-b are globally registered. 
        That means they can be used in the template of any root Vue instance (new Vue) created after registration.
        Also both of these components will be available inside each other.
        https://vuejs.org/v2/guide/components-registration.html#Global-Registration

        "Global registration often isn’t ideal. For example, if you’re using a build system like Webpack, 
        globally registering all components means that even if you stop using a component, 
        it could still be included in your final build."
    
    LOCAL REGISTRATION
        app-some-component-a and app-some-component-b are locally registered.
        "In these cases, you can define your components as plain JavaScript objects
        Then define the components you’d like to use in a components option"
*/

// File

Vue.component('app-some-component-a', {
    template: [
        '<div>',
        'Hi from app-some-component-a',
        '<app-some-component-b></app-some-component-b>',
        '</div>'
    ].join('')
});

// File

Vue.component('app-some-component-b', {
    template: [
        '<div>',
        'Hi from app-some-component-b',
        '</div>'
    ].join('')
});

// File

var AppSomeComponentC = {
    template: [
        '<div>',
        'Hi from app-some-component-c',
        '</div>'
    ].join('')
};

// File

var AppSomeComponentD = {
    template: [
        '<div>',
        'Hi from app-some-component-d',
        '<app-some-component-c></app-some-component-c>',
        '</div>'
    ].join(''),
    components: {
        'app-some-component-c': AppSomeComponentC
    }
};

// File

var vm = new Vue({
    el: '#app',
    components: {
        'app-some-component-d': AppSomeComponentD
    }
});
