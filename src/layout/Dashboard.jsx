import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHouse, FaList, FaPlus, FaRightFromBracket, FaShop } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {

    const {userr,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () =>{
      logout();
      navigate('/');

    }


    return (
        <div className=" flex">
           <div className="drawer  lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  flex flex-col items-center justify-center">
  <label htmlFor="my-drawer-2" className="btn btn-error  drawer-button lg:hidden">Open drawer</label>
    <div className="mt-0 min-h-screen w-full ">
    <Outlet></Outlet>
    </div>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    {
   
  }
  
<ul className="menu  bg-red-100 p-5 md:p-10 min-h-full justify-start text-base-content  ">
<li> {userr?<><img referrerPolicy="no-referrer" className="rounded-full h-24 w-28 mx-auto" src={userr.photoURL} alt="image"/></>:<><img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" className=" mx-auto mt-10"/></>}</li>
<li>{
   userr?<p className="text-xl w-fit mx-auto text-center font-bold text-blue-900">{userr.displayName}</p>:<></>
  }</li>
<li className=" mt-10 flex hover:text-red-600 gap-3  font-bold uppercase">
                   
                   <NavLink to="/dashboard/dashHome" className={({ isActive}) =>
isActive ? "text-black text-md bg-red-100  border-2 border-red-900 "  : ""}><FaHouse></FaHouse> My Home</NavLink>
               </li>
               <li className=" flex hover:text-red-600  gap-3  font-bold mt-2 uppercase">
                   
                   <NavLink to="/dashboard/createTask" className={({ isActive}) =>
isActive ? "text-black text-md  border-2 border-red-900"  : ""}><FaPlus></FaPlus>Create Task</NavLink>
               </li>
               <li className=" flex hover:text-red-600  gap-3  font-bold mt-2 uppercase">
               
                   <NavLink to="/dashboard/todoList" className={({ isActive}) =>
isActive ? "text-black text-md  border-2 border-red-900 "  : ""}><FaList></FaList>Todo List</NavLink>
               </li>
               <li>
                
                <button className="flex mt-2 hover:text-red-600  gap-3 font-bold  uppercase" onClick={handleLogout}><FaRightFromBracket className="flex"></FaRightFromBracket> LogOut</button></li>
                <li className=" mt-2 flex hover:text-red-600 gap-3  font-bold uppercase">
                   
                   <NavLink to="/" className={({ isActive}) =>
isActive ? "text-red-600 text-md  border-2 border-red-900 "  : ""}><FaHouse></FaHouse>Home Page</NavLink>
               </li>
</ul>

  
  </div>
</div>

        </div>
    );
};

export default Dashboard;




