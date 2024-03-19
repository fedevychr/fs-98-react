// drinks -> {beer: 3, whisky: 2, wine: 1}

const DrinksValues = ({ drinks, total }) => {
  return (
    <div>
      <li>Beer: {drinks.beer}</li>
      <li>Wisky: {drinks.whisky}</li>
      <li>Wine: {drinks.wine}</li>
      <li>
        Total: <b>{total}</b>
      </li>
    </div>
  );
};

export default DrinksValues;
