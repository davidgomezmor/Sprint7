import { useState } from "react";
import { services } from "./services"


const printPrice = (price) => `${price}`;

export default function App() {                         
  const [checkedState, setCheckedState] = useState( 
    new Array(services.length).fill(false)
    // Definim l'estat inicial del "useState" que ens mostrarà si el checkbox està marcat o no.
    // (farem servir true o false). L'useState doncs l'inicialitzarem creant una array amb
    // tants elements com tingui l'objecte "services". Com volem que de primeres tot el checkbox estigui 
    // desmarcat, li atribuïrem "False" a cada un del elements d'aquesta array al crear-la.
    // La funció ".fill" ens permetrà fer això si li passem "false" entre ().
  );

  const [total, setTotal] = useState(0);
// Aquí hem passat a definir l'altre useState, el que ens anirà donant el preu segons les opcions que anem seleccionant
// inicialment, com tenim totes les caselles desmarcades que hem generat, voldrem que ens mostri "0".
  const ControlChanges = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
// Aquesta funció anirà controlant els canvis que anem fent i influirà en el preu de cada servei seleccionat. 
// En primer lloc, amb .map es crearà una altre array que guardarà en una nova constant i li passarem dos paràmetres:
// Primer, "item", que serà cada element contingut en el chekedState (amb T/F) i després "index" que és l'index
// que localitza a cada element dins de la seva array. 
// Ara comprovarem que, si es compleix aquesta condició en algún element quan iterem amb map: index === position.
// Si s'arriva a complir, invertirem l'estat de l'item, és a dir que transformarà F --> V i viceversa.
// Obviament .map recorrerà tota l'array, i si position i index no coincideixen, doncs l'item continuarà igual.

    setCheckedState(updatedCheckedState);
// Aquest és el setter de "checkedState", és a dir el que canvia l'estat que té en cada moment aquesta variable.
// rep però "updatedCheckedState", ja que aquesta és la versió actualitzada de checkedState, que conté la info
// nova després d'haver revisat amb .map si una casella estava o no marcada.

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );
// Finalment, tenim la constant on guardem el número del preu que fa servir updatedCheckedState per a rebre la
// info actualitzada i amb reduce obtindrem un número del total del preu actual segons la selecció de l'ususari.
// Aquest reduce tindrà tres paràmetres:

// Primer, el "sum" que anirà acumulants tots els preus segons condicions que especificarem (si estàn marcats "T") 
// Segon, el "currentState", que correspon a si els elements són True o False (T/F).
// I tercer, l' "index" de cada element.
// Si .map troba que "currentState" és "True" a l'element, aleshores sumarà a l'acumulador "sum" el preu. 
// Per accedir a aquest preu, entrem a l'objecte services, a la posició que correspongui (indicada pel seu
// "index" que estem rebent) i dins de la key "price". Si currentState no és "True", aleshores retorna el mateix
// acumulador que teniem. En el cas de que no tinguessim res a "sum", retornariem 0.  

    setTotal(totalPrice);
  };
  // així doncs, el setTotal estarà definit per "totalPrice", que conté la funció del càlcul del preu segons els
  // elements que hi hagi marcats (True) al checkbox.

  return (
    <div>
      <h2>Què vols fer?</h2>
        {services.map(({ name, price }, index) => {
// a l'HTML faré un .map de l'objecte sevices.js per agafar la informació que tenim en keys ("name", "price").
// però també agafarem el seu index, que ens ajudarà a indentificar cada producte que s'està ofertant a la web.           
          return (
              <div>
                <div>
                  <input              // coloco/retorno cada constant/key per a que sigui visible:
                    key={index}
                    type="checkbox"
                    id={index}
                    name={name}
                    value={name}
                    checked={checkedState[index]}           
                    //Aquí indiquem "l'index" que identifica cada element dins de checkedState.
                    onChange={() => ControlChanges(index)}
                    // l'onChange s'activa quan detecta canvis a l'input (checkBox), activant "ControlChanges".
                  />
                  {name}
                </div>
                {printPrice(price)}
              </div>
          );
        })}
          <div>
            <div>Total:</div>
            <div>{printPrice(total)}</div>
          </div>
    </div>
  );
}
