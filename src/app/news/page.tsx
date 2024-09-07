import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const News = () => {
  return (
    <div>
      <div className="flex gap-5 p-5 w-[1440px] container">
        <Link href={"/"} className="p-5 bg-slate-200">
          bosh sahifa
        </Link>
        <h1 className="bg-slate-200 p-5">audio kitoblar</h1>
      </div>
      <div className="flex items-center container gap-[50px] bg-slate-200 shadow-lg shadow-gray-300 border-2 ">
        <Image
          src={"/img.svg"}
          alt="icon"
          className="dark:invert ml-3 p-[24px]"
          width={200}
          height={164}
          priority
        />
        <div className="w-[319px]">
          <h1 className="text-[30px] font-bold mb-3">Суғдиёна Икромова</h1>
          <strong className="text-[20px] font-medium ">
            +998 90 253 77 53
          </strong>
          <p className="text-[20px] font-medium text-[#9A9A9A] mt-2">
            ID: 0001 Баланс: 45 000 сўм
          </p>
        </div>
      </div>
      <div className="container gap-[25px] flex">
        <div>
          <Image
            src={"/book1.svg"}
            alt="icon"
            className="dark:invert ml-3 p-[24px]"
            width={300}
            height={422}
            priority
          />
        </div>
        <div className="mt-7">
          <div className="flex justify-between gap-[100px] items-center ">
            <h1 className="font-bold text-[35px]">Элжернга аталган гуллар</h1>
            <Image
              src={"/bookmark.svg"}
              alt={"bookmark"}
              className=""
              width={50}
              height={50}
              priority
            />
            <Image
              src={"/stars.svg"}
              alt={"bookmark"}
              className=""
              width={150}
              height={20}
              priority
            />
            <p>235 ta fikr</p>
          </div>
          <p className="text-[#3F51B5] font-light pt-5">SIYOSAT, FANTASTIKA</p>
          <h3 className="pt-5 w-[900px] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.{" "}
          </h3>
          <div className="flex gap-[60px] pt-2">
            <div>
              <h2 className="text-[#AAAAAA] text-[14px]">Муаллиф</h2>
              <h3 className="font-semibold">Kevin Smiley</h3>
            </div>
            <div>
              <h2 className="text-[#AAAAAA] text-[14px]">Нашриёт </h2>
              <h3 className="font-semibold">Wepress Inc.</h3>
            </div>
            <div>
              <h2 className="text-[#AAAAAA] text-[14px]">Йил</h2>
              <h3 className="font-semibold">1965</h3>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <div className="flex gap-4 p-5 bg-blue-500 rounded-2xl w-[350px] items-center">
              <Image
                src={"/local.svg"}
                alt={"bookmark"}
                className=""
                width={30}
                height={30}
                priority
              />
              <h2>Сотиб олиш - 65 000 сум</h2>
            </div>
            <div className="flex gap-4 p-5 bg-slate-200 rounded-2xl w-[350px] items-center">
              <Image
                src={"/audio.svg"}
                alt={"bookmark"}
                className=""
                width={30}
                height={30}
                priority
              />
              <h2>Аудио тинглаш - 55 000 сум</h2>
            </div>
            <div className="flex gap-4 p-5 bg-slate-200 rounded-2xl w-[350px] items-center">
              <Image
                src={"/online.svg"}
                alt={"bookmark"}
                className=""
                width={30}
                height={30}
                priority
              />
              <h2>Онлайн укиш - 45 000 сум</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News