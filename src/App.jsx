import { useState, useEffect } from "react";
import { services } from "./services"
import { PageAndLanguages } from "./components/PageAndLanguages";
import { Title, Style, Body, Price } from "./styled"



export default function App() {

  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false),
  );
  const [total, setTotal] = useState(0);

  function controlPages(e) {
    setPages(e.target.value);
  }

  function controlLanguages(e) {
    setLanguages(e.target.value);

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

    setTotal((checkedState[0] && index === 0) ? (totalPrice + (pages * languages * 30)) : (totalPrice));

  };
  const printPrice = (price) => `${price} €`;
  return (
    <Body>
      <div>
        <Title><h2>Què vols fer?</h2></Title>
        {services.map(({ name, price }, index) => {
          return (
            <Style>
              <input
                key={index}
                type="checkbox"
                id={index}
                checked={checkedState[index]}
                onChange={() => controlChanges(index)}
              />
              {` ${name} `}

              ({printPrice(price)})
            </Style>
          )
        })}
        {/* {checkedState[0] && index === 0 && (<PageAndLanguages/>)} */}
          <PageAndLanguages
            pages={pages}
            languages={languages}
            controlPages={controlPages}
            controlLanguages={controlLanguages}
          />
        <Style>
          <Price>Preu:
            {printPrice(` ${total}`)}
            {setTotal}</Price>
        </Style>
      </div>
    </Body>
  );


}
