
function Tabs(props) {
  return (
    <button className="text-white hover:text-light-blue focus:text-light-blue focus:underline underline-offset-[4px] "><strong className="text-light-blue mr-[12px]">{props.order}</strong>{props.tab}</button>
  )
}

function Icon(props) {
  return (
    <button className="material-symbols-outlined text-white font-bold text-[50px] hover:text-light-blue drop-shadow-xl">
      code
    </button>
  )
}

function Navbar(props) {

  return (
    <header className="sticky top-0">
      <nav className="bg-dark-blue p-[24px] shadow-md grid gap-4 grid-cols-3 grid-rows-1 items-center justify-items-center font-header ">
        <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
          <Tabs order="1." tab="About"/>
          <Tabs order="2." tab="Experience"/>
        </div>

        <Icon />

        <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
          <Tabs order="3." tab="Work"/>
          <Tabs order="4." tab="Contact"/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
