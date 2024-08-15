import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";


const UseMenu = () => {
   const axiosPublic=UseAxiosPublic()
  //   const [menu, setMenu] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // fetch("menu.json")
  //   fetch("http://localhost:9585/menu")
  //     .then((res) => res.json())
  //     .then((data) =>
  //      {
  //       // const popular = data.filter((item) => item.category === "popular")
  //       // setMenu(popular)

  //       setMenu(data)
  //       setLoading(false)

  //       // alter native method
  //       // setPopular(data.filter((item) => item.category === "popular"))
  //      }
  //     );
  // }, []);
  const { data: menu = [], isLoading: loading,refetch }= useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });






  return [menu, loading,refetch];
};

export default UseMenu;