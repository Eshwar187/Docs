import React from 'react';

const Background = () => {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
      <div className='absolute top-[5%] w-full py-10 text-xl text-zinc-600 flex justify-center'>Document</div>
      <h3 className='absolute top-1/2 left-1/2 text-[13vw] mx-14 opacity-10 leading-none tracking-tighter font-semibold  text-zinc-300 -translate-x-[50%] -translate-y-[50%]'>DOCS.</h3>
    </div>
    </>
  );
}

export default Background;
