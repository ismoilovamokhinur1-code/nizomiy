import React, { useEffect } from 'react'
import HeaderSecond from '../components/HeaderSecond'
import announce from "../assets/announce.svg";
import location from "../assets/location.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/Footer';
import { useTranslation } from "react-i18next";

export default function Announce() {


    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="container">
                <HeaderSecond />

                <div data-aos="fade-up">
                    {/* cards */}
                    <div className='grid grid-cols-4 gap-4 wrap-cards'>
                        {/* card 1 */}
                        <div className='w-[320px] h-[354px]'>

                            <div className='bg-[#086D7A] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                            </div>

                            <div>
                                <div className='bg-[#F3F7FD] card-second'>
                                    <div className='flex gap-2'>
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
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
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
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
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
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
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
                                </div>
                            </div>

                        </div>

                        {/* card 4 */}

                        {/* card 5 */}
                        <div className='w-[320px] h-[354px]'>

                            <div className='bg-[#086D7A] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                            </div>

                            <div>
                                <div className='bg-[#F3F7FD] card-second'>
                                    <div className='flex gap-2'>
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
                                </div>
                            </div>

                        </div>

                        {/* card 5 */}


                        {/* card 6 */}
                        <div className='w-[320px] h-[354px]'>

                            <div className='bg-[#195A91] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                            </div>

                            <div>
                                <div className='bg-[#F3F7FD] card-second'>
                                    <div className='flex gap-2'>
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
                                </div>
                            </div>

                        </div>

                        {/* card 6 */}

                        {/* card 7 */}
                        <div className='w-[320px] h-[354px]'>

                            <div className='bg-[#195A91] card-first'>
                                <p>{t("announce.date")}</p>
                                <h1 className='text-[20px] font-medium'>{t("announce.title1")} <br /> {t("announce.title2")}</h1>
                            </div>

                            <div>
                                <div className='bg-[#F3F7FD] card-second'>
                                    <div className='flex gap-2'>
                                        <img src={location} alt="img" className='w-[20px] h-[20px]' />
                                        <h1>{t("announce.place")}</h1>
                                    </div>
                                    <p className='text-[#121212]'>{t("announce.desc")}</p>
                                    <button className='text-[14px] w-[113px] h-[32px] text-[#195A91]'>{t("announce.register")}</button>
                                </div>
                            </div>

                        </div>

                        {/* card 7 */}
                    </div>
                    {/* cards */}
                </div>

                <div className='announce-footer'>
                    <Footer />
                </div>

            </div>
        </>
    )
}
