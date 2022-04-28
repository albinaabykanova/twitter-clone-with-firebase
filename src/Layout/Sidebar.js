import React, { useState } from 'react'
import SideLink from '../components/SideLink';
import twitterLogo from "../images/twitter.svg" 
import {
   HomeIcon,
   ExploreIcon,
   NotificationIcon,
   MessagesIcon,
   BookmarksIcon,
   ListIcon,
   ProfileIcon,
   MoreIcon,
} from "../icons/icons.js";
import UserBox from '../components/UserBox';

const sideLink = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'List',
    icon: ListIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
      setActive(name);
  };

  return (
    <div className=" flex flex-col justify-between w-72 px-2">
        <div>
          <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-300 transform transition-colors duration-200">
            <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
          </div>
            <nav className="mb-4">
                <ul>
                   {sideLink.map(({name, icon}) =>(
                     <SideLink key={name} name={name}  Icon={icon}  active={active} onMenuItemClick={handleMenuItemClick} />
                   ))}
                </ul>
            </nav>
            <button className="bg-sky-400 hover:bg-sky-900 text-white shadow-lg rounded-full py-3 px-6 w-11/12 transform transition-colors duration-200">
                 Tweet
            </button>
        </div>
        <UserBox />
    </div>
  );
};

export default Sidebar;


