const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    showCart: false,
    userSearch: '',
    filtered: []
  },
  components: {cart, products, filter_el},
  methods: {
    getJson(url){
        return fetch(url)
            .then(result => result.json())
            .catch(error => console.log(error))
    },
    addProduct(product){
      console.log(product.id_product);
    },
  },
  mounted(){
    console.log (this)
  }
});
