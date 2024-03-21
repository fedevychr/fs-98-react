// drinks -> {beer: 3, whisky: 2, wine: 1}
import imgReact from '../../assets/images/react.svg';

const DrinksValues = ({ drinks, total }) => {
  return (
    <ul>
      <li>
        React: <img src={imgReact} alt="" />
      </li>
      <li>Beer: {drinks.beer}</li>
      <li>Whisky: {drinks.whisky}</li>
      <li>Wine: {drinks.wine}</li>
      <li>
        Total: <b>{total}</b>
      </li>
    </ul>
  );
};

export default DrinksValues;
