import { useState } from "react";
import { services } from "./services"

<!--  -->
const printPrice = (price) => `${price}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const ControlChanges = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
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
    <div className="App">
      <h2>Què vols fer?</h2>
      <ul className="services-list">
        {services.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="services-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => ControlChanges(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{printPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="services-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{printPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
