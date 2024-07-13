import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "./Foodscards/FoodCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const checkArray = (array, checkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += checkSize) {
    result.push(array.slice(i, i + checkSize));
  }
  return result;
};

const OurShop = () => {
  const [menu] = UseMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

  const pagination = {
    
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Check the items into arrays of 6 items each
  const SaladItems = checkArray(salad, 6);
  const pizzaItems = checkArray(pizza, 6);
  const drinksItems = checkArray(drinks, 6);
  const dessertItems = checkArray(dessert, 6);
  const soupItems = checkArray(soup, 6);

  return (
    <div>
      {/*  */}
      <div className=" mb-10 OurShop_img md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">OurShop</h3>
          <p className="text-gray-50">Would you like to try a dish?</p>
        </div>
      </div>

      {/*  */}

      <Tabs className="md:w-4/5 m-auto p-5 text-center ">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper "
          >
            {SaladItems.map((chunk, index) => (
              <SwiperSlide key={index} >
                <div className="gap-5 flex flex-wrap justify-center items-center my-10">
                  {chunk.map((item) => (
                    <FoodCard item={item} key={item._id}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TabPanel>
        <TabPanel>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {pizzaItems.map((chunk, index) => (
              <SwiperSlide key={index} >
                <div className="gap-5 flex flex-wrap justify-center items-center my-10">
                  {chunk.map((item) => (
                    <FoodCard item={item} key={item._id}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </TabPanel>
        <TabPanel>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {soupItems.map((chunk, index) => (
              <SwiperSlide key={index} >
                <div className="gap-5 flex flex-wrap justify-center items-center my-10">
                  {chunk.map((item) => (
                    <FoodCard item={item} key={item._id}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TabPanel>
        <TabPanel>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dessertItems.map((chunk, index) => (
              <SwiperSlide key={index} >
                <div className="gap-5 flex flex-wrap justify-center items-center my-10">
                  {chunk.map((item) => (
                    <FoodCard item={item} key={item._id}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TabPanel>
        <TabPanel>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {drinksItems.map((chunk, index) => (
              <SwiperSlide key={index} >
                <div className="gap-5 flex flex-wrap justify-center items-center my-10">
                  {chunk.map((item) => (
                    <FoodCard item={item} key={item._id}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TabPanel>
      </Tabs>

      {/*  */}
    </div>
  );
};

export default OurShop;
