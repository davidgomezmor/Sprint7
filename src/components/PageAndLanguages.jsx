export function PageAndLanguages({
  pages, controlPages, languages, controlLanguages
}) {

  return (
    <>
      <div>
        <b>Pàgina web</b>

        <div>
          Pàgines <input
            type="number"
            min="1" max="1000" step="1"
            name="pages"
            value={pages}
            onChange={controlPages}
            
          />

        </div>
        <div>
        </div>
        Idiomes   <input
          // disabled="true"
          type="number"
          min="1" max="1000" step="1"
          name="languages"
          value={languages}
          onChange={controlLanguages}
        />
      </div>

    </>

  )
}

//rfce//