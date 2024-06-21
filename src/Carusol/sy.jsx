import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/Resources/home/slide1.jpg";
import img2 from "../assets/Resources/home/slide2.jpg";
import img3 from "../assets/Resources/home/slide3.jpg";
import img4 from "../assets/Resources/home/slide4.jpg";
import img5 from "../assets/Resources/home/slide5.jpg";





const Sy = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      speed={400}
      
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-10 md:w-4/5 m-auto "
    >
      <SwiperSlide>
        
        <img src={img1} className="w-4/5 m-auto"  alt="" />
        <h3 className="md:text-4xl text-center -mt-16 mb-5 text-white">salads</h3>
      
      </SwiperSlide>

      <SwiperSlide>
        
        <img src={img2}  className="w-4/5 m-auto" alt="" />
      
        <h3 className="md:text-4xl text-center -mt-16 mb-5 text-white">pizzas</h3>
      </SwiperSlide>

      <SwiperSlide>
        
        <img src={img3}  className="w-4/5 m-auto" alt="" />
        <h3 className="md:text-4xl text-center -mt-16 mb-5 text-white">Soups</h3>
      
      </SwiperSlide>

      <SwiperSlide>
        
        <img src={img4}  className="w-4/5 m-auto" alt="" />
        <h3 className="md:text-4xl text-center -mt-16 mb-5  text-white">desserts</h3>
      
      </SwiperSlide>

      <SwiperSlide>
        
        <img src={img5}  className="w-4/5 m-auto" alt="" />
        <h3 className="md:text-4xl text-center -mt-16 mb-5 text-white">salads</h3>
      
      </SwiperSlide>

      
    </Swiper>
  );
};

export default Sy;
