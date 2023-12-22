const Title = ({ mainTitle }) => {
    return (
        <div className="text-center my-10 pb-3 relative">
      
      <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
        <span className="relative  border-8  border-b-0 border-y-0 border-r-0  border-red-600 px-4 text-black">{mainTitle}</span>
        
       
      </h2>
      
    </div>
    //     <div className="text-center my-12 pb-6">
    //   <h2 className="text-4xl border-8 border-y-0 border-r-0 border-orange-600 font-extrabold text-gray-900 relative inline-block px-3">
    //     {mainTitle}
        
    //   </h2>
    //   <p className="mt-2 text-lg text-gray-600">........{subTitle}........</p>
    // </div>
    );
};

export default Title;