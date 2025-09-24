import React from 'react';
import announce from "../assets/announce.svg";
import location from "../assets/location.svg"
import { Link } from 'react-router-dom';

export default function Announcement() {
    return (
        <>
            <div className="container announce-wrap">
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <img src={announce} alt="announce" className='animate-spin-fast'/>
                        <p className='text-[40px] font-medium'>Объявления</p>
                    </div>

                    <div>
                       <Link to="/announce">
                        <button className='w-[171px] h-[53px] text-white announce-btn'>Посмотреть все</button>
                       </Link>
                    </div>
                </div>

                {/* cards */}
                <div className='flex justify-between wrap-cards'>
                    {/* card 1 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#086D7A] card-first'>
                            <p>18 август, 11:00</p>
                            <h1 className='text-[20px] font-medium'>Undergraduate <br /> Open Day</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>Inha University</h1>
                                </div>
                                <p className='text-[#121212]'>Trees are not only among the largest, oldest and most complex living things on earth, they also grow extremely slowly - often taking decades or even centuries to reach their full size.....</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 1 */}


                           {/* card 2 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#195A91] card-first'>
                            <p>18 август, 11:00</p>
                            <h1 className='text-[20px] font-medium'>Undergraduate <br /> Open Day</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>Inha University</h1>
                                </div>
                                <p className='text-[#121212]'>Trees are not only among the largest, oldest and most complex living things on earth, they also grow extremely slowly - often taking decades or even centuries to reach their full size.....</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 2 */}

                           {/* card 3 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#195A91] card-first'>
                            <p>18 август, 11:00</p>
                            <h1 className='text-[20px] font-medium'>Undergraduate <br /> Open Day</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>Inha University</h1>
                                </div>
                                <p className='text-[#121212]'>Trees are not only among the largest, oldest and most complex living things on earth, they also grow extremely slowly - often taking decades or even centuries to reach their full size.....</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 3 */}


                           {/* card 4 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#086D7A] card-first'>
                            <p>18 август, 11:00</p>
                            <h1 className='text-[20px] font-medium'>Undergraduate <br /> Open Day</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>Inha University</h1>
                                </div>
                                <p className='text-[#121212]'>Trees are not only among the largest, oldest and most complex living things on earth, they also grow extremely slowly - often taking decades or even centuries to reach their full size.....</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 4 */}
                </div>
                {/* cards */}

            </div>
        </>
    )
}
