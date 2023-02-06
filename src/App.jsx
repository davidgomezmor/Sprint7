import { useEffect, useState } from "react";
import { services } from "./services";
import { PageAndLanguages } from "./components/PageAndLanguages";
import { Form } from "./components/Form";

export default function App() {

  let [pages, setPages] = useState(0);
  let [languages, setLanguages] = useState(1);

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );
  const [total, setTotal] = useState(0);
  const [formPrice, setFormPrice] = useState(0);
  
  useEffect(() => {
    calculateTotalPrice();
  }, [checkedState, languages, pages]);

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
