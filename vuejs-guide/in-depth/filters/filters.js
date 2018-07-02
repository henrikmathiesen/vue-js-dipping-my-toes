/*

    https://vuejs.org/v2/guide/filters.html

    "Filters are usable in two places: mustache interpolations and v-bind expressions (the latter supported in 2.1.0+). 
    Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol".

    <!-- in mustaches -->
    {{ message | capitalize }}

    <!-- in v-bind -->
    <div v-bind:id="rawId | formatId"></div>


    - See also passing argument at the bottom of the doc page

    - some-child can not use the filter ...
*/

var vm = new Vue({
    el: '#app',
    filters: {
        uppercase: function (value) {
            if (!value) {
                return '';
            }

            return value.toUpperCase();
        }
    },
    data: {
        foo: 'bar'
    },
    components: {
        'some-child': {
            template: '<div>{{ message }}</div>',
            data: function () {
                return {
                    message: 'Hi from child'
                }
            }
        }
    }
});
