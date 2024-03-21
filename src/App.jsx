import { useEffect, useState } from 'react';
import DrinksCounter from './components/DrinksCounter/DrinksCounter';
import DrinksValues from './components/DrinksValues/DrinksValues';
// import MailBox from './components/MailBox/MailBox';

// import meestExpressUsers from './meestExpress.json';
// import novaPoshtaUsers from './novaPoshta.json';
// import ukrPoshtaUsers from './ukrPoshta.json';

const initialDrinks = { beer: 0, whisky: 0, wine: 0 };

function App() {
  // const [counter, setCounter] = useState(0);
  const [drinks, setDrinks] = useState(() => {
    const stringifiedDrinks = localStorage.getItem('drinksValues');
    const parsedDrinks = JSON.parse(stringifiedDrinks) ?? initialDrinks;
    return parsedDrinks;
  });
  const [isVisibleBar, setIsVisibleBar] = useState(false);

  const handleLogDrink = drinkName => {
    // drinkName -> 'beer' | 'whisky' | 'wine'
    if (drinks[drinkName] === 2 && drinkName === 'beer') {
      alert(
        'Sorry, you exceeded the beer limit. Please, choose another drink!',
      );
      return;
    }
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const handleResetDrinks = () => {
    setDrinks(initialDrinks);
  };

  const onToggleMiniBarVisibility = () => {
    setIsVisibleBar(!isVisibleBar);
  };

  // const drinksTotal = drinks.beer + drinks.whisky + drinks.wine;
  const drinksTotal = Object.values(drinks).reduce(
    (acc, curr) => acc + curr,
    0,
  );

  // useEffect(() => {
  //   if (drinksTotal === 0) {
  //     console.log('App was mounted');
  //   } else {
  //     console.log(`Total drinks values - ${drinksTotal} y.o`);
  //   }
  // }, [drinksTotal]);

  useEffect(() => {
    localStorage.setItem('drinksValues', JSON.stringify(drinks));
  }, [drinks]);

  return (
    <div>
      <button onClick={onToggleMiniBarVisibility}>
        {isVisibleBar ? 'Hide' : 'Show'} mini-bar
      </button>
      {isVisibleBar && (
        <>
          <DrinksValues drinks={drinks} total={drinksTotal} />
          <DrinksCounter
            total={drinksTotal}
            handleResetDrinks={handleResetDrinks}
            onToggleMiniBarVisibility={onToggleMiniBarVisibility}
            handleLogDrink={handleLogDrink}
          />
        </>
      )}
    </div>
  );
}

export default App;
