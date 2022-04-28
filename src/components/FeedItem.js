import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon  } from "../icons/icons";

const FeedItem = ({
    avatar, 
    content, 
    displayName,
    image, 
    timestamp, 
    username, 
  }) => {
    return (
      <article className="flex space-x-3 border-b border-gray-200 px-4 py-3 cursor-pointer">
        <img src={avatar}  alt="Profile" className="w-11 h-11 rounded-full"  />
        <div className="flex-1">
           <div className="flex items-center text-sm">
                <h4 className="font-bold">{displayName}</h4>
                <span className="ml-2  text-gray-500">{username}</span>
                <div className="mx-2 bg-gray-800 h-1 w-1 border rounded-full"  />
                <span className="text-gray-500">
                    {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                </span>
           </div>
           <p className="mt-2 text-gray-900 text-sm">{content}</p>
           {image && <img src={image} className="my-2 rounded-xl max-h-96" />}
           <ul className="-ml-l mt-3  flex justify-between max-w-md ">
               <li className="flex items-center space-x-3 text-gray-600 text-sm group"> 
                   <div className="flex items-center justify-center w-8 h-8  rounded-full group-hover:bg-gray-300">
                       <ReplyIcon className="w-5 h-5" />
                   </div>
                   <span className="group-hover:text-blue-300">7</span>
               </li>

               <li className="flex items-center space-x-3 text-gray-600 text-sm group"> 
                   <div className="flex items-center justify-center w-8 h-8  rounded-full group-hover:bg-green-200">
                       <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                   </div>
                   <span className="group-hover:text-green-400">7</span>
               </li>

               <li className="flex items-center space-x-3 text-gray-900 text-sm group"> 
                   <div className="flex items-center justify-center w-8 h-8  rounded-full group-hover:bg-pink-300">
                       <LikeIcon className="w-5 h-5 group-hover:text-gray-900" />
                   </div>
                   <span className="group-hover:text-pink-400">7</span>
               </li>

               <li className="flex items-center space-x-3 text-gray-600 text-sm group"> 
                   <div className="flex items-center justify-center w-8 h-8  rounded-full group-hover:bg-gray-300">
                       <ShareIcon className="w-5 h-5" />
                   </div>
               </li>
           </ul>
        </div>
        
      </article>
           
  )
}

export default FeedItem;