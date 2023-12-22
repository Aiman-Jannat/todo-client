import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='max-w-screen-sm lg:max-w-screen-xl mx-auto border-2 border-red-800 border-s-0 border-r-0 border-t-0 border-opacity-5 '>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to = "/" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Home</NavLink>
      <NavLink to = "/demo" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Demo</NavLink>
      <NavLink to = "/dashboard" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Dashboard</NavLink>
      </ul>
    </div>
    <img className="h-14 w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBaq9XuaYT59Ybm3sBRc0p6C4L7nglQHwDQ&usqp=CAU" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex justify-start items-center gap-5 px-1">
    <NavLink to = "/" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Home</NavLink>
      <NavLink to = "/demo" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Demo</NavLink>
      <NavLink to = "/dashboard" className={({ isActive}) =>
 isActive ? "text-white text-md font-semibold  px-5 py-2 rounded-md bg-red-600"  : ""
} >Dashboard</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
  <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-500 group-hover:from-red-500 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<Link to='/login' className="relative px-7 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Login
</Link>
</button>
  </div>
</div>  
        </div>
    );
};

export default Navbar;