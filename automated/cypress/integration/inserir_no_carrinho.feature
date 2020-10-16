#language: en

Feature: Inserir no carrinho

  Background:
    Given esteja na home

  Scenario: Adicionar um item 
    When inserir um item no carrinho
    Then deve exibí-lo no carrinho

  Scenario: Adicionar mais de um item
    When inserir um item no carrinho
    And inserir outro item
    Then deve exibí-los no carrinho