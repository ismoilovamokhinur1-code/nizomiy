import React from 'react';
import univer from "../assets/nizomiy.png";
import uni from "../assets/uni.svg";
import { useTranslation } from "react-i18next";

export default function Univer() {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <div className='uni-wrap flex'>
                    <div>
                        <img src={univer} alt="univer" className='h-[491px] object-cover' />
                    </div>


                    <div className='uni-back'>
                        <h1 className='text-white text-[30px]'> {t("univer.about_title")}</h1>
                        <p className='text-white text-[14px] leading-[140%] uni-pi'> {t("univer.about_desc")}</p>

                        <h1 className='text-white text-[30px] univer-aim'>{t("univer.aim_title")}</h1>
                        <p className='text-white text-[14px] leading-[140%] uni-pi'>{t("univer.aim_desc")}</p>

                        <button className='text-[14px] w-[113px] h-[32px] text-white univer-btn'>{t("univer.more_btn")}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
