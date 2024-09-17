import { data } from 'autoprefixer';
import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-800/10 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-s leading-tight mt-5 font-semibold '>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-6 h-6 bg-sky-200 rounded-full flex items-center justify-center '>
              {data.close ? <IoClose /> :<LuDownload size='.7em' color='black' />}
              </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
