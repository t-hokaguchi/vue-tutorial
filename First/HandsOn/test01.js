var msg = new Vue({
  el: '#msg',
  data: {
    isCapital: true,
  },
});

var product = new Vue({
  el: '#product',
  data: {
    items: [{ name: 'りんご' }, { name: 'ごりら' }, { name: 'ラッパー' }],
  },
});

var app = new Vue({
  el: '#app',
  data: {
    day: 10,
    msg: 'あけおめ',
  },
  methods: {
    onDeleteDay: function () {
      this.day--;
    },
  },
});
