import { useEffect, useState } from "react";
import { services } from "./services";
import { PageAndLanguages } from "./components/PageAndLanguages";
import { Form } from "./components/Form";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  
  
  const [total, setTotal] = useState(useLocalStorage(total, 0))

  let [pages, setPages] = useState(0);
  let [languages, setLanguages] = useState(1);

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );
  

  const [formPrice, setFormPrice] = useState(0);



  const onCheckboxSelected = (index) => {
    let updatedCheckedState = [...checkedState];
    updatedCheckedState[index] = !updatedCheckedState[index];
    if (!updatedCheckedState[0]) {

      setPages(0);
      setLanguages(1);
    }
    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState) {
          return sum + services[index].price;
        }
        return sum;
      },
      0);

    setFormPrice(totalPrice);
  }
  useEffect(() => {
    calculateTotalPrice();
  }, [checkedState, languages, pages]);

  const calculateTotalPrice = () => {
    const subtotalWeb = (pages * languages) * 30;
    const total = subtotalWeb + formPrice;

    setTotal(total);
  }

  const printPrice = (price) => `${price}`;

  return (
    <div>
      <h2>Què vols fer?</h2>
      {services.map(({ name, price }, index) => {
        return (
          <div>

            <Form
              key={index}
              index={index}
              price={price}
              id={index}
              onCheck={onCheckboxSelected}
              onChange={setTotal(e.target.value)}
            />
            <div>
              {name}
            </div>
            {price}

          </div>
        )
      })}

      <div>
        {!checkedState[0] ? ((pages = 0) && (languages = 0) && (setTotal(0))) :
          (<PageAndLanguages
            key={services.length}
            pages={pages}
            languages={languages}
            setPages={setPages}
            setLanguages={setLanguages}
          />)
        }

      </div>
      <div>
        <div>Total:
          {printPrice(total)}
        </div>
      </div>
    </div>
  );

}
