import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import announce from "../assets/announce.svg";
import girl from "../assets/girl.png";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const News = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="news-wrap bg-[#F3F7FD] px-4 md:px-10 lg:px-20 py-10">

                {/* 1 */}
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8'>
                    <div className='flex gap-4 items-center'>
                        <img src={announce} alt="announce" className='animate-spin-fast w-10 h-10 md:w-12 md:h-12' />
                        <p className='text-2xl md:text-[40px] font-medium'>{t("latest_news")}</p>
                    </div>

                    <Link to="/info" className="w-full md:w-auto">
                        <button className='w-full md:w-[171px] h-[53px] text-white announce-btn'>{t("btn1")}</button>
                    </Link>
                </div>
                {/* 1 */}

                {/* 2 */}
                <div className='flex flex-col lg:flex-row gap-5 wrap-news-imgs'>

                    <div className='img-news w-full lg:w-[617px]'>
                        <div>
                            <img src={girl} alt="img" className='w-full h-[200px] md:h-[240px] object-cover rounded-md' />
                        </div>
                        <div className='div-img-news h-[190px] bg-white p-4 mt-3 rounded-md'>
                            <div className='flex justify-between items-start'>
                                <h1 className="text-lg md:text-xl font-medium">{t("news.0.title")}</h1>
                                <GoArrowUpRight className='w-6 h-6' />
                            </div>

                            <p className='text-[#475467] text-sm md:text-[16px] mt-2'>{t("news.0.desc")}</p>
                        </div>
                    </div>

                    <div className="cards-wrapper w-full lg:w-[710px]">
                        <div className="cards-container flex flex-col gap-5">

                            {[1,2,3,4,5].map((i)=>(
                                <div key={i} className='w-full flex flex-col sm:flex-row bg-white rounded-md shadow-sm overflow-hidden'>
                                    <img src={girl} alt="img" className='w-full sm:w-[270px] h-[160px] object-cover' />

                                    <div className='ux-news w-full sm:w-[420px] p-4'>
                                        <div className='flex justify-between items-start'>
                                            <h1 className='text-[#101828] text-[16px] md:text-[18px] font-normal'>{t("news.0.title")}</h1>
                                            <GoArrowUpRight className='w-6 h-6' />
                                        </div>
                                        <p className='text-[#475467] text-sm md:text-[15px] mt-2'>{t("news.0.desc")}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {/* 2 */}
            </div>
        </>
    )
}

export default News;
