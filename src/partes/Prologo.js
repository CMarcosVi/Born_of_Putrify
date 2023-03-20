import React, { useState, useEffect } from "react";

export default function Quartoo() {
  const [texto, setTexto] = React.useState(
    "voce acorda de madrugada com dor de cabeça e ressaca devido a bebidas alcoolicas"
  );
  const [exibirMolde, setExibirMolde] = React.useState(false);

  const handleOption1 = () => {
    setTexto("Imagens do seu irmão desaparecido,mapas e anotações ");
    setExibirMolde(true);
  };

  const handleOption2 = () => {
    setTexto("Olhar para a mesa de cabeceira do lado da sua cama");
  };

  const handleOption3 = () => {
    setTexto("Uma noite chuvosa igual aquele fatidico dia...");
  };

  const handleOption4 = () => {
    setTexto(
      "Droga são 2h da manha tenho que terminar de pegar minhas coisas a viagem vai ser longa."
    );
  };

  const aspirina = {
    nome: "aspirina",
    cura: 200
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={handleOption1}>
        Olhar para a mesa de trabalho que esta em seu quarto
      </button>
      <button onClick={handleOption2}>
        Olhar para a mesa de cabeceira do lado da sua cama
      </button>
      <button onClick={handleOption3}>Olhar pela janela</button>
      <button onClick={handleOption4}>Olhar para o relogico</button>

      {exibirMolde && (
        <div>
          <p>Objetos no inventário:</p>
          <ul>
            <li>
              {aspirina.nome} (cura: {aspirina.cura})<button>Usar</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
