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
  return null;
}


export { Introduction }