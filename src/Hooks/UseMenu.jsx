import { useEffect, useState } from "react";


const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
       {
        // const popular = data.filter((item) => item.category === "popular")
        // setMenu(popular)

        setMenu(data)
        setLoading(false)

        // alter native method
        // setPopular(data.filter((item) => item.category === "popular"))
       }
      );
  }, []);
  return [menu, loading];
};

export default UseMenu;