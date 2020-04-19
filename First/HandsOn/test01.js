var msg = new Vue({
  el: '#msg',
  data: {
    isCapital: true,
  },
});

var product = new Vue({
  el: '#product',
  data: {
    items: [
      { code: 'A01', name: 'りんご' },
      { code: 'B01', name: 'ゴリラ' },
      { code: 'C01', name: 'ラッパー' },
    ],
  },
});

var app = new Vue({
  el: '#app',
  data: {
    day: 10,
  },
  methods: {
    onDeleteDay: function () {
      this.day--;
    },
  },
});
