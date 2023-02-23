import React from 'react'

import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import 'react-circular-progressbar/dist/styles.css';

function Middle() {
  return (
    <div>

      <div className='lg:ml-auto lg:mr-auto lg:w-[600px] mt-5 lg:hidden'><img src='./Project1.png'></img></div>

      <div className='mt-[26px] lg:grid  lg:grid-cols-2 font-serif'>

        <div className='text-justify lg:ml-auto lg:mr-auto lg:w-[600px] ml-2 mr-2 md:ml-5 md:mr-5'>
          <div className=' font-bold text-[40px]'>FoodWeb</div>
          <div>
            A responsive food website built using ReactJs as base coding language.
            Here you could see the cuisines of different nations across the world.
            Tailwind CSS has been used for styling the website.
          </div>
          <div className='mt-2 font-bold'><i>Framework</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>NextJS</div><div>Tailwind CSS</div><div>Heroicons</div>
          </div>
          <div className='mt-2 font-bold'><i>Languages</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>JavaScript</div><div>CSS</div><div>HTML</div>
          </div>
          <a href='https://github.com/Aniket-Suvarna/NextJS_FoodWeb' target='blank'><div className='mt-10 bg-[#d4d4d4] w-[130px] text-center rounded-[8px] text-[20px]'>View Project</div></a>
          <a href='https://next-js-food-web.vercel.app/' target='blank'><div className='mt-10 bg-[#d4d4d4] w-[180px] text-center rounded-[8px] text-[20px]'>View Deployment</div></a>
        </div>

        <div className='lg:ml-auto lg:mr-auto lg:w-[600px] mt-5 hidden lg:block'><img src='./Project1.png'></img></div>


        <div className='lg:ml-auto lg:mr-auto lg:w-[600px] lg:mt-[70px] mt-10' ><img src='./Project2.png'></img></div>

        <div className='text-justify lg:ml-auto lg:mr-auto lg:w-[600px] lg:mt-[60px] mt-[30px] ml-2 mr-2 md:ml-5 md:mr-5'>
          <div className=' font-bold text-[40px]'>Flutter Wallpaper App</div>
          <div>
            Created a Wallpaper Application using
            Flutter along with Firebase connection for user authentication
          </div>
          <div className='mt-2 font-bold'><i>Framework</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>Android Studio</div>
          </div>
          <div className='mt-2 font-bold'><i>Languages</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>Dart</div><div>Kotlin</div><div>Swift</div>
          </div>
          <a href='https://github.com/Aniket-Suvarna/Flutter_WallpaperApp' target='blank'><div className='mt-10 bg-[#d4d4d4] w-[130px] text-center rounded-[8px] text-[20px]'>View Project</div></a>
        </div>

        <div className='lg:ml-auto lg:mr-auto lg:w-[600px] lg:mt-[70px] mt-5 lg:hidden'><img src='./Project3.png'></img></div>

        <div className='text-justify lg:ml-auto lg:mr-auto lg:w-[600px] ml-2 mr-2 md:ml-5 md:mr-5 mt-[30px] lg:mt-[60px]'>
          <div className=' font-bold text-[34px] lg:text-[40px] md:text-[40px]'>TogetherWeCreate-<br></br>TWC</div>
          <div>
          The website helps donors choose a good donation cause. It also
          provides employment to people by selling basic household products made by them.
          </div>
          <div className='mt-2 font-bold'><i>Framework</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>XAMPP</div>
          </div>
          <div className='mt-2 font-bold'><i>Languages</i></div>
          <div className='mt-2 grid  grid-cols-3'>
            <div>JavaScript</div><div>CSS</div><div>HTML</div>
            <div>Python</div><div>PHP</div>
          </div>
          <a href='https://github.com/Aniket-Suvarna/TogetherWeCreate-TWC' target='blank'><div className='mt-10 bg-[#d4d4d4] w-[130px] text-center rounded-[8px] text-[20px]'>View Project</div></a>
        </div>

        <div className='lg:ml-auto lg:mr-auto lg:w-[600px] lg:mt-[70px] mt-5 hidden lg:block'><img src='./Project3.png'></img></div>




      </div>
     
     
      <div className='flex justify-center mt-5'>
        <CodeBracketSquareIcon width={60} className='lg:mr-4 mr-2'/>
        <div className='lg:text-[50px] text-[28px] mt-6 mb-6 font-serif font-bold'>Most Languages Used</div>
      </div>

      <div className='lg:mt-10 flex justify-evenly mt-[50px]'>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="90" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#8353ff', })}>
            <div className='lg:text-[40px] text-[25px] text-[#8353ff] font-serif'>HTML</div>
          </CircularProgressbarWithChildren >
        </div>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="60" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#74264c', })}>
            <div className='lg:text-[40px] text-[25px] text-[#74264c] font-serif'>C++</div>
          </CircularProgressbarWithChildren >
        </div>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="20" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#3bffaa', })}>
            <div className='lg:text-[30px] text-[20px] text-[#3bffaa] font-serif'>Python</div>
          </CircularProgressbarWithChildren >
        </div>

      </div>





      <div className='mt-10 flex justify-evenly'>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="50" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#32a852', railColor: "#32a852" })}>
            <div className='lg:text-[40px] text-[25px] text-[#32a852] font-serif'>Java<br></br>Script</div>
          </CircularProgressbarWithChildren >
        </div>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="43.46" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#ff0095', })}>
            <div className='lg:text-[40px] text-[25px] text-[#ff0095] font-serif'>Dart</div>
          </CircularProgressbarWithChildren >
        </div>

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="50" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#ff0022', })}>
            <div className='lg:text-[40px] text-[25px] text-[#ff0022] font-serif'>CSS</div>
          </CircularProgressbarWithChildren >
        </div>

        {/* <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="0.58" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#ffe600', })}>
            <div className='lg:text-[40px] text-[25px] text-[#ffe600] font-serif'>Swift</div>
          </CircularProgressbarWithChildren >
        </div> */}


        {/* <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar value="0.58" text="Swift" styles={buildStyles({
            pathColor: '#ffe600',
            textColor: '#ffe600',
          })} />
        </div> */}

      </div>

      <div className='lg:mt-10 flex justify-evenly mt-5'>

        {/* <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="0.18" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#dd00ff', })}>
            <div className='lg:text-[40px] text-[25px] text-[#dd00ff] font-serif'>Kotlin</div>
          </CircularProgressbarWithChildren >
        </div> */}

        <div className='w-[200px]'>
          <CircularProgressbarWithChildren value="60" circleRatio={0.75} styles={buildStyles({ rotation: 0.625, pathColor: '#00c3ff', })}>
            <div className='lg:text-[30px] text-[20px] text-[#00c3ff] font-serif'>Tailwind<br></br>CSS</div>
          </CircularProgressbarWithChildren >
        </div>

      </div>

      <div className="lg:grid  lg:grid-cols-2 mt-5">
        
        <img className='md:ml-auto md:mr-auto' src='./Education.png'></img>
        <img className='md:ml-auto md:mr-auto' src='./FrameWorkUsed.png'></img>

      </div>







    </div>

  )
}

export default Middle