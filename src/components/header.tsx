import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="p-[20px]  font-bold text-[20px] container items-center">
      <div className="flex gap-[30px] justify-between items-center">
        <Image
          src="/next.svg"
          alt=" Logo"
          className="dark:invert"
          width={165}
          height={45}
          priority
        />
        <button className="w-[180px] h-[48px] p-8 border-2 border-black-50 rounded-lg flex items-center gap-2">
          <Image
            src="/ruknlar.svg"
            alt=" Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          Рукнлар
        </button>
        <div>
          <input
            type="text"
            placeholder="Қидириш"
            className="bg-slate-200 h-[48] w-[555px] p-5"
          />
      
        </div>
        <button className="w-[200px] h-[100px]">
          <Image
           src="/enter.svg"
           alt=" Logo"
           className=" w-[191] h-[98]"
           width={200}
           height={100}
           priority
          />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        </button>
      </div>
    </div>
  );
};
