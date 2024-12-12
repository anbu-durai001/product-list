import { ProductFilterCategoryActionType } from "../../types/IsProduct";
import { ProductCategoryFilterInitialState } from "./InitialState";

const ProductCategoryFilterReducer = (state=ProductCategoryFilterInitialState, action)=>{
  console.log('..action', action)
  switch(action.type){
    case ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_REQUEST:
      return{
        ...state,
        filterList:null,
        message:null,
      }
    case ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_SUCCESS:
      return{
        ...state,
        filterList:action.payload,
        message:action.payload,
      }
    case ProductFilterCategoryActionType.FETCH_PRODUCT_CATEGORY_FILTER_FAILURE:
      return{
        ...state,
        filterList:null,
        message:action.payload,
      }
    default:
      return state;
  }
};

export {ProductCategoryFilterReducer};