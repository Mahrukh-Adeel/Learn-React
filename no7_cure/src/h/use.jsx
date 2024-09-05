import { useEffect, useState } from "react";
function useInfo(c){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c}.json`)
        .then((res)=> res.json)
        .then((res)=>setData(res[c]))
    },[c])
    return data
}
export default useInfo;