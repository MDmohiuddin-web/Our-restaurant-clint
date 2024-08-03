import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseCart = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=UseAuth()
  // tanstack query to lode
  const { refetch,data: Cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards?email=${user?.email}`)
      return res.data;
    }
  })
  return [Cart,refetch];
};

export default UseCart;
