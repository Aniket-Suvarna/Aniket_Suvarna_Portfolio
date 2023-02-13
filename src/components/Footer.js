import React from 'react'

function Footer() {
  return (
    <div className='text-center'>

      <div className='font-[CenturyGothic] text-[30px]'>Get Connect</div>

      <div className='flex justify-center font-mono font-light opacity-50 mt-2'>
        <img src='./C.png' className='mr-2 w-[25px]'></img><div>Designed by Aniket Suvarna</div>
      </div>



      <div className='font-mono font-bold mt-6'>Contact</div>

      <div className='flex justify-evenly mt-6 mb-6'>
        <a href='mailto:aniket.suvarna0810@gmail.com' target='blank'><img src='./email.png' width={40}></img></a>
        <a href='https://www.instagram.com/aniket_suvarna/' target='blank'><img src='./instagram.png' width={35}></img></a>
        <a href='https://www.linkedin.com/in/aniket-suvarna-082556230/' target='blank'><img src='./linkedin.png' width={35}></img></a>
        <a href='https://github.com/Aniket-Suvarna' target='blank'><img src='./github.png' width={35}></img></a>
      </div>
    </div>
  )
}

export default Footer