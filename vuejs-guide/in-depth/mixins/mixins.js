// https://vuejs.org/v2/guide/mixins.html
// https://scotch.io/tutorials/extending-vue-components-with-mixins

// Can create global mixins that apply to all components, but should take care with that
// https://vuejs.org/v2/guide/mixins.html#Global-Mixin

var myMixin = {
    created: function () { 
        console.log('it works');
    }
};

var AppSomeComponent = {
    template: '<h2>Hi there</h2>',
    mixins: [myMixin]
};

var vm = new Vue({
    el: '#app',
    mixins: [myMixin],
    components: {
        'app-some-component': AppSomeComponent
    }
});
