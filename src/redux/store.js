import { movieDetailsReducer } from "./moviDetailsReducer";
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
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

  const contactsConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
  //   blacklist: ['contacts', "isError", "isLoading", "productData"],
  };
  
  const movieConfigReducer = persistReducer(contactsConfig, movieDetailsReducer);

export const store = configureStore({
  reducer: movieConfigReducer,
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);