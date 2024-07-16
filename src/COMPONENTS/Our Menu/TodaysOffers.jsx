import React from 'react';
import { Link } from 'react-router-dom';
import UseMenu from '../../Hooks/UseMenu';
import ToDaysOffersCards from './ToDaysOffersCards';

const TodaysOffers = () => {
    const [menu] = UseMenu();
    const offered = menu.filter((item) => item.category === "offered");

    return (
     <div className="my-10 w-full p-5 text-center ">
      <div className="md:w-[80%] m-auto flex flex-wrap gap-5 ">
        
        {offered.map((item) => (
          <ToDaysOffersCards key={item._id} item={item}></ToDaysOffersCards>
        ))}

        
      </div>
      <Link
            to="/OurShop"
          className="bg-white mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-black z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-black transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
        >
          <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
          <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
          ORDER YOUR FAVORITE FOOD
        </Link>
    </div>
    );
};

export default TodaysOffers;