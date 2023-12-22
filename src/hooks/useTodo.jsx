import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";


const useTodo = () => {
    
    const axiosPublic = useAxiosPublic();
const {userr} = useContext(AuthContext);

const id=123;
const {data:tasks=[],refetch} = useQuery({
queryKey:[id],
queryFn: async() =>{
    const res = await axiosPublic.get(`/tasks/${userr?.email}`);
    return res.data;
}
})
return [tasks,refetch]
};

export default useTodo;

