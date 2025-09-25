import React from 'react';
import announce from "../assets/announce.svg";
import map from "../assets/map.png";
import student from "../assets/st.svg";
import { useTranslation } from "react-i18next";

export default function Key() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-[#F3F7FD] min-h-[757px] key-wrap px-4 md:px-10 py-6">
                {/* Title */}
                <div className='flex gap-4 items-center mb-8'>
                    <img src={announce} alt="announce" className='animate-spin-fast w-10 h-10 md:w-12 md:h-12' />
                    <p className='text-[28px] md:text-[40px] font-medium'>{t("key.title")}</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 key-wrapper'>

                    <div className='w-full lg:w-[359px] rounded-[12px] bg-white key-map flex flex-col justify-between p-3'>
                        <img src={map} alt="map" className='w-full h-[200px] md:h-[259px] object-cover rounded-[12px]' />

                        <div className='w-full h-[90px] bg-[#F3F7FD] rounded-[12px] key-km'>
                            <h2 className="text-lg md:text-xl font-semibold">223 505 m2</h2>
                            <p className="text-sm md:text-base">{t("key.total_area")}</p>
                        </div>

                        <div className='w-full h-[90px] bg-[#F3F7FD] rounded-[12px] key-km'>
                            <h2 className="text-lg md:text-xl font-semibold">97 606 m2</h2>
                            <p className="text-sm md:text-base">{t("key.green_zones")}</p>
                        </div>


                    </div>

                    <div className="flex flex-col justify-between gap-4 w-full lg:w-[452px]">
                        <div className='bg-[#195A91] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>24,338</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.students")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>

                        <div className='bg-[#195A91] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>776</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.teachers")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>

                        <div className='bg-[#195A91] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>24,338</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.staff")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>
                    </div>

                    {/* 3 — GREEN BLOCKS */}
                    <div className="flex flex-col justify-between gap-4 w-full lg:w-[452px]">
                        <div className='bg-[#086D7A] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>35%</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.fin_aid")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>

                        <div className='bg-[#086D7A] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>56%</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.student_teachers")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>

                        <div className='bg-[#086D7A] rounded-[12px] h-[160px] flex justify-between key-num'>
                            <div>
                                <h1 className='text-[32px] md:text-[40px] leading-[48px] md:leading-[72px] font-medium text-white'>91%</h1>
                                <p className='text-[14px] md:text-[16px] text-[#F3F7FD] font-medium'>{t("key.employment")}</p>
                            </div>
                            <img src={student} alt="student" className='w-[48px] md:w-[64px] h-[48px] md:h-[64px]' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
