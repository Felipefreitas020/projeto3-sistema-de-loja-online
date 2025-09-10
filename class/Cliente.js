const Usuario = require("./Usuario");

class Cliente extends Usuario {
  constructor(nome, idade) {
    super(nome, idade);
    this.carrinho = [];
  }

  adicionarProduto(produto) {
    this.carrinho.push(produto);
  }

  acessoPainel() {
    return "Acesso ao painel de compras.";
  }
}

module.exports = Cliente;