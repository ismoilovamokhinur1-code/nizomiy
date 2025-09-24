import React from "react";
import { HiChevronDown } from "react-icons/hi";
import gmail from "../assets/gmail.svg";
import phone from "../assets/calling.svg";
import zvuk from "../assets/speaker.svg";
import glaz from "../assets/glaz.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import btns from "../assets/btns.png";
import announce from "../assets/announceback.svg"
import uzb from "../assets/uzb.svg";
// import rus from "../assets/uzb.svg";
// import eng from "../assets/uzb.svg";


export default function HeaderSecond() {
    return (
        <>
            <div className="container headersecond-wrap">

              <div className="fixed top-0 left-0 w-full z-50 bg-[#086D7A]">
                  {/* header side */}
                <div className='first-header flex justify-between'>

                    {/* 1 */}

                    <div className='flex gap-7'>
                        <div className='flex gap-4'>
                            <img src={gmail} alt="pochta" className="w-[20px] h-[20px]" />
                            <a href="mailto:info@uznpu.uz" className='text-white relative bottom-[2px]'>info@uznpu.uz</a>
                        </div>

                        <div className='flex gap-4'>
                            <img src={phone} alt="phone" className="w-[20px] h-[20px]" />
                            <a href="tel:+998712767651" className='text-white relative bottom-[2px]'>+998 71 276 76 51</a>

                        </div>
                    </div>

                    {/* 1 */}

                    {/* 2 */}
                    <div className='flex'>
                        <div className="flex gap-4">
                            <img src={zvuk} alt="zvuk" className="w-[24px] h-[24px]" />
                            <img src={glaz} alt="glaz" className="w-[24px] h-[24px]" />
                        </div>


                        {/* language */}


                        {/* language */}
                    </div>
                    {/* 2 */}


                </div>
                {/* header side */}


                {/* header 2 */}
                <div className="palochka-header"></div>
                <div className="header-second flex justify-between">
                    {/* 1 */}
                    <div className="flex gap-7">
                        <img src={menu} alt="menu" className="w-[24px] h-[24px] relative top-2" />
                        <img src={logo} alt="logo" className="w-[189px] h-[46px]" />
                    </div>

                    {/* 1 */}

                    {/* 2 */}
                    <div>
                        <ul className="flex text-white gap-8">
                            <li className="flex"><a href="#">Об Университете</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                            <li className="flex"><a href="#">Образование</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                            <li className="flex"><a href="#">Образовательные направление</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                            <li className="flex"><a href="#">Ссылки</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                        </ul>
                    </div>

                    {/* 2 */}

                    {/* 3 */}
                    <div>
                        <button className="w-[164px] h-[48px] bg-[#086D7A] text-white rounded-xl">Подать заявку</button>
                    </div>
                    {/* 3 */}
                </div>
                <div className="palochka-header"></div>
                {/* header 2 */}
              </div>


                {/* header 3 */}

       <div className="flex header-side-3">
                 <div className="header-third">
                    <h1 className="text-white text-[55px] font-medium">Announcements</h1>
                    <p className="text-white">
                        The announcements section provides information about meetings, exams, competitions, and other important events at our institute. Essential updates for students and teachers are regularly refreshed.
                    </p>

                </div>


                <div>
                    <img src={announce} alt="img" className="w-[1384px] h-[410px]"/>
                </div>

       </div>
                {/* header 3 */}
            </div>
        </>
    )
}
