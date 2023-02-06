import { BorderText, Button } from "../styled";



export function PageAndLanguages({

  pages, controlPages, setPages, languages, controlLanguages, setLanguages

}) {

  const addPages = () => {
    setPages((counter) => counter + 1);
  };

  const removePages = () => {
    setPages((counter) => counter > 0 ? counter - 1 : counter = 0);
  };

  const addLanguages = () => {
    setLanguages((counter) => counter + 1);
  };

  const removeLanguages = () => {
    setLanguages((counter) =>
      counter > 0 ? counter - 1 : counter = 0);
  };

  function controlPages(event) {
    setPages(event.target.value)
      ;
  }

  function controlLanguages(event) {
    setLanguages(event.target.value);
  }
  
  return (
    <BorderText>
      <>
        <div>
          <b>Pàgina web</b>

          <div>
            Pàgines
            <Button onClick={addPages}>+</Button>
            <input
              type="number"
              min="0" max="1000" step="1"
              name="pages"
              value={pages}
              onChange={controlPages}

            />
            <Button onClick={removePages}>-</Button>
          </div>
          Idiomes
          <Button onClick={addLanguages}>+</Button>
          <input
            type="number"
            min="1" max="1000" step="1"
            name="languages"
            value={languages}
            onChange={controlLanguages}
          />
          <Button onClick={removeLanguages}>-</Button>
        </div>
      </>
    </BorderText>);
}

//rfce//
