/// <reference types="Cypress" />

import HomePage from "../Home/Home.page";
import ProductView from "../ProductView/ProductView.page";

import componentes from "./componentes";
import homeComponentes from "../Home/componentes";

class ShoppingCart {
  /**
   * Acessa o carrinho de compras.
   */
  acessarCarrinho() {
    return cy
      .get(homeComponentes.botaoCarrinho)
      .click();
  }

  /**
   * Deve exibir no carrinho uma quantidade de items.
   */
  exibirNoCarrinho(quantidade = 1) {
    return cy
      .get(componentes.listaNoCarrinho)
      .should("have.length", quantidade);
  }
  /**
   * Procura na página por uma determinada mensagem.
   * @param {String} mensagem 
   */
  procurarPorMensagem(mensagem) {
    if (!mensagem) return false;

    return cy
      .contains(mensagem)
      .should("exist");
  }

  /**
   * Procura e clica no primeiro botão contendo "Remover"
   */
  removerPrimeiroItem() {
    return cy
      .get(componentes.botaoRemover)
      .within((item) => {
        cy
        .contains("Remover")
        .first()
        .click();
      })
  }

  /**
   * Varre os itens do carrinho e os remove um por um
   */
  removerTodos() {
    return cy
      .get(componentes.botaoRemover)
      .each(() => {
        cy
          .contains("Remover")
          .click();
      });
  }
  
  /**
   * Adiciona items ao carrinho, randomicamente, entre 2 a 5 itens.
   */
  popularCarrinho() {
    let random = Math.floor(Math.random() * 3 + 2);
    cy.log(`Adicionando ${random} itens randomicamente ao carrinho...`);
    for (let index = 0; index < random; index++) {

        HomePage.escolheProduto();
        ProductView.adicionarAoCarrinho();
        ProductView.voltarAHome();
    }
    return random;
  }

  /**
   * Retorna o conteúdo do Valor Total do carrinho
   */
  getPrecoTotal() {
    // TODO
    return cy
      .get(componentes.campoValorTotal)
      .then($preco => {
        return $preco.text();
      });
  }

  /**
   * Compara as mudanças entre preços após alterações na composição do carrinho
   * @param {*} antes 
   * @param {*} depois 
   */
  verificarAlteracaoDePreco(antes, depois) {

    cy.get(antes)
      .then((precoAnterior) => {

        cy.get(depois)
          .then((precoPosterior) => {

            expect(precoAnterior).to.be.not.equal(precoPosterior);

          })
      })

  }

  /**
   * Aumenta a quantidade de um dos itens do carrinho
   */
  aumentarQuantidadeDeItem() {
    cy.get(componentes.botaoAumentarQuantidade)
      .first()
      .click();
  }

  /**
   * Verifica se a quantidade de itens corresponde no Widget do Carrinho
   * @param {Number} quantidade 
   */
  verificarWidgetContador(quantidade) {
    return cy
      .get(componentes.widgetQuantidade)
      .should("contain.text", quantidade);
  }
}

export default new ShoppingCart();