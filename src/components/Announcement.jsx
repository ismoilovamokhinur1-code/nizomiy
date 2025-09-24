import React from 'react';
import announce from "../assets/announce.svg";
import location from "../assets/location.svg"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Announcement() {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="container announce-wrap">
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <img src={announce} alt="announce" className='animate-spin-fast'/>
                        <p className='text-[40px] font-medium'>{t("announce_title")}</p>
                    </div>

                    <div>
                       <Link to="/announce">
                        <button className='w-[171px] h-[53px] text-white announce-btn'>{t("announce.btn")}</button>
                       </Link>
                    </div>
                </div>

                {/* cards */}
                <div className='flex justify-between wrap-cards'>
                    {/* card 1 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#086D7A] card-first'>
                            <p>{t("announce.date")}</p>
                            <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 1 */}


                           {/* card 2 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#195A91] card-first'>
                            <p>{t("announce.date")}</p>
                            <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 2 */}

                           {/* card 3 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#195A91] card-first'>
                            <p>{t("announce.date")}</p>
                            <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
                                <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>Записаться</button>
                            </div>
                        </div>

                    </div>

                    {/* card 3 */}


                           {/* card 4 */}
                    <div className='w-[320px] h-[354px]'>

                        <div className='bg-[#086D7A] card-first'>
                            <p>{t("announce.date")}</p>
                            <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                        </div>

                        <div>
                            <div className='bg-[#F3F7FD] card-second'>
                                <div className='flex gap-2'>
                                    <img src={location} alt="img" className='w-[20px] h-[20px]'/>
                                <h1>{t("announce.place")}</h1>
                                </div>
                                <p className='text-[#121212]'>{t("announce.desc")}</p>
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
