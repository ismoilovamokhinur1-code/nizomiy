import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import announce from "../assets/announce.svg";
import girl from "../assets/girl.png";
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <>
            <div className="container news-wrap bg-[#F3F7FD]">

                {/* 1 */}
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={announce} alt="announce" className='animate-spin-fast'/>
                        <p className='text-[40px] font-medium'>Последние новости</p>
                    </div>

                    <Link to="/info">
                        <button className='w-[171px] h-[53px] text-white announce-btn'>Все новости</button>
                    </Link>
                </div>
                {/* 1 */}

                {/* 2 */}
                <div className='flex gap-5 wrap-news-imgs'>

                    {/*  */}
                    <div className='img-news w-[617px]'>
                        <div>
                            <img src={girl} alt="img" className='w-[617px] h-[240px]' />
                        </div>
                        <div className='div-img-news h-[184px]'>
                            <div className='flex justify-between'>
                                <h1>UX review presentations</h1>
                                <GoArrowUpRight className='w-[24px] h-[28px]' />
                            </div>

                            <p className='text-[#475467] text-[16px] news-img-pi-1'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <p className='text-[#475467] text-[16px] news-img-pi-2'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                        </div>
                    </div>
                    {/*  */}



                    <div className="cards-wrapper w-[710px]">
                        <div className="cards-container gap-5">

                            {/* 1 */}


                            <div className='w-[675px] h-[136px] flex card-girl'>
                                <img src={girl} alt="img" className='w-[270px] h-[136px]   flex items-center px-4' />

                                <div className='ux-news w-[420px] bg-white'>
                                    <div className='flex ux-news-div'>
                                        <h1 className='text-[#101828] text-[18px] font-normal'>UX review presentations</h1>
                                        <GoArrowUpRight className='w-[24px] h-[28px]' />
                                    </div>

                                    <p className='text-[#475467] text-[15px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                                </div>
                            </div>
                            {/* 1 */}



                            {/* 2 */}


                            <div className='w-[675px] h-[136px] flex card-girl'>
                                <img src={girl} alt="img" className='w-[270px] h-[136px]   flex items-center px-4' />



                                <div className='ux-news w-[420px] bg-white'>
                                    <div className='flex ux-news-div'>
                                        <h1 className='text-[#101828] text-[18px] font-normal'>UX review presentations</h1>
                                        <GoArrowUpRight className='w-[24px] h-[28px]' />
                                    </div>

                                    <p className='text-[#475467] text-[15px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                                </div>
                            </div>
                            {/* 2 */}



                            {/* 3 */}


                            <div className='w-[675px] h-[136px] flex card-girl'>
                                <img src={girl} alt="img" className='w-[270px] h-[136px]   flex items-center px-4' />



                                <div className='ux-news w-[420px] bg-white'>
                                    <div className='flex ux-news-div'>
                                        <h1 className='text-[#101828] text-[18px] font-normal'>UX review presentations</h1>
                                        <GoArrowUpRight className='w-[24px] h-[28px]' />
                                    </div>

                                    <p className='text-[#475467] text-[15px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                                </div>
                            </div>
                            {/* 3 */}



                            {/* 4 */}
                            <div className='w-[675px] h-[136px] flex card-girl'>
                                <img src={girl} alt="img" className='w-[270px] h-[136px]   flex items-center px-4' />



                                <div className='ux-news w-[420px] bg-white'>
                                    <div className='flex ux-news-div'>
                                        <h1 className='text-[#101828] text-[18px] font-normal'>UX review presentations</h1>
                                        <GoArrowUpRight className='w-[24px] h-[28px]' />
                                    </div>

                                    <p className='text-[#475467] text-[15px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                                </div>
                            </div>
                            {/* 4 */}

                            {/* 5 */}
                            <div className='w-[675px] h-[136px] flex card-girl'>
                                <img src={girl} alt="img" className='w-[270px] h-[136px]   flex items-center px-4' />



                                <div className='ux-news w-[420px] bg-white'>
                                    <div className='flex ux-news-div'>
                                        <h1 className='text-[#101828] text-[18px] font-normal'>UX review presentations</h1>
                                        <GoArrowUpRight className='w-[24px] h-[28px]' />
                                    </div>

                                    <p className='text-[#475467] text-[15px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                                </div>
                            </div>
                            {/* 5 */}




                        </div>
                    </div>




                </div>
                {/* 2 */}
            </div>

        </>
    )
}

export default News
