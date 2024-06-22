import { useEffect, useState } from "react";
import Manuitem from "./Manuitem";
import { Link } from "react-router-dom";


const Populermenu = () => {
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setPopular(data.filter(item=>item.category==='popular')))
    },[])


    return (
        <div className="md:w-[80%] m-auto flex flex-wrap gap-5 ">
            {
                popular.map(item=><Manuitem key={item._id}
                item={item}
                ></Manuitem>)
            }

            <Link to='/OurMenu' className="btn btn-success bg-white border-b-2 border-black mx-auto">View Full  Menu</Link>

            
        </div>
    );
};

export default Populermenu;