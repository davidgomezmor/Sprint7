export function Form({
    index,
    text,
    price,
    onCheck,
    checkedState,
    getFormattedPrice,
  }) {
    
    return (
      <div key={index}>
        <div>
          <input
            type="checkbox"
            id={index}
            name={text}
            value={text}
            checked={checkedState}
            onChange={() => onCheck(index)}
          />
          <label>
            {text} {getFormattedPrice(price)}
          </label>
        </div>
      </div>
    );
  }
  