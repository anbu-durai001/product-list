import { ProductSearchFilterActionType } from "../../types/IsProduct";

export const fetchProductSearchFilterRequest = (query) => ({
  type: ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_REQUEST,
  payload: query,
});

export const fetchProductSearchFilterSuccess = (data) => ({
  type: ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_SUCCESS,
  payload: data,
});

export const fetchProductSearchFilterFailure = (error) => ({
  type: ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_FAILURE,
  payload: error,
});