import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCart = () => {
    const axiosSecure=UseAxiosSecure()
  // tanstack query to lode
  const { refetch,data: Cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cards");
      return res.data;
    }
  })
  return [Cart,refetch];
};

export default UseCart;
