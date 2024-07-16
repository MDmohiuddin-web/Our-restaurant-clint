import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import toast from "react-hot-toast";
 

const Profile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const UpdatephotoURL = form.UpdatephotoURL.value;
    const Updatename = form.Updatename.value;
    console.log(Updatename, UpdatephotoURL);
    updateUserProfile(Updatename, UpdatephotoURL)
    .then(() => {
      toast.success("updateUserProfile success full");
        // alert("updateUserProfile success full");

        // window.location.reload();
    })
    .catch((error) => {console.error(error)
      toast.error("updateUserProfile Unsuccess full");
    }) 

  };
  return (
    <div className="  py-32  "> 
      <div className="flex m-auto  flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-white dark:bg-white text-gray-100 dark:text-gray-800">
        <img
          className="rounded-lg"
          defaultValue={user?.photoURL}
          src={
            user?.photoURL || "https://source.unsplash.com/150x150/?portrait?3"
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
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Username
                  </label>
                  <input
                  required
                    type="text"
                    name="Updatename"
                    placeholder="Enter Name"
                    defaultValue={user?.displayName}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Image Url
                  </label>
                  <input
                  required
                    type="text"
                    name="UpdatephotoURL"
                    placeholder="Image Url"
                    defaultValue={user?.photoURL}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />
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
