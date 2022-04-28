import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;
      return (
        <li className="group"  onClick={() => onMenuItemClick(name)}>
           <a
               href={name.toLowerCase()} 
               className="cursor-pointer block text-xl mb-2 pointer-events-none"
           >
            <div className="inline-block" >
              <div className={`flex items-center group-hover:bg-zinc-100 group-hover:text-sky-700 rounded-full pl-3 pr-8 py-3

                  ${isActive ? "text-lime-400" : ""}
                 `}
                 >
                    <Icon /> 
                    <span className="ml-4 font-bold">{name}</span>
                </div> 
            </div>
         </a>
     </li>
  )
}

export default SideLink;