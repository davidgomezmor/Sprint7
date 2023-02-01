import { useState } from "react";
import { services } from "./services"


const printPrice = (price) => `${price}`;
export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );

  const [total, setTotal] = useState(0);

  const ControlChanges = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div>
      <h2>Què vols fer?</h2>
      {services.map(({ name, price, pages, languages }, index) => {
        return (
          <div>
            <div>
              <input
                key={index}
                type="checkbox"
                id={index}
                checked={checkedState[index]}
                onChange={() => ControlChanges(index)}
              />
              {name}
              <div>
                {pages}
              </div>
              <div>
                {languages}
              </div>
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
