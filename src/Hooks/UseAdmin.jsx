import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseAdmin = () => {
    const { user } = UseAuth();
    // console.log(user)
    const axiosSecure=UseAxiosSecure()
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
       
        queryFn: async() =>{
            // console.log('asking or checking is admin?', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin
        },
       
    })
    return [isAdmin]
};

export default UseAdmin;