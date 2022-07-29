const vm = new Vue({
  el: "#app",
  data: {
    produtos: []
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => {
          this.produtos = r;
        })
    }
  },
  created() {
    this.fetchProdutos();
  }
})