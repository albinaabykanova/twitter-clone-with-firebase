
import { PopularIcon } from '../icons/icons';
import TweetBox from '../components/TweetBox';
import Divider from '../components/Divider';
import { useState, useEffect } from 'react';
import db from "../firebase";
import FeedList from '../components/FeedList';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"

const Content = () => {
  const [tweets, setTweets] = useState([]);
 
  useEffect(() => {
    const q = query(collection(db, 'feed'), 
    orderBy('timestamp', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTweets(querySnapshot.docs.map(doc => doc.data()))
    })
  }, []);


  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-100 ">
       <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-50 bg-white">
          <span className="font-bold text-xl text-gray-900 ">Home</span>
          <PopularIcon className="w-6 h-6 text-blue-900" />
       </header> 
       <div className="flex space-x-4 px-4 py-3">
         <img  
            src="https://avatars.githubusercontent.com/u/94489971?s=40&v=4" 
            alt="Profile" 
            className="w-11 h-11 rounded-full" 
          />
          <TweetBox />
       </div>
       <Divider />

       {/* Feed */ }
       <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;