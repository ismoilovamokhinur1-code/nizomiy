import React from 'react';
import announce from "../assets/announce.svg";
import iconfac from "../assets/iconfac.svg";

export default function Faculty() {
    return (
        <>
            <div className="faculty-wrap">
                {/* 1 */}
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <img src={announce} alt="announce" className='animate-spin-fast' />
                        <p className='text-[40px] font-medium'>Факультеты</p>
                    </div>

                    <div>
                        <button className='w-[171px] h-[53px] text-white announce-btn'>Все факультеты</button>
                    </div>
                </div>
                {/* 1 */}


                <div className='grid grid-cols-4 gap-4 wrap-cards-fac'>

                    {/* 1 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 1 */}

                    {/* 2 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 2 */}

                    {/* 3 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 3 */}

                    {/* 4 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 4 */}

                    {/* 5 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 5 */}


                    {/* 6 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 6 */}


                    {/* 7 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 7 */}


                    {/* 8 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 8 */}


                    {/* 9 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 9 */}


                    {/* 10 */}

                    <div className='w-[323px] h-[92px] rounded-[8px] bg-[#F3F7FD] flex justify-between fac-cards transition-shadow duration-300 hover:shadow-xl hover:border-1 hover:border-b-cyan-900'>
                        <h1 className='text-[16px] font-medium w-[70%]'>Факультет узбекского
                            языка и литературы</h1>

                        <div className='fac-img'>
                            <img src={iconfac} alt="iconfac" />
                        </div>
                    </div>

                    {/* 10 */}

                </div>
            </div>
        </>
    )
}
