/// <reference types="Cypress" />
import componentes from "./componentes";

class ProductView {
    /**
     * Clica no botão "Adicionar ao Carrinho"
     */
    adicionarAoCarrinho(){
        cy
            .get(componentes.botaoAdicionar)
            .click();
    }
}

export default new ProductView();