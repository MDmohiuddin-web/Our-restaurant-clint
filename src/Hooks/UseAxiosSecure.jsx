import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: "http://localhost:9585",
     
})

const UseAxiosSecure = () => {
    return axiosSecure;
    
};

export default UseAxiosSecure;