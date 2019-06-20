var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inventory: 9,
    onSale: true,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
      },
    ],
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
