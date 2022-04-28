import React, { useState } from 'react'
import {
     ImageIcon ,
     GifIcon,
     PollIcon,
     EmojiIcon,
     SheduleIcon,
    } from '../icons/icons';
    import db from "../firebase";
    import {collection, addDoc, Timestamp} from 'firebase/firestore'

const TweetBox = () => {
    const [content, setContent] = useState('')

    const sendTweet = async () => {
            if(content !== ''){
                await addDoc(collection(db, 'feed'), {
                    displayName: "Albina ABykanova",
                     username: "@AlbinaAbykanova",
                     image:"https://pbs.twimg.com/media/FRI7ebBXMAUBRiW?format=jpg&name=large",
                     content:content,
                     avatar: "https://avatars.githubusercontent.com/u/94489971?s=40&v=4" ,
                     timestamp: Timestamp.now()
                  })
                  setContent('')
            }
          
    }

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea 
         className="w-full text-xl placeholder-gray-300 outline-none overflow-hidden resize-none bg-transparent " 
         placeholder="What's happening?"
         onChange={e => setContent(e.target.value)}
         value={content}
      />
       <div className="flex items-center justify-between">
          <div className="flex -ml-3 ">
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
                    <ImageIcon className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
                    <GifIcon className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
                    <PollIcon className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
                    <EmojiIcon className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
                    <SheduleIcon className="w-6 h-6 text-sky-400" />
                </div>
          </div>
              <button className="bg-sky-400 text-white rounded-full px-4 py-2 font-medium"
              onClick={sendTweet}>
                  Tweet
              </button>
          </div>
    </div>  
  );
};

export default TweetBox;