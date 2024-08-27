import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import profilepic from "../../assets/Resources/others/profile.png";
 

const Profile = () => {
  const { updateUserProfile, user,setUser } = useContext(AuthContext);
  // const navigate=useNavigate()

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const UpdatephotoURL = form.UpdatephotoURL.value;
  //   const Updatename = form.Updatename.value;
  //   console.log(Updatename, UpdatephotoURL);
  //   updateUserProfile(Updatename, UpdatephotoURL)
  //   setUser({...user,photoURL:data.photoURL,displayName:data.name})
  //   .then(() => {
  //     toast.success("updateUserProfile success full");
      
  //       // alert("updateUserProfile success full");

  //      navigate("/")
  //   })
  //   .catch((error) => {console.error(error)
  //     toast.error("updateUserProfile Unsuccess full");
  //   }) 

  // };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {  name, photoURL} = data;
    
    updateUserProfile(name, photoURL)
    .then(() => {
      // Update local user state
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL: photoURL,
      }))
  
      toast.success("Profile updated");
      // navigate("/");
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
      toast.error("Profile update failed");
    });
  
  };
  return (
    <div className="  py-32  "> 
      <div className="flex m-auto  flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-white dark:bg-white text-gray-100 dark:text-gray-800">
        <img
          className="rounded-lg"
          defaultValue={user?.photoURL}
          src={
            user?.photoURL ||profilepic
          }
        />
        <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName || "user email not found"}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">
              {user?.email || "user name not found"}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <div className="w-full  m-auto  p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
              <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Username
                  </label>
                  <input 
                  
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />
                  <small className="text-danger text-red-500 ">
                    {errors.name && "This field is required"}
                  </small>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Image Url
                  </label>
                  <input 
                  
                    type="url"
                    name="photoURL"
                    placeholder="Image Url"
                    defaultValue={user?.photoURL}
                    {...register("photoURL", { required: true })}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />
                  <small className="text-red-500 text-danger">
                    {errors.photoURL && "This field is required"}
                  </small>
                </div>

                <button className="bg-yellow-500 text-white  btn border-none  ">
                  update profile
                </button>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
