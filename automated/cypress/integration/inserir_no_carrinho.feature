#language: en

Feature: Inserir no carrinho

  Background:
    Given esteja na home

  Scenario: Adicionar um item 
    When inserir um item no carrinho
    Then deve exibir 1 item no carrinho

  Scenario: Adicionar mais de um item
    When inserir um item no carrinho
    And inserir outro item
    Then deve exibir 2 item(s) no carrinho