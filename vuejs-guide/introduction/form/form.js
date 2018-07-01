/* 

    "v-model will ignore the initial value, checked or selected attributes found on any form elements. 
    It will always treat the Vue instance data as the source of truth. You should declare the initial 
    value on the JavaScript side, inside the data option of your component."
    - https://vuejs.org/v2/guide/forms.html   
    
    See this for multiple checkboxes, as array in data
    https://vuejs.org/v2/guide/forms.html#Checkbox

*/

var vm = new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
        mature: '',
        code: null,
        genre: '',
        newsLetter: false,
        genres: [
            {
                id: 1,
                genre: 'Action'
            },
            {
                id: 2,
                genre: 'RPG'
            },
            {
                id: 3,
                genre: 'Sport'
            },
            {
                id: 4,
                genre: 'Strategy'
            }
        ]
    },
    methods: {
        onSubmit: function () {
            console.log('submit');
            console.log({
                name: this.name,
                description: this.description,
                mature: this.mature,
                code: this.code,
                genre: this.genre,
                newsLetter: this.newsLetter
            });
            console.log('submit');
        }
    }
});
