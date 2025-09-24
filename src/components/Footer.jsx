import React from 'react';
import img1 from "../assets/img1.svg"
import qush from "../assets/qush.svg";
import in1 from "../assets/in.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import hand from "../assets/hand.svg";
import krujok from "../assets/krujok.svg";

export default function Footer() {
  return (
    <div className="footer-side bg-[#0b0b1b] w-full">
      <footer>
        <div className='flex justify-between footer-wrapper'>
          {/* 1 */}
          <div className='w-[26%]'>
            <img src={img1} alt="img1" />

            <p className="footer-pi relative top-8 text-[18px] font-normal text-[#EAECF0]">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>
          {/* 1 */}


          {/* 2 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>Product</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Overview</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Features</a></li>


              <li>
                <a href="#" className='text-[16px] text-[#EAECF0]'>Solutions</a>

                <a
                  href="#"
                  className="text-[14px] text-[#EAECF0] border border-amber-50 rounded-xl border-a"
                > New
                </a>


              </li>






              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Tutorials</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Pricing</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Releases</a></li>
            </ul>
          </div>
          {/* 2 */}


          {/* 3 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>Company</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>About us</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Careers</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Press</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>News</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Media kit</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Contact</a></li>
            </ul>
          </div>
          {/* 3 */}


          {/* 4 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>Resources</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Blog</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Newsletter</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Events</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Help centre</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Tutorials</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Support</a></li>
            </ul>
          </div>
          {/* 4 */}

          {/* 5 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>Social</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Twitter</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>LinkedIn</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Facebook</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>GitHub</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>AngelList</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Dribbble</a></li>
            </ul>
          </div>
          {/* 5 */}


          {/* 6 */}
          <div>
            <ul className='leading-8'>
              <li><a href="#" className='text-[14px] text-[#D0D5DD]'>Legal</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Terms</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Privacy</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Cookies</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Licenses</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Settings</a></li>
              <li><a href="#" className='text-[16px] text-[#EAECF0]'>Contact</a></li>
            </ul>
          </div>
          {/* 6 */}
        </div>


        {/* last */}

        <div className='flex justify-between last-section'>
          <div>
            <p className="footer-pi text-[16px] font-normal text-[#D0D5DD]">
              © 2077 Untitled UI. All rights reserved.
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
