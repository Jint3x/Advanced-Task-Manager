
interface GeneralButton_I {
  text: string,
  customClasses: string,
  clickFunction: Function
}

export default function GeneralButton({text, clickFunction, customClasses}: GeneralButton_I) {
  return (
    <button
     onClick={() => clickFunction() }
     className={`rounded-[10px] text-base md:text-xl " ${customClasses}`}
    >
      {text}
    </button>
  )
}