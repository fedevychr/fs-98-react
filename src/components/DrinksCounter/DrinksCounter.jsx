import { useEffect } from 'react';

/*
Реакція на події життєвого циклу:

1. Реакція на монтування компоненти
  - Надсилання НТТР запитів одразу після рендеру компоненти.
  - Зчитування даних з локалстореджу.
  - Встановити setTimeout|setInterval.
  - Вішаються глобальні слухачі події window.addEventListener.

2. Реакція на ДЕмонтування компоненти:
  - Відхиляти НТТР запитів перед демонтування компоненти.
  - Очищувати setTimeout|setInterval -> clearTimeout|clearInterval.
  - Знімаються глобальні слухачі події window.addEventListener. 

3. Реакція на ОНОВЛЕННЯ компоненти:
  - Надсилання НТТР запитів одразу після ОНОВЛЕННЯ компоненти.
  - Оновлюємо(синхронізуємо) дані з локалстореджу.
  - Виконуватися ефекти на реакцію оновлення.
*/

const DrinksCounter = ({
  handleResetDrinks,
  onToggleMiniBarVisibility,
  handleLogDrink,
  total,
}) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        onToggleMiniBarVisibility();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onToggleMiniBarVisibility]);

  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>🍺 Beer</button>
      <button onClick={() => handleLogDrink('whisky')}>🥃 Whisky</button>
      <button onClick={() => handleLogDrink('wine')}>🍷 Wine</button>
      {total !== 0 && <button onClick={handleResetDrinks}>Reset</button>}
    </div>
  );
};

export default DrinksCounter;
