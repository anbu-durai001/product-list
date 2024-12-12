import { put, takeLatest, fork, call, all } from "redux-saga/effects";
import { fetchProductDataSuccess, fetchProductDataFailure } from "../redux/product/Action";
import { fetchProductCategorySuccess, fetchProductCategoryFailure} from '../redux/product/ActionCategory';
import { fetchProductFilterCategorySuccess, fetchProductFilterCategoryFailure} from '../redux/product/ActionFilterCategory';
import { fetchProductSearchFilterSuccess, fetchProductSearchFilterFailure} from '../redux/product/ActionSearchFilter';
import { ProductActionType, ProductCategoryActionType, ProductFilterCategoryActionType, ProductSearchFilterActionType } from "../types/IsProduct";
import { fetchProductList, fetchProductCategory, fetchProductCategoryFilter, fetchProductSearchList } from "../services/api";

function* fetchProductData(action){
  try{
    console.log('data...', action.payload)
    const response = yield call(fetchProductList);
    console.log('data...', response)
    if(response){
      yield put(fetchProductDataSuccess(response));
    }else{
      const error = yield response;
      yield put(fetchProductDataFailure(error));
    }

  } catch(error){
    yield put(fetchProductDataFailure(error));
  }
}

function* fetchProductCategoryData(action) {
  try {
    console.log('Fetching Product Categories...');
    const response = yield call(fetchProductCategory);
    console.log('Product Categories Response:', response);

    if (response) {
      yield put(fetchProductCategorySuccess(response));
    } else {
      const error = yield response;
      yield put(fetchProductCategoryFailure(error));
    }
  } catch (error) {
    console.error('Error Fetching Product Categories:', error);
    yield put(fetchProductCategoryFailure(error.message));
  }
}

function* fetchProductCategoryFilterData(action) {
  try {
    console.log('Fetching Product Categories...');
    const response = yield call(fetchProductCategoryFilter, action.payload);
    console.log('Product Categories Response:', response);

    if (response) {
      yield put(fetchProductFilterCategorySuccess(response));
    } else {
      const error = yield response;
      yield put(fetchProductFilterCategoryFailure(error));
    }
  } catch (error) {
    console.error('Error Fetching Product Categories:', error);
    yield put(fetchProductFilterCategoryFailure(error.message));
  }
}

function* fetchProductSearchFilterData(action) {
  try {
    console.log('Fetching Product Categories...');
    const response = yield call(fetchProductSearchList, action.payload);
    console.log('Product Categories Response:', response);

    if (response) {
      yield put(fetchProductSearchFilterSuccess(response));
    } else {
      const error = yield response;
      yield put(fetchProductSearchFilterFailure(error));
    }
  } catch (error) {
    console.error('Error Fetching Product Categories:', error);
    yield put(fetchProductSearchFilterFailure(error.message));
  }
}

export function* watchProductData(){
  yield takeLatest(ProductActionType.FETCH_PRODUCT_REQUEST, fetchProductData);
}

export function* watchProductCategoryData() {
  yield takeLatest(ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_REQUEST, fetchProductCategoryData);
}

export function* watchProductCategoryFilterData() {
  yield takeLatest(ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_REQUEST, fetchProductCategoryFilterData);
}

export function* watchProductSearchFilterData() {
  yield takeLatest(ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_REQUEST, fetchProductSearchFilterData);
}

function* ProductSaga(){
  yield all([fork(watchProductData),fork(watchProductCategoryData), fork(watchProductCategoryFilterData), fork(watchProductSearchFilterData),]);
}

export default ProductSaga;