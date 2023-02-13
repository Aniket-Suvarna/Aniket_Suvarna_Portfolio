import React from 'react'

function Header() {
    return (
        // <div className='block ml-auto mr-auto bg-[#dbdbdb] font-serif pb-4'>
        //     <div>
        //         <div className='font-[CenturyGothic] text-center font-semibold text-[40px]'>ANIKET SUVARNA</div>
        //         <div className='ml-2 mr-2 md:ml-5 md:mr-5 text-justify lg:ml-auto lg:mr-auto lg:w-[600px]'>An ambitious, self-motivated and result-oriented student with strong command over web development and game development . Constant learner and ability to adapt to new technologies and working in a fast-paced and team-driven environment.</div>
        //         <div className='flex justify-evenly lg:mt-6 mt-2'>
        //             <a href='https://www.instagram.com/aniket_suvarna/' target='blank'><img src='./instagram.png' width={35}></img></a>
        //             <a href='https://www.linkedin.com/in/aniket-suvarna-082556230/' target='blank'><img src='./linkedin.png' width={35}></img></a>
        //             <a href='https://github.com/Aniket-Suvarna' target='blank'><img src='./github.png' width={35}></img></a>
        //         </div>
        //     </div>

        // </div>

        <div className='block ml-auto mr-auto bg-[#dbdbdb] font-serif pb-4 lg:grid lg:grid-flow-col lg:grid-cols-2'>
            <div>
                <div className='font-[CenturyGothic] text-center font-semibold text-[40px]'>ANIKET SUVARNA</div>
                <div className='ml-2 mr-2 md:ml-5 md:mr-5 text-justify lg:ml-auto lg:mr-auto lg:w-[600px]'>An ambitious, self-motivated and result-oriented student with strong command over web development and game development . Constant learner and ability to adapt to new technologies and working in a fast-paced and team-driven environment.</div>
            </div>
            <div>
                <div className='flex justify-evenly lg:mt-6 mt-2 lg:pt-[30px]'>
                    <a href='https://www.instagram.com/aniket_suvarna/' target='blank'><img src='./instagram.png' width={35}></img></a>
                    <a href='https://www.linkedin.com/in/aniket-suvarna-082556230/' target='blank'><img src='./linkedin.png' width={35}></img></a>
                    <a href='https://github.com/Aniket-Suvarna' target='blank'><img src='./github.png' width={35}></img></a>
                </div>
            </div>

        </div>
    )
}

export default Header