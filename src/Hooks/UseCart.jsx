import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  // const { data: Cart = [], refetch } = useQuery({
  //   queryKey: ["cart", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/cards?email=${user?.email}`);
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });
  
  const { data: Cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/cards?email=${user?.email}`);
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching cart data:", error) 
        throw new Error("Failed to fetch cart data");
      }
    },
  });

  
  return [Cart, refetch];
};

export default UseCart;
