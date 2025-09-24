import React from 'react';
import tel from "../assets/calling.svg"

export default function Phone() {
  return (
    <>
      <div className="container bg-[#086D7A] phone-wrap">
        <h2 className='text-[40px] text-white font-light'>
            Телефонные номера
        </h2>

       <div className='phones-wrap-tel flex justify-between'>

        {/* 1 */}
         <div className='flex gap-4'>
            <div className='w-[56px] h-[56px] rounded-[50%] bg-[#0d8090] tel-img'>
                <img src={tel} alt="tel" className='w-[24px] h-[24px]'/>
            </div>

            <div>
                <a href="tel:+998901234567" className='text-white text-[28px]'>+ 998 90 123 45 67</a>
                <p className='text-white'>rektor yordamchisi</p>
            </div>
        </div>

        {/* 1 */}


        {/* 2 */}

         <div className='flex gap-4'>
            <div className='w-[56px] h-[56px] rounded-[50%] bg-[#0d8090] tel-img'>
                <img src={tel} alt="tel" className='w-[24px] h-[24px]'/>
            </div>

            <div>
                <a href="tel:+998901234567" className='text-white text-[28px]'>+ 998 90 123 45 67</a>
                <p className='text-white'>rektor yordamchisi</p>
            </div>
        </div>

        {/* 2 */}


        {/* 3 */}

         <div className='flex gap-4'>
            <div className='w-[56px] h-[56px] rounded-[50%] bg-[#0d8090] tel-img'>
                <img src={tel} alt="tel" className='w-[24px] h-[24px]'/>
            </div>

            <div>
                <a href="tel:+998901234567" className='text-white text-[28px]'>+ 998 90 123 45 67</a>
                <p className='text-white'>rektor yordamchisi</p>
            </div>
        </div>

        {/* 3 */}
       </div>


      </div>
    </>
  )
}
