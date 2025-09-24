import React from 'react';
import img1 from "../assets/img1.svg"
import qush from "../assets/qush.svg";
import in1 from "../assets/in.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import hand from "../assets/hand.svg";
import krujok from "../assets/krujok.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-side bg-[#0b0b1b] w-full">
      <footer>
        <div className='flex justify-between footer-wrapper'>
          {/* 1 */}
          <div className='w-[26%]'>
            <img src={img1} alt="img1" />

            <p className="footer-pi relative top-8 text-[18px] font-normal text-[#EAECF0]">
              {t("footer_text")}
            </p>
          </div>
          {/* 1 */}


          {/* 2 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>{t("product")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("overview")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("features")}</a></li>


              <li>
                <a href="#" className='text-[16px] text-[#EAECF0]'>{t("solutions")}</a>

                <a
                  href="#"
                  className="text-[14px] text-[#EAECF0] border border-amber-50 rounded-xl border-a"
                > New
                </a>


              </li>






              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("tutorials")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("pricing")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("releases")}</a></li>
            </ul>
          </div>
          {/* 2 */}


          {/* 3 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>{t("company")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("about")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("careers")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("press")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("news1")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("media")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("contact1")}</a></li>
            </ul>
          </div>
          {/* 3 */}


          {/* 4 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>{t("resources")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("blog")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("newsletter")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("events")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("help")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("tutorials")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("support")}</a></li>
            </ul>
          </div>
          {/* 4 */}

          {/* 5 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>{t("social")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("twitter")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("linkedin")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("facebook")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("github")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("angellist")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("dribbble")}</a></li>
            </ul>
          </div>
          {/* 5 */}


          {/* 6 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>{t("legal")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("terms")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("privacy")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("cookies")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("licenses")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("settings")}</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>{t("contact")}</a></li>
            </ul>
          </div>
          {/* 6 */}
        </div>


        {/* last */}

        <div className='flex justify-between last-section'>
          <div>
            <p className="footer-pi text-[16px] font-normal text-[#D0D5DD]">
              {t("rights")}
            </p>
          </div>



          <div className='flex gap-7'>
            <img src={qush} alt="img1" className='w-[24px] h-[24px]'/>
            <img src={in1} alt="img2" className='w-[24px] h-[24px]'/>
            <img src={facebook} alt="img3" className='w-[24px] h-[24px]' />
            <img src={github} alt="img4" className='w-[24px] h-[24px]' />
            <img src={hand} alt="img5" className='w-[24px] h-[24px]' />
            <img src={krujok} alt="img" className='w-[24px] h-[24px]' />

          </div>
        </div>

      </footer>
    </div>
  )
}
