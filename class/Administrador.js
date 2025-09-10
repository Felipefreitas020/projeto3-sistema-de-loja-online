const Usuario = require("./Usuario");

class Administrador extends Usuario {
    constructor(nome, idade) {
        super(nome, idade);
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nomeProduto) {
        this.produtos = this.produtos.filter(p => p.nome !== nomeProduto);
    }

    acessoPainel() {
        return "Acesso ao painel administrativo.";
    }
}

module.exports = Administrador;
