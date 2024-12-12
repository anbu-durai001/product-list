import { useSelector } from "react-redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {logger} from "redux-logger";
import { ProductInitialState, ProductCategoryInitialState, ProductCategoryFilterInitialState, ProductSearchFilterInitialState } from "./product/InitialState";
import { ProductReducer } from "./product/Reducer";
import { ProductCategoryReducer } from './product/ReducerCategory'; 
import { ProductCategoryFilterReducer } from './product/ReducerCategoryFilter';
import { ProductSearchFilterReducer } from './product/ReducerSearchFilter';
import { rootSaga } from "../sagas/index";

export const initialState = {
  data: ProductInitialState,
  list: ProductCategoryInitialState,
  filterList: ProductCategoryFilterInitialState,
  searchList: ProductSearchFilterInitialState,
},
sagaMiddleware = createSagaMiddleware(),
rootReducer = combineReducers({
  ProductReducer,
  ProductCategoryReducer,
  ProductCategoryFilterReducer,
  ProductSearchFilterReducer,
}),

store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);
export const useTypedSelector = useSelector;

export default store;