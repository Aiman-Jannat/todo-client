import { FaArrowRight, FaBuilding, FaCartArrowDown, FaCloud, FaCommentsDollar, FaDumbbell, FaLocationCrosshairs, FaMarker, FaMobileScreen, FaPeopleGroup, FaPerson } from "react-icons/fa6";

const TypesUser = () => {
    return (
        <div className="max-w-screen-sm lg:max-w-screen-xl mx-auto grid grid-cols-2 p-5 lg:grid-cols-4 gap-5 ">
        
        <div className="justify-center hover:cursor-pointer  text-center items-center  w-fit p-3">
            <FaCartArrowDown className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaCartArrowDown>
            <p className="font-bold">Entrepreneurs and Business Owners</p>
            <p>Manage daily tasks related to running
                <br />  a business</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaPeopleGroup className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaPeopleGroup>
            <p className="font-bold">Students

</p>
            <p>Prioritize tasks related to exams, projects, and extracurricular activities.

</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaPerson className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaPerson>
            <p className="font-bold">Professionals in Corporate Settings

</p>
            <p>Prioritize and manage deadlines for reports, presentations, and team collaborations.</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaLocationCrosshairs className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaLocationCrosshairs>
            <p className="font-bold">Freelancers

</p>
            <p>Manage administrative tasks such as invoicing and project proposals.

</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaBuilding className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaBuilding>
            <p className="font-bold">Parents

</p>
            <p>Coordinate family schedules, including school events and extracurricular activities.

</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaMarker className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaMarker>
            <p className="font-bold">Researchers and Academics

</p>Organize research tasks, experiments, and writing projects. Set deadlines for submitting papers and grant proposals.
            <p>
            </p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaDumbbell className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaDumbbell>
            <p className="font-bold">Fitness Enthusiasts
</p>
            <p>Schedule meal prep and other health-related activities.
            Plan workout routines and fitness goals.

</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
        <div className="justify-center text-center items-center  w-fit p-3">
            <FaCommentsDollar className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaCommentsDollar>
            <p className="font-bold">Event Planners</p>
            <p>Coordinate tasks related to event planning, including logistics and timelines.


</p>
            <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

        </div>
    </div>
    );
};

export default TypesUser;