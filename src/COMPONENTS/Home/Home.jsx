import { Link } from "react-router-dom";

import  Carusol from '../Carusol/Carusol' 
import Sy from "../Carusol/sy";
import Cardcheprecomendet from "./Cardcheprecomendet";
import inn from '../../assets/Resources/home/featured.jpg';

import Populermenu from "./Populermenu";
import Reviewcard from "./Reviewcard";

const Home = () => {
  return (
    <div>
      <Carusol></Carusol>
      
      <Sy></Sy>

      <div className="md:w-4/5 m-auto my-10 bg md:h-96 flex justify-center items-center rounded-lg p-10">
        <div className="bg-white md:w-4/5 p-10 rounded-lg">
          <h3 className="text-center text-2xl my-5 ">Bistro Boss</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>

      {/*  */}
      {/*    */}
      <div className="md:w-1/3 m-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---Check it out---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          FROM OUR MENU
        </h2>
      </div>
      <Populermenu></Populermenu>
      {/*  */}
      <div className="w-4/5 m-auto my-10 bg-black md:h-96 flex justify-center items-center rounded-lg py-10 text-white">
        <h2 className=" text-xl md:text-6xl">Call Us: +88 0192345678910</h2>
      </div>
      {/*  */}
      
      {/*  */}
      <Cardcheprecomendet></Cardcheprecomendet>

      <div className=" m-auto my-10 bg_img flex flex-col justify-center items-center rounded-lg p-10">
        <div className=" md:w-4/5 ">
          <div className="md:w-1/3 m-auto p-5 text-center">
            <p className="text-[#D99904] text-xl">---Check it out---</p>
            <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5 text-white">
              FROM OUR MENU
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="md:flex justify-center items-center gap-5 ">
          {/*  */}
          <div className="md:w-[49%] m-auto md:p-5 text-right items-end flex justify-end">
            <img
              src={inn}
              className="h-60 md:w-[60%] object-cover rounded"
              alt=""
            />
          </div>
          {/*  */}
          <div className="md:w-[49%] m-auto md:p-5 text-left text-white space-y-1 mt-4 md:mt-0">
            <h4>March 20, 2023</h4>
            <h4>WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>


            <Link className="btn hover:bg-white hover:text-black bg-transparent px-5 py-2 btn-ghost border-b-2 border-b-white">Read More</Link>
          </div>
        </div>
       
      </div>
     
      <Reviewcard></Reviewcard>


    </div>
  );
};

export default Home;
