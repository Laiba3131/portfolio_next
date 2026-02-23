import React from "react";

function Copyright() {
  return (
    <>
      <div className="py-8 px-6 md:px-10 lg:px-20 border-t border-[#B18325]/20 flex flex-col md:flex-row items-center justify-between w-full bg-black/80">
        <p className="text-gray-500 text-sm font-medium">
          © 2026 <span className="text-[#B18325]">Laiba Azam</span>. All rights
          reserved.
        </p>
        {/* <p className='text-gray-500 text-sm font-medium mt-2 md:mt-0'>Designed & Built with <span className="text-red-500">♥</span> using Next.js</p> */}
      </div>
    </>
  );
}

export default Copyright;
