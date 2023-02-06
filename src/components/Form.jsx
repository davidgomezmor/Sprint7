export function Form ({
  index, text, onCheck, checkedState
}) {
  return (
    <div key={index}>
      <input
        type="checkbox"
        name={text}
        checked={checkedState}
        onChange={() => onCheck(index)}
      />
    </div>
  );
}