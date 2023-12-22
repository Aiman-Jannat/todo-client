import { useContext, useState } from "react";
import Title from "./Title";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";

const CreateTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, reset } = useForm();
    const {userr} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const customDateFormatter = (date) => {
        return date.toLocaleDateString('en-GB'); // Format as dd/mm/yyyy
      };

    const onSubmit = (data) => {
        
        console.log(startDate)
        const task ={
            title: data.title,
            deadline:customDateFormatter(startDate),
            description:data.description,
            priority:data.priority,
            email:userr.email


        }
        console.log(task);
        axiosPublic.post('/tasks', task)
        .then(res=>{
            if(res.data){
                toast("Your todo set Successfully")
            }
        })
        


    }

    return (
        <div className="">
            <Title mainTitle={"Create New Task"}></Title>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-1/2 gap-5 p-10 lg:grid-cols-2 mx-auto bg-red-200">
            <div className="form-control w-full">
                 <label className="label">
                    <span className="label-text text-black font-bold">Title<span className="text-red-500">*</span></span>
                </label>
                <label className=" rounded-none">

                    <input type="text" {...register("title")} placeholder="Title" className=" w-full input rounded-none" required />
                </label>
            </div>
            <div className="form-control w-full">
                 <label className="label">
                    <span className="label-text text-black font-bold">Todo deadline<span className="text-red-500">*</span></span>
                </label>
                <DatePicker  className="p-3"  dateFormat="dd/MM/yy"  selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="form-control w-full">
                 <label className="label">
                    <span className="label-text text-black font-bold">Priority<span className="text-red-500">*</span></span>
                </label>
                
<select {...register("priority")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose priority</option>
  <option value="High">High</option>
  <option value="Moderate">Moderate</option>
  <option value="Low">Low</option>
  
</select>
            </div>
            <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Description<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">

                                <textarea name="description" {...register("description")} placeholder="description" className="w-full input rounded-none h-18" required />
                            </label>
                        </div>
                        <div className="form-control lg:col-span-2  w-full ">

                            <label className="rounded none ">

                                <input type="submit" placeholder="submit" value="Create Task" className=" text-black hover:cursor-pointer font-bold w-full input input-bordered rounded-none border-2 border-red-800" />
                            </label>
                        </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CreateTask;