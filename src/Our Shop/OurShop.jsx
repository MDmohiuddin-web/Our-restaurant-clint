import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../Hooks/UseMenu";
import FoodCard from "./Foodscards/FoodCard";

const OurShop = () => {
  const [menu] = UseMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

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

        <TabPanel >
          <div className="gap-5 flex flex-wrap justify-center items-center">
            {
            salad.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
          }
          </div>
          
        </TabPanel>
        <TabPanel >
          <div className="gap-5 flex flex-wrap justify-center items-center">
            {
            pizza.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
          }
          </div>
          
        </TabPanel>
        <TabPanel >
          <div className="gap-5 flex flex-wrap justify-center items-center">
            {
            dessert.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
          }
          </div>
          
        </TabPanel>
        <TabPanel >
          <div className="gap-5 flex flex-wrap justify-center items-center">
            {
            soup.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
          }
          </div>
          
        </TabPanel>
        <TabPanel >
          <div className="gap-5 flex flex-wrap justify-center items-center">
            {
            drinks.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
          }
          </div>
          
        </TabPanel>

        

      </Tabs>

      {/*  */}
    </div>
  );
};

export default OurShop;
