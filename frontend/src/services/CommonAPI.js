import { data } from "autoprefixer";
import axios from "axios";

export const commonAPI=async (httpMethod,URL,reqBody) => {
    const reqConfig={
        method:httpMethod,
        url:URL,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    };
    return await axios(reqConfig).then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err;
    });
};