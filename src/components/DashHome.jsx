import useTodo from "../hooks/useTodo";
import Title from "../components/Title"
import { FaTrash, FaUpload } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const DashHome = () => { 
    const [tasks,refetch] = useTodo();
    const axiosPublic = useAxiosPublic();
    console.log(tasks);
    const navigate = useNavigate();
    const handleUpdate = (id) =>{
        navigate(`/dashboard/updateTask/${id}`)
    }
    const handleDelete = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
            
           axiosPublic.delete(`/tasks/delete/${id}`)
           .then(res=>{
              // console.log(id)
              if(res.data.deletedCount>0)
              {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch();
              }
           })
           .catch(error=>console.log(error));
            
           
            
          }
        });
          
    
      }
    return (
        <div className="w-9/12 mx-auto">
            <Title mainTitle="Dashboard"></Title>
            <table className="table w-9/11 mx-auto">
                  {/* head */}
                  <thead>
                    <tr className="bg-red-800 text-white ">
                      <th className="rounded-tl-2xl ">
                        Item no.
                      </th>
                      <th className="">To do</th>
                      <th className="">deadline</th>
                      <th className="">priority</th>
                      <th className="">update</th>
                      <th className="rounded-tr-2xl">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {tasks.map((item,index)=><tr key={item._id} >
                      <th>
                        {index+1}
                        
              
                      </th>
                      
                      
                      <td>{item.title}</td>
                      <td>{item.deadline}</td>
                      <td>{item.priority}</td>
                      
                      
                      <td><button onClick={()=>handleUpdate(item._id)}  className="btn bg-yellow-800"><FaUpload className="text-white text-xl"></FaUpload> </button></td>
                      <th>
                        <button onClick={()=>handleDelete(item._id)} className="btn bg-red-800"><FaTrash className="text-white"></FaTrash></button>
                      </th>
                    </tr>)}
                    
                    
                    
                  </tbody>
                  {/* foot */}
                
                </table>
            
        </div>
    );
};

export default DashHome;