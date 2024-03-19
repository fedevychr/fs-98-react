import { useState } from 'react';
import DrinksCounter from './components/DrinksCounter/DrinksCounter';
import DrinksValues from './components/DrinksValues/DrinksValues';
// import MailBox from './components/MailBox/MailBox';

// import meestExpressUsers from './meestExspess.json';
// import novaPoshtaUsers from './novaPoshta.json';
// import ukrPoshtaUsers from './ukrPoshta.json';

function App() {
  const [counter, setCounter] = useState(0);
  const [drinks, setDrinks] = useState({ beer: 0, whisky: 0, wine: 0 });

  // const key = 'label';
  // const obj = {
  // label: 'Some text',
  // field: 'Some text field',
  // };

  // obj.label; // 'Some text'
  // obj[key]; // 'Some text'

  const handleLogDrink = drinkName => {
    // drinkName -> 'beer' | 'whisky' | 'wine'
    if (drinks[drinkName] === 2 && drinkName === 'beer') {
      alert('Sorry, you exceded the beer limit. Please, choose another drink!');
      return;
    }
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    if (counter === 0) return;

    setCounter(counter - 1);
  };

  const drinksTotal = drinks.beer + drinks.whisky + drinks.wine;

  return (
    <div>
      <button onClick={handleIncrementCounter}>Counter: {counter}</button>
      <button onClick={handleDecrementCounter}>-</button>
      <DrinksValues drinks={drinks} total={drinksTotal} />
      <DrinksCounter handleLogDrink={handleLogDrink} />
    </div>
  );
}

export default App;
