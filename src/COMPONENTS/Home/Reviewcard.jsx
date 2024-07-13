import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import nota from "../../assets/Resources/notition.svg";


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Reviewcard = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // fetch("review.json")
    fetch("http://localhost:4050/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="md:w-1/3 m-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---What Our Clients Say---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          TESTIMONIALS
        </h2>
      </div>
      {/*  */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-10 md:w-1/2 m-auto p-10 "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div
              className="text-center md:p-20 p-14
                "
            >
              <div className="rating">
                <Rating style={{ maxWidth: 180 }} value={review.rating } readOnly />
              </div>
              {/*  */}
              <img src={nota} alt="" className="w-20 h-20 mx-auto mb-5" />
              <p className="my-5">{review.details}</p>
              <h3 className="text-[#D99904] text-2xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviewcard;
