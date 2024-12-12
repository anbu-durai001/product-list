import { ProductCategoryActionType } from "../../types/IsProduct";

export const fetchProductCategoryRequest = () => ({
  type: ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_REQUEST,
});

export const fetchProductCategorySuccess = (data) => ({
  type: ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_SUCCESS,
  payload: data,
});

export const fetchProductCategoryFailure = (error) => ({
  type: ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_FAILURE,
  payload: error,
});