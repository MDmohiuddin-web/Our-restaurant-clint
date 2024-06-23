import { Link } from "react-router-dom";
import im from "../assets/Resources/home/slide1.jpg";

const Cardcheprecomendet = () => {
  return (
    <>
      <div className="md:w-1/3 m-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---Should Try---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          CHEF RECOMMENDS
        </h2>
      </div>
      {/*  */}
      <div className="w-4/5 m-auto my-5 gap-5 flex flex-wrap ">
        {/* 1 */}

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={im} className="w-full h-60 object-cover" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center mt-5">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

            <div className="card-actions justify-center">
              <Link class="bg-white text-[#D99904] mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-[#D99904] z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
                <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
                add to cart
              </Link>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={im} className="w-full h-60 object-cover" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center mt-5">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

            <div className="card-actions justify-center">
              <Link class="bg-white text-[#D99904] mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-[#D99904] z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
                <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
                add to cart
              </Link>
            </div>
          </div>
        </div>
        {/* 3 */}

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={im} className="w-full h-60 object-cover" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center mt-5">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

            <div className="card-actions justify-center">
              <Link class="bg-white text-[#D99904] mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-[#D99904] z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
                <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
                add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcheprecomendet;
