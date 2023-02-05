
import { BorderText, Text } from "../styled"

export function PageAndLanguages({
  pages, controlPages, languages, controlLanguages
}) {
  
  return (
    <BorderText>
    <>
    <Text>
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
          type="number"
          min="1" max="1000" step="1" 
          name="languages"
          value={languages}
          onChange={controlLanguages}
        />
      </div>
      </Text>
    </>
    </BorderText>
  )
}

//rfce//