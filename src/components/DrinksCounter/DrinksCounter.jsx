const DrinksCounter = ({ handleLogDrink }) => {
  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>🍺 Beer</button>
      <button onClick={() => handleLogDrink('whisky')}>🥃 Whisky</button>
      <button onClick={() => handleLogDrink('wine')}>🍷 Wine</button>
    </div>
  );
};

export default DrinksCounter;
