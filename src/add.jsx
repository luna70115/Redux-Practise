// eslint-disable-next-line react/prop-types
export function Add({ onClick, onChange, value, onAsync }) {
  return (
    <div className="card__bar">
      <input
        className="card__input"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className="card__button" onClick={onClick}>
        Add Amount
      </button>
      <button className="card__button" onClick={onAsync}>
        Add Async
      </button>
    </div>
  );
}
