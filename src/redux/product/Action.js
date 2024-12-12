import {action} from "typesafe-actions";
import { ProductActionType } from "../../types/IsProduct";

export const fetchProductDataRequest = (finalPayload)=>({
  type: ProductActionType.FETCH_PRODUCT_REQUEST,
  payload: finalPayload,
});

export const fetchProductDataSuccess = (data) => ({
    type: ProductActionType.FETCH_PRODUCT_SUCCESS,
    payload: data,
  });
  
  export const fetchProductDataFailure = (message) => ({
    type: ProductActionType.FETCH_PRODUCT_FAILURE,
    payload: message,
  });
