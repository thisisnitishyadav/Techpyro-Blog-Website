import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { addblogFailure, addblogStart, addblogSuccess} from "./blogRedux";




export const addblog = async(query={},limit=15, dispatch, page) =>{
  try{
    console.log(query,limit,page)
    dispatch(addblogStart());
    const obj = {
    "query":query,
    "options": {
      "collation": "",
      "sort": "",
      "populate": "",
      "projection": "",
      "lean": false,
      "leanWithId": true,
      "page": page,
      "limit":limit,
      "useEstimatedCount": false,
      "useCustomCountFn": false,
      "forceCountFn": false,
      "pagination": true,
      "read": {},
      "options": {}
    },
    "isCountOnly": false
  }

  
  const res = await publicRequest.post("/userapp/blog/list", obj);
  console.log(obj);
       dispatch(addblogSuccess(res.data));
       return res;
        console.log(res.data)
    }catch(err){
        dispatch(addblogFailure());
    }

}