import axios from "axios";
import { useEffect, useState } from "react"

const useGetBooks = (url:string,query:string | undefined,page:number | undefined, online: boolean | undefined, setOnLine: Function | undefined)=>{
    
    const [volumes,setVolumes] = useState([]);

    useEffect(()=>{
        const fetchVolumes = async ()=>{
            console.log(online);
            if(setOnLine)
                setOnLine();
            if(query!==""){
                try{
                    const v = await axios.get(`${url}${query}&startIndex=${page?(page-1)*9:0}&maxResults=${9}`);
                    setVolumes(v.data.items);
                }catch(e){
                        
                }
            }
        }
        fetchVolumes();
    },[url,query,page])

    return {volumes,setVolumes};
}

export default useGetBooks;