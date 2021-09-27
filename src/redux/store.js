import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import contactsReducer from "./reducers";

const contatcsPersistConfig = {
  key: "contacts",
  storage: storage,
  blacklist: "filter",
};

const store = configureStore({
  reducer: {
    contactsReducer: persistReducer(contatcsPersistConfig, contactsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "contacts/filterContact",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
