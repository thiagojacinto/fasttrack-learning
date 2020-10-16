/* global Given, When, And, Then */
/// <reference types="Cypress" />

Given(`que esteja no carrinho`, () => {});

When(`remover um item contido no carrinho`, () => {});
Then(`este item não deve ser exibido.`, () => {});

When(`remover todos os itens contido no carrinho`, () => {});
Then(`deve ser exibida mensagem {string}`, (mensagem) => {});


When(`aumentar a quantidade de um item contido no carrinho`, () => {});
Then(`a quantidade será acrescida em uma unidade`, () => {});
And(`o preço será modificado.`, () => {});

When(`inserir um CEP {string}`, (cep) => {});
Then(`serão exibidas opções de frete.`, () => {});

Then(`deve ser exibida mensagem "Ocorreu um erro ao carregar as opções de frete".`, () => {});

When(`inserir um cupom {string}`, (cupom) => {});
Then(`será calculado um desconto.`, () => {});

Then(`deve ser exibida mensagem "CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO.".`, () => {});
