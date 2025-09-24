import React from 'react';
import announce from "../assets/announce.svg";
import map from "../assets/map.png";
import student from "../assets/st.svg";
import { useTranslation } from "react-i18next";

export default function Key() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-[#F3F7FD] h-[757px] key-wrap">
                <div className='flex gap-4'>
                    <img src={announce} alt="announce" className='animate-spin-fast' />
                    <p className='text-[40px] font-medium'>{t("key.title")}</p>
                </div>

                <div className='flex gap-[20px] key-wrapper'>

                    <div className='w-[359px] h-[504px] rounded-[12px] bg-white key-map'>
                        <img src={map} alt="map" className='w-[335px] h-[259px] rounded-[12px]' />

                        <div className='w-[335px] h-[90px] bg-[#F3F7FD] rounded-[12px] key-km'>
                            <h2>223 505 m2</h2>
                            <p>{t("key.total_area")}</p>
                        </div>

                        <div className='w-[335px] h-[90px] bg-[#F3F7FD] rounded-[12px] key-km'>
                            <h2>97 606 m2</h2>
                            <p>{t("key.green_zones")}</p>
                        </div>
                    </div>

                    {/* 2 */}

                    <div>

                        {/* 1 */}
                        <div className='bg-[#195A91] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>24,338</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.students")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 1 */}


                        {/* 2 */}
                        <div className='bg-[#195A91] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num1'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>776</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.teachers")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 2 */}

                        {/* 3 */}
                        <div className='bg-[#195A91] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num1'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>24,338</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.staff")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 3 */}



                    </div>

                    {/* 2 */}



                    {/* 3 */}

                    <div>

                        {/* 1 */}
                        <div className='bg-[#086D7A] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>35%</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.fin_aid")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 1 */}


                        {/* 2 */}
                        <div className='bg-[#086D7A] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num1'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>56%</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.student_teachers")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 2 */}

                        {/* 3 */}
                        <div className='bg-[#086D7A] rounded-[12px] w-[452px] h-[160px] flex justify-between key-num1'>
                            <div>
                                <h1 className='text-[40px] leading-[72px] font-medium text-white'>91%</h1>
                                <p className='text-[16px] text-[#F3F7FD] font-medium'>{t("key.employment")}</p>
                            </div>

                            <div>
                                <img src={student} alt="student" className='w-[64px] h-[64px]' />
                            </div>
                        </div>
                        {/* 3 */}



                    </div>

                    {/* 3 */}


                </div>
            </div>
        </>
    )
}
