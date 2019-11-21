import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import MakeFormModule from './modules/MakeForm';
import FormElementModule from './modules/FormElement';

// rootReducer の準備
const rootReducer = combineReducers({
  MakeForm: MakeFormModule.reducer,
  FormElement: FormElementModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
};
