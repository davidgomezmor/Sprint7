import { useState } from "react";
import { services } from "./services"
import { PageAndLanguages } from "./components/PageAndLanguages";

export default function App() {

  let [pages, setPages] = useState(1);
  let [languages, setLanguages] = useState(1);
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );
  const [total, setTotal] = useState(0);

  function controlPages(e) {
    setPages(e.target.value);
    controlChanges()
  }

  function controlLanguages(e) {
    setLanguages(e.target.value);
    controlChanges()
  }

  const controlChanges = (position) => {
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
      0);

    setTotal(totalPrice + (pages * languages * 30));


  };
  const printPrice = (price) => `${price}`;
  return (
    <div>
      <h2>Què vols fer?</h2>
      {services.map(({ name, price }, index) => {
        return (
          <div>

            <>
              <input
                key={index}
                type="checkbox"
                id={index}
                checked={checkedState[index]}
                onChange={() => controlChanges(index)}
              />
              <div>
                {name}
              </div>
            </>
            {printPrice(price)}
          </div>
        )
      })}

      {/* {checkedState[0] && index === 0 && (<PageAndLanguages/>)} */}
      <div>
        {!checkedState[0] ? ((pages = 0) && (languages = 0) && (setTotal(0))) :
          (<PageAndLanguages
            pages={pages}
            languages={languages}
            controlPages={controlPages}
            controlLanguages={controlLanguages}
            controlChanges={controlChanges}
          />)
        }
      </div>
      <div>
        <div>Total:
          {printPrice(total)} {setTotal}
        </div></div>
    </div>
  );

}
