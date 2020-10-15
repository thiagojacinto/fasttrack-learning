#language: en

Feature: Alterar do carrinho

  Background:
    Given que esteja no carrinho

  Scenario: Remover um item
    When remover um item contido no carrinho
    Then este item não deve ser exibido.

  Scenario: Remover todos os itens
    When remover todos os itens contido no carrinho
    Then deve ser exibida mensagem "O seu carrinho está vazio :("

  Scenario: Alterar quantidade de um item
    When aumentar a quantidade de um item contido no carrinho
    Then a quantidade será acrescida em uma unidade
    And o preço será modificado.

  Scenario: Inserir CEP válido
    When inserir um CEP "válido"
    Then serão exibidas opções de frete.

  Scenario: Inserir CEP inválido
    When inserir um CEP "inválido"
    Then deve ser exibida mensagem "Ocorreu um erro ao carregar as opções de frete".

  Scenario: Inserir cupom de desconto válido
    When inserir um cupom "válido"
    Then será calculado um desconto.

  Scenario: Inserir cupom de desconto inválido
    When inserir um cupom "inválido"
    Then deve ser exibida mensagem "CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO.".