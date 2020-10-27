/* global Given, When, And, Then */
/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/Home/Home.page";
import ShoppingCart from "../../support/pageObjects/ShoppingCart/ShoppingCart.page";
import ProductView from "../../support/pageObjects/ProductView/ProductView.page";

let quantidade = 0;

And(`que esteja no carrinho`, () => {
    ShoppingCart.acessarCarrinho();
});
Given(`que hajam itens no carrinho`, () => {
    HomePage.acessarHome();
    quantidade = ShoppingCart.popularCarrinho();
})

When(`remover um item contido no carrinho`, () => {
    ShoppingCart.removerPrimeiroItem();
    quantidade--;
});
Then(`este item não deve ser exibido.`, () => {
    ShoppingCart.exibirNoCarrinho(quantidade);
});

When(`remover todos os itens contido no carrinho`, () => {
    ShoppingCart.removerTodos();
});
Then(`deve ser exibida mensagem {string}`, (mensagem) => {
    ShoppingCart.procurarPorMensagem(mensagem);
});

When(`aumentar a quantidade de um item contido no carrinho`, () => {
    ShoppingCart.getPrecoTotal().as("precoAnterior");
    ShoppingCart.aumentarQuantidadeDeItem();
    quantidade++;
});
Then(`a quantidade será acrescida em uma unidade`, () => {
    ShoppingCart.verificarWidgetContador(quantidade);
});
And(`o preço será modificado.`, () => {
    ShoppingCart.getPrecoTotal().as("precoAtual");
    ShoppingCart.verificarAlteracaoDePreco("@precoAnterior", "@precoAtual");
});
