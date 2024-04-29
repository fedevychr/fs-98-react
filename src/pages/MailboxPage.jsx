import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import MailBox from '../components/MailBox/MailBox';
import MailBoxForm from '../components/MailBoxForm/MailBoxForm';

// import meestExpressUsers from '../meestExpress.json';
// import novaPoshtaUsers from '../novaPoshta.json';
// import ukrPoshtaUsers from '../ukrPoshta.json';

/*
Алгоритм встановлення і роботи з редаксом:

1. Встановити бібліотеки redux and redux-toolkit
2. Створити store та підключити його до <Provider>...</Provider>
3. Створити базовий reducer та продумати його початковий стан (INITIAL_STATE)
4. Підписатися на дані із store прямо в компоненті за допомогою (useSelector)
5. Продумати, як буде виглядати наш об'єкт інструкції (action) та що йому потрібно
6. Отримати функцію dispatch за допомогою (useDispatch)
7. Надіслати об'єкт інструкції dispatch(action)
8. Прописати логіку опрацювання цієї інструкції в reducer.

Store - це місце, де зберігаються та опрацьовуються дані (one source of truth)

dispatch - це функція, яка відправляє комапнду(action) в reducer

action - це об'єкт, який має як мінімум містити поле type, може містити ще якусь 
  корисну інформацію в полі payload (об'єкт інструкції)

reducer - це чиста функція, яка приймає state, action і повертає змінений, або незмінений state

*/

function MailboxPage() {
  // const [users, setUsers] = useState(() => {
  //   const stringifiedUsers = localStorage.getItem('users');
  //   if (!stringifiedUsers) return meestExpressUsers;

  //   const parsedUsers = JSON.parse(stringifiedUsers);
  //   return parsedUsers;
  // });

  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.mailbox.users);
  const filter = useSelector(state => state.mailbox.filter);
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  const onAddUser = formData => {
    // formData -> { "userEmail": "user@example.com" }
    // state -> { "id": "1", "userEmail": "user@example.com" }
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    const action = {
      type: 'mailbox/ADD_USER',
      payload: finalUser,
    };

    dispatch(action);

    // setUsers([...users, finalUser]);
    // setUsers(prevState => [...prevState, finalUser]);
  };

  const onDeleteUser = userId => {
    const action = { type: 'mailbox/DELETE_USER', payload: userId };

    dispatch(action);

    // setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const onChangeFilter = event => {
    const action = { type: 'mailbox/SET_FILTER', payload: event.target.value };

    dispatch(action);
    // setFilter(event.target.value);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter(user => {
        // for (let i = 0; i < 1_000_000_000; i++) {}

        return (
          user.userName.toLowerCase().includes(filter.toLowerCase()) ||
          user.userEmail.toLowerCase().includes(filter.toLowerCase())
        );
      }),
    [filter, users],
  );

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <section>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
          Click to increment counter
        </button>
      </section>

      <section>
        <h2>Search users by email or username</h2>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChangeFilter}
        />
      </section>
      <MailBox
        users={filteredUsers}
        onDeleteUser={onDeleteUser}
        boxTitle="Meest Express"
      />
    </div>
  );
}

export default MailboxPage;
