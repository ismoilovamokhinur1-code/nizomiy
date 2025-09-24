import React from 'react';
import univer from "../assets/nizomiy.png";
import uni from "../assets/uni.svg";

export default function Univer() {
    return (
        <>
            <div className="container">
                <div className='uni-wrap flex'>
                    <div data-aos="fade-right">
                        <img src={univer} alt="univer" className='h-[491px] object-cover' />

                    </div>


                    <div data-aos="fade-left" className='uni-back'>
                        <h1 className='text-white text-[30px]'>Об университете</h1>
                        <p className='text-white text-[14px] leading-[140%] uni-pi'>Узбекский национальный педагогический университет является одним из крупных научно-просветительских центров нашей республики, имеет свою богатую историю и сложившиеся положительные традиции. Высококвалифицированный научно-педагогический коллектив университета обеспечивает качественное образование студентам.</p>

                        <h1 className='text-white text-[30px] univer-aim'>Цель университета</h1>
                        <p className='text-white text-[14px] leading-[140%] uni-pi'>Основная цель Университета – подготовка высококвалифицированных специалистов, всесторонне развитых, чувствующих свою ответственность перед государством и обществом, добросовестно и честно работающих на будущее страны, уважающих национальные и общечеловеческие ценности, конкурентоспособных в сфере международного образования.</p>

                        <button className='text-[14px] w-[113px] h-[32px] text-white univer-btn'>Подробнее</button>
                    </div>
                </div>
            </div>
        </>
    )
}
