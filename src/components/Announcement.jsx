import React from 'react';
import announce from "../assets/announce.svg";
import location from "../assets/location.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Announcement() {
    const { t } = useTranslation();

    return (
        <div className="announce-wrap">
            {/* header */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0'>
                <div className='flex gap-4 items-center'>
                    <img src={announce} alt="announce" className='animate-spin-fast w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />
                    <p className='text-2xl md:text-[40px] font-medium'>{t("announce_title")}</p>
                </div>

                <Link to="/announce">
                    <button className='w-full md:w-[171px] h-[45px] md:h-[53px] text-white announce-btn'>
                        {t("announce.btn")}
                    </button>
                </Link>
            </div>


            {/* swiper */}
            <div className='swiper'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {/* card 1 */}
                    <SwiperSlide>
                        <div className='w-[320px] h-[354px]'>
                            <div className='bg-[#086D7A] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>
                                    {t("announce.title1")} <br /> {t("announce.title2")}
                                </h1>
                            </div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                    <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>
                                    {t("announce.register")}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* card 2 */}
                    <SwiperSlide>
                        <div className='w-[320px] h-[354px]'>
                            <div className='bg-[#195A91] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>
                                    {t("announce.title1")} <br /> {t("announce.title2")}
                                </h1>
                            </div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                    <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>
                                    {t("announce.register")}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* card 3 */}
                    <SwiperSlide>
                        <div className='w-[320px] h-[354px]'>
                            <div className='bg-[#195A91] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>
                                    {t("announce.title1")} <br /> {t("announce.title2")}
                                </h1>
                            </div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                    <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>
                                    {t("announce.register")}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* card 4 */}
                    <SwiperSlide>
                        <div className='w-[320px] h-[354px]'>
                            <div className='bg-[#086D7A] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>
                                    {t("announce.title1")} <br /> {t("announce.title2")}
                                </h1>
                            </div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                    <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>
                                    {t("announce.register")}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
