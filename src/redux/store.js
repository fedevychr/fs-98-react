import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { mailboxReducer } from './mailbox/mailboxReducer';
import { timerReducer } from './timer/timerSlice';

const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'],
  // blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    mailbox: persistReducer(mailboxPersistConfig, mailboxReducer),
    countDownTimer: timerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
