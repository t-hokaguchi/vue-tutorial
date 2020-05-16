var msg = new Vue({
    el: '#msg',
    data: {
        isCapital: true
    }
});

var product = new Vue({
    el: '#product',
    data: {
        items: [
            {name: 'りんご'}, {name: 'ゴリラ'}, {name: 'ラッパ'}
        ]
    }
});

var app = new Vue({
    el: '#app',
    data: {
        day:10
    },
    methods: {
        onDeleteDay: function() {
            this.day -= 1
        }
    }
});
