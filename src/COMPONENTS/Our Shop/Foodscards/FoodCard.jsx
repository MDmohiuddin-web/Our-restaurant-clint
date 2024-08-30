import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure()
  // console.log(location)

  const { user } = UseAuth();
  const [,refetch]=UseCart()

  const addToCart = (food) => {
    if (user && user.email) {
      // console.log(user.email, food);
      //send Cart item to the database
      const CartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // console.log(CartItem);
      // axiosSecure using hook
      axiosSecure
        .post("/cards", CartItem)
        .then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            toast.success(`"${name}" added to Cart successfully`);
            // refetch Cart to update the Cart items count
            refetch();
          } else {
            toast.error(`"${name}" added to Cart Unsuccessfully`);
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    } else {
      toast.error("Please login to add to Cart");
      navigate("/Login", { state: { from: location } });
    }
    // console.log(food);
  };

  //
  return (
    <div className="card max-w-[300px]  bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-60 object-cover " alt="Shoes" />
        <p className="p-2 text-right bg-black text-white absolute right-0 top-5 rounded-l-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center mt-5 h-[280px]">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <Link
            onClick={() => addToCart(item)}
            className="bg-white text-[#D99904] mx-auto rounded-md relative hover:shadow-md border-b-2 border-b-[#D99904] z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-500  cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
          >
            <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-white"></span>
            <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-white"></span>
            add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
