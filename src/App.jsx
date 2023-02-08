import { useEffect, useState } from "react";
import { services } from "./services";
import { PageAndLanguages } from "./components/PageAndLanguages";
import { Form } from "./components/Form";
import { Background } from "./styled";

export default function App() {
  let [pages, setPages] = useState(
    localStorage.getItem("pages") !== null
      ? parseInt(localStorage.getItem("pages"))
      : 0
  );
  let [languages, setLanguages] = useState(
    localStorage.getItem("languages") !== null
      ? parseInt(localStorage.getItem("languages"))
      : 1
  );

  const [checkedState, setCheckedState] = useState(
    localStorage.getItem("checkedState") !== null
      ? JSON.parse(localStorage.getItem("checkedState"))
      : new Array(services.length).fill(false)
  );
  const [total, setTotal] = useState(
    localStorage.getItem("total") !== null
      ? parseInt(localStorage.getItem("total"))
      : 0
  );
  const [formPrice, setFormPrice] = useState(
    localStorage.getItem("formPrice") !== null
      ? parseInt(localStorage.getItem("formPrice"))
      : 0
  );

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
      0
    );

    setFormPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
    localStorage.setItem("total", total);
    localStorage.setItem("pages", pages);
    localStorage.setItem("languages", languages);
    localStorage.setItem("checkedState", JSON.stringify(checkedState));
    localStorage.setItem("formPrice", formPrice);
  }, [checkedState, languages, pages, total]);

  const calculateTotalPrice = () => {
    const subtotalWeb = (pages * languages) * 30;
    const total = subtotalWeb + formPrice;

    setTotal(total);
  };

  const printPrice = (price) => `${price}`
  return (
    <Background>
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
    </Background>
  );

}
