import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:4050",
     
})

const UseAxiosSecure = () => {
    return axiosSecure;
    
};

export default UseAxiosSecure;