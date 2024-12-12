import { ProductActionType } from "../../types/IsProduct";
import { ProductInitialState } from "./InitialState";

const ProductReducer = (state=ProductInitialState, action)=>{
  console.log('..action', action)
  switch(action.type){
    case ProductActionType.FETCH_PRODUCT_REQUEST:
      return{
        ...state,
        data:null,
        message:null,
      }
    case ProductActionType.FETCH_PRODUCT_SUCCESS:
      return{
        ...state,
        data:action.payload,
        message:action.payload,
      }
    case ProductActionType.FETCH_PRODUCT_FAILURE:
      return{
        ...state,
        data:null,
        message:action.payload,
      }
    default:
      return state;
  }
};

export {ProductReducer};