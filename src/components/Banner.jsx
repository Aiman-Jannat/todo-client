import { GrStatusGood } from "react-icons/gr";

const Banner = () => {
    return (
        <div className="max-w-screen-sm lg:max-w-screen-xl mx-auto">
  <div className="hero min-h-screen ">
  <div className="hero  ">
<div className="hero-content  flex-col lg:flex-row-reverse">
<img src="https://lh3.googleusercontent.com/bZxvwZkQlNoKSR64GtE9BxEJWsiPbwIkBhWh-h-BGdd56iw5XmMwbaNniNngtgFzznBWLUx5_e4TPxy1X45xWdWJHVM=w640-h400-e365-rj-sc0x00ffffff" className="w-full md:w-1/2 rounded-lg shadow-2xl" />
<div className="ms-5">
  <h1 className="text-5xl font-bold text-black py-5">Why <span className="text-red-600 text-7xl font-bold">ToDo</span></h1>
  <p className="mt-3 text-black">A to-do list is important for several reasons, as it serves as an effective tool for personal and professional productivity.</p>
  <div className="grid grid-cols-2  gap-2 my-4">
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Time Management  </p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Prioritization</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Memory Aid</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Reduced Stress</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Goal Setting </p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Accountability</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-700"></GrStatusGood>
        <p>Improved Focus</p>
    </div>
  </div>
  <button className="btn border-0 bg-red-600 rounded-xl text-white hover:bg-red-800 mt-5">Show More</button>
</div>
</div>
</div>
  </div>
</div>
    );
};

export default Banner;