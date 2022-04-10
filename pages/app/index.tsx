import GeneralButton from "../../components/GeneralButton"

export default function App() {
  return (
    <div>
      <Navigation />
      <Body />
      <Footer />
    </div>
  )
}


function Navigation() {
  return (
    <nav
     className={"mt-5 w-[188px] ml-auto mr-auto md:w-[726px] xl:flex xl:w-[1200px] xl:justify-between"}
    >
      <div
       className={"md:flex md:justify-between xl:w-[745px]"}
      >
        <GeneralButton 
         text={"Import Category Tree"}
         customClasses={"bg-primary-purple hover:bg-primary-purple-hover active:bg-primary-purple-active text-white w-[188px] h-[33px] transition-all md:w-[225px] md:h-[39px]"}
         clickFunction={() => null}
        />

        <GeneralButton 
         text={"Export Category Tree"}
         customClasses={"bg-primary-purple hover:bg-primary-purple-hover active:bg-primary-purple-active text-white w-[188px] h-[33px] transition-all mt-5 mb-5 md:mt-0 md:mb-0 md:w-[225px] md:h-[39px]"}
         clickFunction={() => null}
        />

        <GeneralButton 
         text={"Import Category"}
         customClasses={"bg-primary-purple hover:bg-primary-purple-hover active:bg-primary-purple-active text-white w-[188px] h-[33px] transition-all md:w-[225px] md:h-[39px]"}
         clickFunction={() => null}
        />
      </div>

      <div
       className={"mt-10 xl:mt-0"}
      >
        <GeneralButton 
         text={"New Category"}
         customClasses={"bg-primary-green hover:bg-primary-green-hover active:bg-primary-green-active text-white w-[171px] h-[33px] transition-all ml-auto mr-auto block md:w-[188px] md:h-[39px] md:mt-12 xl:mt-0"}
         clickFunction={() => null}
        />
      </div>
    </nav>
  )
}


function Body() {
  return (
    <section>

    </section>
  )
}


function Footer() {
  return (
    <footer>

    </footer>
  )
}