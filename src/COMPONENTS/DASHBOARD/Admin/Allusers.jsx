import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const HandelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D99904",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#D99904",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mx-auto w-4/5 h-svh ">
      <div className="md:w-1/3 m-auto p-5 text-center mx-auto">
        <p className="text-[#D99904] text-xl">---How many Users ?---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          MANAGE ALL USERS
        </h2>
      </div>
      {/* table start */}

      <div>
        <div className="flex justify-start font-bold ">
          <h2>TOTAL USERS :{users.length} </h2>
          {/* <h2>TOTAL PRICE :$ {TotalPrice} </h2> */}
          {/* <button className="btn text-white bg-[#D1A054]">Pay</button> */}
        </div>

        <div className="overflow-x-auto capitalize my-5  md:h-[530px]">
          <table className="table  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-t-md  ">
              <tr>
                <th>
                  <label>{/* <h4>NO : </h4> */}</label>
                </th>

                <th>Name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="mt-2 ">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:shadow-md duration-300  border-none"
                >
                  <th>
                    <label>
                      <h4>{index + 1}</h4>
                    </label>
                  </th>

                  <td>
                    <h2>{user.name}</h2>
                  </td>
                  <td> {user.email}</td>
                  <td> role</td>
                  <th>
                    <button
                      onClick={() => HandelDelete(user._id)}
                      className="btn bg-red-600  text-white"
                    >
                      Delete <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
