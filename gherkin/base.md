# Gherkin

`Business Readable, Domain Specific Language` orientada a espaços.

## Estrutura base de uma `feature`

> ```# language: pt```

Comentário que define a linguagem;

> ```Funcionalidade```

Seguida de breve descrição da funcionalidade; E logo abaixo por três linhas _(A fim de… Como um… Eu quero…)_.

> ```Cenário```

Opcionalmente seguido por um título; E composto por passos.

> ```passos```

Usando `Dado`, `Quando` e `Então` formam a lógica; formas auxiliares, facilitam a leitura: `E` e `Mas`;
- `Dado`: estado conhecido antes de iniciar a interação com o sistema;
- `Quando`: descreve a ação a ser executada, ou a transição de estados;
- `Então`: observa as saídas ou resultados da interação com o sistema.

## Estrutura avançada

> ```Contexto: Dado ...```

Utilizado para executar um conjunto de steps antes de cada cenário;

> ```Esquemas do Cenário```

Um espaço reservado como uma variável; Usa `< variável >` para representar no `Dado`; e a tabela de dados está em `Exemplos`;

> ```Argumentos Multilineos```

Usado quando se deseja trabalhar com várias linhas. Representados por `Tabelas` (| | | |) ou `Pystrings` (""" 3 aspas duplas abrindo e fechando """).

> ```Tags```

Usando o `@` antes e são separadas por espaço simples. São formas de organizar as suas funcionalidades e cenários;

## Estrutura de pastas

| - features
| |_ pages  
| |_ specifications  
| |_ step_definitions  
| |_ support  

...