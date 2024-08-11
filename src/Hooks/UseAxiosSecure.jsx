import axios from "axios";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
    baseURL: "http://localhost:9585",
     
})

const UseAxiosSecure = () => {
    const navigate=useNavigate();
    const {logOut} = useContext(AuthContext);
    // interceptor
    axiosSecure.interceptors.request.use((config) => {
        // stop all request if token is not available
        // return config; 

        // console.log("request sent");
        // get token from local storage
        const token = localStorage.getItem("access-token");
        console.log('request stop by interceptor',token);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    });
    // interceptor response
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            const status = error.response.status;
        // console.log('status error in the interceptors', status);
        //for 401 or 403 logout the user and navigate the user to login page

        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
    
};

export default UseAxiosSecure;