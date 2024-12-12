import { ProductFilterCategoryActionType } from "../../types/IsProduct";

export const fetchProductFilterCategoryRequest = (category) => ({
  type: ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_REQUEST,
  payload: category,
});

export const fetchProductFilterCategorySuccess = (data) => ({
  type: ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_SUCCESS,
  payload: data,
});

export const fetchProductFilterCategoryFailure = (error) => ({
  type: ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_FAILURE,
  payload: error,
});