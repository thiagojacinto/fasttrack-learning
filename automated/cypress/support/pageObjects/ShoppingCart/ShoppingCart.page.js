/// <reference types="Cypress" />

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
   * Procura e clica no primeiro botão contendo "Remover"
   */
  removerPrimeiroItem() {
    return cy
      .get(componentes.listaNoCarrinho)
      .within((item) => {
        cy
        .contains("Remover")
        .first()
        .click();
      })
  }

  /**
   * Procura na página por uma determinada mensagem.
   * @param {String} mensagem 
   */
  procurarPorMensagem(mensagem) {
    if (!mensagem) return false;

    return cy.contains(mensagem);
  }

  /**
   * Insere o CEP no campo correspondente
   * @param {String} cep 
   */
  inserirCep(cep) {
    if (!cep) return false;

    return cy
      .get(componentes.campoCep)
      .type(cep)
      .get(componentes.botaoCep)
      .click();
  }

  /**
   * Insere um cupom no campo correspondente
   * @param {String} cupom 
   */
  inserirCupom(cupom) {
    if (!cupom) return false;

    return cy
      .get(componentes.campoCupom)
      .type(cupom)
      .get(componentes.botaoCupom)
      .click();
  }
}

export default new ShoppingCart();