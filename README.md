# Documentação da Aula 017 - Débora Rafaelle

## Informações Gerais

-   **Data de Execução**: 08/12/2024
-   **Aluno**: Débora Rafaelle

----------

# Atualização do Projeto com Renderização Condicional e Eventos

Nesta aula, eu realizei as seguintes atualizações no projeto para praticar **renderização condicional** e **eventos no React**:

-   Adicionei um botão para mostrar ou esconder a lista de doces (Trufas e Bolos de Pote).
-   Usei **CSS inline** para deixar os botões e elementos visualmente organizados e fáceis de interagir.

----------

## Componente TaskContainer.js

### O que foi feito?

1.  **Mostrar e esconder as tarefas**:
    -   Criei um botão para esconder ou mostrar a lista de doces.
2.  **Uso de renderização condicional**:
    -   As listas de trufas e bolos são renderizadas condicionalmente, ou seja, só aparecem quando o botão para mostrar está ativado.

### Código Atualizado

```javascript

import React, { useState } from "react";

function TaskContainer() {
  const [showTrufas, setShowTrufas] = useState(true);
  const [showBolos, setShowBolos] = useState(true);

  return (
    <div style={containerStyle}>
      <React.Fragment>
        <div style={taskStyle}>
          <h3>
            Trufas{" "}
            <button
              onClick={() => setShowTrufas(!showTrufas)}
              style={buttonStyle}
            >
              {showTrufas ? "Esconder" : "Mostrar"}
            </button>
          </h3>
          {showTrufas && (
            <ul>
              <li>Trufas de Chocolate</li>
              <li>Trufas de Maracujá</li>
              <li>Trufas de Morango</li>
            </ul>
          )}
        </div>
        <div style={taskStyle}>
          <h3>
            Bolo de Pote{" "}
            <button
              onClick={() => setShowBolos(!showBolos)}
              style={buttonStyle}
            >
              {showBolos ? "Esconder" : "Mostrar"}
            </button>
          </h3>
          {showBolos && (
            <ul>
              <li>Bolos de Chocolate</li>
              <li>Bolos de Prestígio</li>
              <li>Bolos de Morango</li>
            </ul>
          )}
        </div>
      </React.Fragment>
    </div>
  );
}

const containerStyle = {
  margin: "20px auto",
  padding: "10px",
  maxWidth: "600px",
  backgroundColor: "#C71585",
  borderRadius: "8px",
};

const taskStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  marginLeft: "10px",
  padding: "5px 10px",
  backgroundColor: "#FF69B4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default TaskContainer;
```
----------

## Estilização do Projeto

A estilização foi feita usando **CSS inline**, com o objetivo de manter o design simples e de fácil leitura. As cores de fundo e os botões foram ajustados para dar mais destaque aos itens e garantir uma boa organização visual.

----------

## Mudanças de Design

Além das funcionalidades básicas solicitadas, fiz algumas melhorias no design para melhorar a organização e a estética do site:

1.  **Fundo**: Escolhi um tom de rosa (#C71585) para o fundo da área de tarefas, criando um contraste interessante com o conteúdo.
2.  **Botões**: Usei um tom de rosa vibrante (#FF69B4) para os botões, fazendo-os se destacarem e facilitando a interação com o usuário.
3.  **Caixas de Tarefas**: Tornei as caixas mais limpas e arredondadas, com bordas suaves e um espaçamento agradável para dar uma sensação de clareza.


----------

## Print do Site Funcionando
![Debeora1](https://github.com/user-attachments/assets/46dba335-adbc-4a78-9ca5-c61bd2633286)