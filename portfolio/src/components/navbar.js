import React from "react";
import TextPressure from "./TextPressure";

const Navbar = () => {
  return (
  
   <nav className="  fixed shadow-md w-full h-20 flex items-center z-1">
  <div className="container mx-auto flex items-center justify-between space-x-30 px-6">


   <div className="relative group">
  <a href="/" className="text-3xl font-extrabold text-white">
   
    <span className="block  transition duration-300">
      <TextPressure
    text="portfolio"
    flex={true}
    alpha={false}
    stroke={false}
    width={false}
    weight={true}
    italic={true}
    textColor="white"
    strokeColor="#ff0000"
    minFontSize={36}
  />
    </span>

   
   
  </a>
</div>
 <div className="w-full h-20 flex items-center justify-center ">
      <ul className="flex space-x-20 bg-white p-4 border-gray-300 border rounded-4xl">
        <li>
          <a
            href="/"
            className="text-xl text-black relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            HOME
          </a>
        </li>

        <li>
          <a
            href="/project"
            className="text-xl text-black relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
           PROJECT
          </a>
        </li>
        

        

        <li>
          <a
            href="/about"
            className="text-xl text-black relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUT
          </a>
        </li>

        
      </ul>
    </div>




    
    <div className=" contact btn w-full h-20 flex items-center justify-end">
      <ul className="flex space-x-10">
        


        <li>
          <a
            href="/contact"
            className="text-xl text-white relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>


  );
};

export default Navbar;
