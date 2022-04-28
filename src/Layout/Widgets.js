import React from 'react';
import { SearchIcon } from "../icons/icons";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
      <aside className="w-80">
         <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-red-900 focus-within:text-red-900">
           <SearchIcon className="w-5 h-5"  />
           <input
               type="text" 
               placeholder="Search Twitter" 
               className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm" 
           />
         </div>
         <div className="mt-5">
           <Timeline 
            dataSource={{
              sourceType: "profile",
              screenName: "reactjs",
            }}
            options={{
              height: "1000",
            }}
            />
         </div>
      </aside>
  );
};

export default Widgets;