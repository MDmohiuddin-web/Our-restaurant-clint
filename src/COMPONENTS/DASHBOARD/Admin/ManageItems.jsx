import { FaTrash } from "react-icons/fa6";
import UseMenu from "../../../Hooks/UseMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, ,refetch] = UseMenu();
  const axiosSecure = UseAxiosSecure();

  const HandelDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D99904",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //make delete request
       const res=await axiosSecure.delete(`/menu/${item._id}`);
       console.log(res.data);
       if (res.data.deletedCount > 0) {
        refetch()
        // refetch data for updating the data
          // show success popup
          Swal.fire({
            
            title:`${item.name} is deleted`,
            
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
       
       
      }
    });
  };

  const HandelUpdate = (item) => {
    console.log(item);
  };

  return (
    <div className="mx-auto w-[90%] h-svh ">
      <div className="md:w-1/2 m-auto p-5 text-center mx-auto">
        <p className="text-[#D99904] text-xl">---Hurry Up!---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          MANAGE ALL ITEMS
        </h2>
      </div>
      {/* table start */}

      <div>
        <div className="overflow-x-auto capitalize my-5  md:h-[530px]">
          <table className="table  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-t-md  ">
              <tr>
                <th>
                  <label>{/* <h4>NO : </h4> */}</label>
                </th>

                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th></th>
                <th>PRICE</th>
                <th>action</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="mt-2 ">
              {menu.map((item, index) => (
                <tr
                  key={item?._id}
                  className="hover:shadow-md duration-300  border-none"
                >
                  <th>
                    <label>
                      <h4>{index + 1}</h4>
                    </label>
                  </th>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <h2>{item?.name}</h2>
                  </td>
                  <td>
                    <h2></h2>
                  </td>
                  <td>
                    <h2>$ {item?.price}</h2>
                  </td>

                  <td className="p-5  ">
                    <Link
                    to={`/dashboard/updateItem/${item._id}`}
                      className="btn bg-[#D1A054] text-white flex items-center justify-center text-center"
                      onClick={() => HandelUpdate(item)}
                    >
                      <FaRegEdit className="text-4xl bg-[#D1A054]  rounded-md p-1 text-white " />
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => HandelDelete(item)}
                      className="btn bg-red-600  text-white flex items-center justify-center"
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

export default ManageItems;
