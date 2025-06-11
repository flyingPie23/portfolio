
function Tabs(props) {
  return (
    <button className="text-white hover:text-light-blue focus:text-light-blue focus:underline "><strong className="text-light-blue">{props.order}</strong>{props.tab}</button>
  )
}

function Icon(props) {
  return (
    <span className="material-symbols-outlined text-white font-bold text-[50px] hover:text-light-blue drop-shadow-xl">
      code
    </span>
  )
}

function Navbar(props) {

  return (
    <div className="p-[24px] shadow-md grid gap-4 grid-cols-3 grid-rows-1 items-center justify-items-center font-header">
      <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
        <Tabs order="1." tab="About"/>
        <Tabs order="2." tab="Experience"/>
      </div>

      <Icon />

      <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
        <Tabs order="3." tab="Work"/>
        <Tabs order="4." tab="Contact"/>
      </div>
    </div>
  )
}

export default Navbar
