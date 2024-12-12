import { ProductSearchFilterActionType } from "../../types/IsProduct";
import { ProductSearchFilterInitialState } from "./InitialState";

const ProductSearchFilterReducer = (state=ProductSearchFilterInitialState, action)=>{
  console.log('..action', action)
  switch(action.type){
    case ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_REQUEST:
      return{
        ...state,
        searchList:null,
        message:null,
      }
    case ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_SUCCESS:
      return{
        ...state,
        searchList:action.payload,
        message:action.payload,
      }
    case ProductSearchFilterActionType.FETCH_PRODUCT_SEARCH_FILTER_FAILURE:
      return{
        ...state,
        searchList:null,
        message:action.payload,
      }
    default:
      return state;
  }
};

export {ProductSearchFilterReducer};