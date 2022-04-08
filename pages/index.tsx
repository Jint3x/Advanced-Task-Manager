import React from "react"

export default function Homepage() {
  return (
    <>
      <Introduction />
      <Description />
    </>
  )
}

function Introduction() {
  return (
    <>
      <MainText />
      <Buttons />
    </>
  )
}

function MainText() {
  return (
    <div
     className={"w-full text-white 3xl:flex 3xl:max-w-[1980px] 3xl:ml-auto 3xl:mr-auto"}
    >
      <div
       className={"3xl:w-[50%]"}
      >
        <h1
        className={"text-mobile-header text-center mt-[50px] md:mt-[104px] md:text-[2.5rem]"}
        >Advanced Task Manager</h1>

        <p className={"text-primary-purple text-center md:mt-[9px] md:text-[1.563rem]"}>
          Keep yourself organized
        </p>

        <p 
        className={"mt-[20px] w-[300px] text-base ml-auto mr-auto text-justify leading-[0.969rem] md:mt-[43px] md:w-[666px] md:text-[1.25rem] md:leading-[1.465rem]"}>
          An easy to use, fast and beautiful way to organize your day to day tasks and make sure they are completed in time. This task manager
          allows you to add to-dos, set timers, get notifications & more. Make sure to read the docs for more.
        </p>
      </div>

      <div 
       className={"mt-[25px] bg-[#1B1B1B] h-[191px] w-[288px] rounded ml-auto mr-auto md:mt-[70px] md:h-[386px] md:w-[582px] 3xl:[w-50%]"}
      >
        {
          // Animation goes here
        }
      </div>
    </div>
  )
}


function Buttons() {
  return (
    <div 
     className={"flex w-[328px] mr-auto ml-auto mt-16 justify-between md:w-[582px] md:mt-12 3xl:mt-[174px]"}
    >
      <button 
       className={"bg-primary-green rounded-[10px] h-[33px] w-[160px] text-lg md:h-[49px] md:w-[188px] md:text-[20px]"}
      >
        <a 
         className={"text-white no-underline flex justify-center items-center h-full"}
         href={"/atm/"}
        >
          Get Started 
        </a>
      </button>

      <button
       className={"bg-primary-purple rounded-[10px] h-[33px] w-[160px] text-lg md:h-[49px] md:w-[188px] md:text-[20px]"}
      >
        <a 
         className={"text-white no-underline flex justify-center items-center h-full"}
         href={"/docs/"}
        >
          Read the docs
        </a>
      </button>
    </div>
  )
}

function Description() {
  return (
    <div
     className={"grid grid-cols-1 grid-rows-homepage-mobile-description text-white mt-[87px] mb-[50px] md:grid-cols-homepage-tablet-description md:grid-rows-homepage-tablet-description md:w-[750px] md:ml-auto md:mr-auto xl:grid-cols-homepage-laptop-description xl:w-[1176px] 3xl:w-[1256px] 3xl:grid-cols-homepage-screen-description" }
    >
      <div 
       className={"bg-gradient-to-b from-primary-green to-primary-purple w-[110px] h-[110px] rounded-full ml-auto mr-auto flex justify-center items-center md:row-start-3 md:row-end-3 md:col-start-3 md:col-end-3 xl:bg-gradient-to-r"}
      >
        <p 
         className={"text-[1.25rem] xl:text-[1.375rem]"}
        >
          Why?
        </p>
      </div>

      <RenderLine row={"row-start-2 row-end-2"} />
      <RenderLine row={"row-start-4 row-end-4"} />
      <RenderLine row={"row-start-6 row-end-6"} />
      <RenderLine row={"row-start-8 row-end-8"} />
      <RenderLine row={"row-start-10 row-end-10"} />
      <RenderLine row={"row-start-12 row-end-12"} />

      <RenderBlockText 
       row={"row-start-3 row-end-3 md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1"}
       text={"Works offline - once loaded, it can be used even without an internet connection"}
       bgColor={"bg-primary-green"}      
      />

      <RenderBlockText 
       row={"row-start-5 row-end-5 md:row-start-3 md:row-end-3 md:col-start-1 md:col-end-1"}
       text={"Light - All pages are as small as possible, offering great performance on phones, tablets, monitors and more!"}
       bgColor={"bg-primary-green"}      
      />

      <RenderBlockText 
       row={"row-start-7 row-end-7 md:row-start-5 md:row-end-5 md:col-start-1 md:col-end-1"}
       text={"Extremely fast - Optimized in multiple possible ways to offer the fastest possible experience"}
       bgColor={"bg-primary-green"}      
      />

      <RenderBlockText 
       row={"row-start-9 row-end-9 md:row-start-1 md:row-end-1 md:col-start-5 md:col-end-5"}
       text={"Announcements - Get notified before your task expires!"}
       bgColor={"bg-primary-purple"}      
      />

      <RenderBlockText 
       row={"row-start-11 row-end-11 md:row-start-3 md:row-end-3 md:col-start-5 md:col-end-5"}
       text={"Downloadable - once loaded, it can be used even without an internet connection"}
       bgColor={"bg-primary-purple"}      
      />

      <RenderBlockText 
       row={"row-start-13 row-end-13 md:row-start-5 md:row-end-5 md:col-start-5 md:col-end-5"}
       text={"Organized - Have as many categories as you need to fulfull your daily tasks"}
       bgColor={"bg-primary-purple"}      
      />


      <div
       className={"hidden md:block h-[475px] w-[102px] md:row-start-1 md:row-end-5 md:col-start-2 md:col-end-2 mt-[53px] xl:w-[150px] 3xl:w-[230px] 3xl:h-[498px]"}
      >
        <RenderSVGLines />
      </div>

      <div 
       className={"hidden md:block scale-x-[-1] scale-y-[1] h-[475px] w-[102px] md:row-start-1 md:row-end-5 md:col-start-4 md:col-end-4 mt-[53px] xl:w-[150px] 3xl:w-[230px] 3xl:h-[498px]"}
      >
        <RenderSVGLines />
      </div>
    </div>
  )
}

function RenderSVGLines() {
  return (
      <svg 
       className={"opacity-[0.5] w-[102px] h-[475px] ml-0 xl:w-[150px] xl:h-[498px] 3xl:w-[230px]"}
      >
        {/* Main Vertcial Line */}
        <line 
         x1={"62"} y1={"0"} 
         x2={"62"} y2={"475"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"xl:hidden"}
         />

        <line 
         x1={"62"} y1={"0"} 
         x2={"62"} y2={"498"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden xl:block 3xl:hidden"}
         />

        <line 
         x1={"120"} y1={"0"} 
         x2={"120"} y2={"498"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden 3xl:block"}
         />

        {/* Top Horizontal Line */}
        <line 
         x1={"0"} y1={"1"} 
         x2={"62"} y2={"1"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"3xl:hidden"}
        />

        <line 
         x1={"0"} y1={"1"} 
         x2={"120"} y2={"1"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden 3xl:block"}
        />

        {/* Middle Horizontal Line [towards the boxes] */}
        <line 
         x1={"0"} y1={"244"}
         x2={"62"} y2={"244"}
         stroke={"white"}
         strokeWidth={"2px"}
         className={"xl:hidden"}
        />

        <line 
         x1={"0"} y1={"249"}
         x2={"62"} y2={"249"}
         stroke={"white"}
         strokeWidth={"2px"}
         className={"md:hidden xl:block 3xl:hidden"}
        />

        <line 
         x1={"0"} y1={"249"}
         x2={"120"} y2={"249"}
         stroke={"white"}
         strokeWidth={"2px"}
         className={"md:hidden 3xl:block"}
        />

        {/* Bottom Horizontal Line */}
        <line 
         x1={"0"} y1={"474"} 
         x2={"62"} y2={"474"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"xl:hidden"}
        />

        <line 
         x1={"0"} y1={"497"} 
         x2={"62"} y2={"497"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden xl:block 3xl:hidden"}
        />

        <line 
         x1={"0"} y1={"497"} 
         x2={"120"} y2={"497"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden 3xl:block"}
        />

        {/* Middle Horizontal Line [towards the circle] */}
        <line 
         x1={"62"} y1={"244"} 
         x2={"102"} y2={"244"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"xl:hidden"}
         />

         <line 
         x1={"62"} y1={"249"} 
         x2={"150"} y2={"249"} 
         stroke={"white"} 
         strokeWidth={"2px"}
         className={"md:hidden xl:block 3xl:hidden"}
         />

        <line 
         x1={"120"} y1={"249"} 
         x2={"230"} y2={"249"} 
         stroke={"white"}
         strokeWidth={"2px"}
         className={"md:hidden 3xl:block"}
        />
      </svg>
  )
}

function RenderLine({row}: {row: string}) {
  return <div className={`h-[60px] w-[2px] bg-white opacity-[0.5] ${row} ml-auto mr-auto md:hidden`} />
}

interface RenderBlockText_I {
  text: string, 
  row: string,
  bgColor: "bg-primary-green" | "bg-primary-purple",
}

function RenderBlockText({text, bgColor, row}: RenderBlockText_I) {
  return (
    <div 
     className={`${bgColor} ${row} w-[190px] h-[110px] ml-auto mr-auto flex justify-center items-center pl-3 pr-3 rounded-[20px] md:w-[220px] xl:w-[383px]`}
    >
      <p 
       className={"text-[0.938rem] leading-[1.063rem] text-center xl:text-[1.125rem] xl:leading-[1.313rem]"}
      >
        {text}
      </p>
    </div>
  )
}


export { Introduction, Description, RenderLine, RenderBlockText }