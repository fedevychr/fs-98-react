import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  filter: '',
};

const mailboxSlice = createSlice({
  // Ім'я слайсу
  name: 'mailbox',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload); // 1️⃣
      // state.users = [...state.users, action.payload]; // 2️⃣
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload); // 1️⃣
      // const userIndex = state.users.findIndex(user => user.id === action.payload);
      // state.users.splice(userIndex, 1); // 2️⃣
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addUser, deleteUser, setFilter } = mailboxSlice.actions;

// const addUser = (payload) => ({ type: 'mailbox/ADD_USER', payload});
// addUser({ id: 1, name: 'York', email: 'york@i.ua' }) ->
// { type: 'mailbox/ADD_USER', payload: { id: 1, name: 'York', email: 'york@i.ua' } }

// Редюсер слайсу
export const mailboxReducer = mailboxSlice.reducer;

// export const mailboxReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'mailbox/ADD_USER': {
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     }
//     case 'mailbox/DELETE_USER': {
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.payload),
//       };
//     }
//     case 'mailbox/SET_FILTER': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

// INITIAL_STATE.filter = 'marik'; - мутабельний ❌
// {...state, filter: 'marik'} - іммутабельний ✅
