import React, { useState } from "react";
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
import rus from "../assets/russian.jpg";
import eng from "../assets/english.jpg";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "uz", name: "Uzb", flag: uzb },
    { code: "ru", name: "Рус", flag: rus },
    { code: "en", name: "Eng", flag: eng },
];



export default function HeaderSecond() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.code);
        localStorage.setItem("lang", lang.code);
        setOpen(false);
    };

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
                                <a href="mailto:info@uznpu.uz" className='text-white relative bottom-[2px]'>{t("email")}</a>
                            </div>

                            <div className='flex gap-4'>
                                <img src={phone} alt="phone" className="w-[20px] h-[20px]" />
                                <a href="tel:+998712767651" className='text-white relative bottom-[2px]'>{t("phone")}</a>

                            </div>
                        </div>

                        {/* 1 */}

                        {/* 2 */}
                        <div className='flex gap-5'>
                            <div className="flex gap-4">
                                <img src={zvuk} alt="zvuk" className="w-[24px] h-[24px]" />
                                <img src={glaz} alt="glaz" className="w-[24px] h-[24px]" />
                            </div>


                            {/* language */}
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="flex items-center text-white gap-2 px-3 py-1 rounded-md shadow cursor-pointer"
                                >
                                    <img src={currentLang.flag} alt={currentLang.name} className="w-6 h-6 rounded-full" />
                                    <span>{currentLang.name}</span>
                                </button>

                                {/* Dropdown */}
                                {open && (
                                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang)}
                                                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                                            >
                                                <img src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-full" />
                                                <span>{lang.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

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
                                <li className="flex"><a href="#">{t("about_university")}</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                                <li className="flex"><a href="#">{t("education")}</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                                <li className="flex"><a href="#">{t("directions")}</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                                <li className="flex"><a href="#">{t("links")}</a><HiChevronDown className="relative top-[1px] w-[24px] h-[24px]" /></li>
                            </ul>
                        </div>

                        {/* 2 */}

                        {/* 3 */}
                        <div>
                            <button className="w-[164px] h-[48px] bg-[#086D7A] text-white rounded-xl">{t("apply")}</button>
                        </div>
                        {/* 3 */}
                    </div>
                    <div className="palochka-header"></div>
                    {/* header 2 */}
                </div>

                {/* header 3 */}

                <div className="flex header-side-3">
                    <div className="header-thirdd">
                        <h1 className="text-white text-[55px] font-medium">{t("announce.title3")}</h1>
                        <p className="text-white">
                            {t("announce.desc3")}
                        </p>

                    </div>


                    <div>
                        <img src={announce} alt="img" className="w-[1384px] h-[410px]" />
                    </div>

                </div>
                {/* header 3 */}
            </div>
        </>
    )
}
