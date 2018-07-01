var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        rawHtml: '<h2>Iam raw html, but bindings are ignored {{ message }}</h2>',
        someId: 'foo',
        isButtonDisabled: false,
        url: 'https://github.com/'
    },
    methods: {
        changeMessage: function () {
            this.message = 'Hello Vue!';
        },
        toggleDisableButton: function () { 
            this.isButtonDisabled = !this.isButtonDisabled;
        }
    }
});
