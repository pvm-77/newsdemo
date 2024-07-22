import axios from "axios";

export const getNews=async(config)=>{
    const response=await axios.get(`https://newsapi.org/v2/everything?q=bitcoin`, config);
    console.log(response)
    return response.data;
}