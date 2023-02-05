import { useState, useEffect } from "react";
import { services } from "./services";
import { PageAndLanguages } from "./components/PageAndLanguages";

export default function App() {

  let [pages, setPages] = useState(1);
  let [languages, setLanguages] = useState(1);
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );
  const [total, setTotal] = useState(0);
  
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

    if (updatedCheckedState[0] === false) setPages(0);
    if (updatedCheckedState[0] === false) setLanguages(0);

    // useEffect(() => {
    //   setTotal();
    // }, [totalPrice, pages, languages]);

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
              {price}
            </>
          </div>
        )
      })}

      {/* {checkedState[0] && index === 0 && (<PageAndLanguages/>)} */}
      <div>
        {!checkedState[0] ? ((pages = 0) && (languages = 0) && (setTotal(0))) :
          (<PageAndLanguages
            pages={pages}
            languages={languages}
            setPages={setPages}
            setLanguages={setLanguages}         
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
