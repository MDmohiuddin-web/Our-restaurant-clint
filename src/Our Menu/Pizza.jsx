import React from 'react';
import UseMenu from '../Hooks/UseMenu';
import { Link } from 'react-router-dom';
import PizzaCards from './PizzaCards';

const Pizza = () => {
    const [menu] = UseMenu();
    const pizza = menu.filter((item) => item.category === "pizza");
    return (
    <div className="my-10 w-full p-5 text-center ">

      <div className="md:w-[80%] m-auto flex flex-wrap gap-5 ">
        
        {pizza.map((item) => (
          <PizzaCards key={item._id} item={item}></PizzaCards>
        ))}

       
      </div>
      <Link
      to="/OurShop"
            
          class="bg-white mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-black z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-black transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
        >
          <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
          <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
          ORDER YOUR FAVORITE FOOD
        </Link>
    </div>
    );
};

export default Pizza;