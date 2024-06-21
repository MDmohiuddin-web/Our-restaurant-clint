import Carusol from "../Carusol/Carusol";
import Sy from "../Carusol/sy";


const Home = () => {
  return (
    <div>
      <Carusol></Carusol>
      <div className="md:w-1/3 m-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---From 11:00am to 10:00pm---</p>
        
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">ORDER ONLINE</h2>
      </div>
      <Sy></Sy>

      <div className="md:w-4/5 m-auto my-10 bg md:h-96 flex justify-center items-center rounded-lg p-10">
      
        
        <div className="bg-white md:w-4/5 p-10 rounded-lg">
        <h3 className="text-center text-2xl my-5 ">Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
        
      </div>

      {/*  */}

      <div className="w-4/5 m-auto my-10 bg-black md:h-96 flex justify-center items-center rounded-lg py-10 text-white">
      <h2 className=" text-xl md:text-6xl">Call Us: +88 0192345678910</h2>
      
      </div>




    </div>
  );
};

export default Home;
