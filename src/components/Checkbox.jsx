import React from "react";

// Creo la funció Checkbox i li passo els props de l'index, la info que ha de mostrar (preu i text), la funció que haurà de crear per canviar l'estat (onCheck), l'estat del check (checkedState) i el format del preu (getFormattedPrice).
export function Checkbox({
  index,
  text,
  price,
  onCheck,
  checkedState,
  getFormattedPrice,
}) {
  // A Checkbox defineixo els props i els dono forma (plantilla). A App els cirdo per omplir d'info la plantilla.
  // La funció retorna un ínput de tipus checkbox amb una id = a l'index, la info (que la treu del map fet a App) i la capacitat de fer canvis a través dues funcions (checked) i (onChange).
  // Creo també el "format" o plantilla amb una label que ha de mostrar l'html.
  return (
    <div key={index}>
      <div>
        <input
          type="checkbox"
          id={index}
          name={text}
          value={text}
          checked={checkedState}
          onChange={() => onCheck(index)}
        />
        <label>
          {text} {getFormattedPrice(price)}
        </label>
      </div>
    </div>
  );
}