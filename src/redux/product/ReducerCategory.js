import { ProductCategoryActionType } from "../../types/IsProduct";
import { ProductCategoryInitialState } from "./InitialState";

const ProductCategoryReducer = (state=ProductCategoryInitialState, action)=>{
  console.log('..action', action)
  switch(action.type){
    case ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_REQUEST:
      return{
        ...state,
        list:null,
        message:null,
      }
    case ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_SUCCESS:
      return{
        ...state,
        list:action.payload,
        message:action.payload,
      }
    case ProductCategoryActionType.FETCH_PRODUCT_CATEGORY_FAILURE:
      return{
        ...state,
        list:null,
        message:action.payload,
      }
    default:
      return state;
  }
};

export {ProductCategoryReducer};