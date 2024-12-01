import { Store } from "redux";
import { persistStore, Persistor, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./redux";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;
export interface ConfiguredStore {
  store: Store;
  persistor: Persistor;
}

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
