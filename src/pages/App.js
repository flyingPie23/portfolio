import Navbar from "../components/navbar"


function Section1 (props) {
  return (
    <section className="container mx-auto mt-[280px] mb-[360px]">
      <h2 className="font-header text-[28px] text-light-blue">Hello! welcome to my portfolio.</h2>
      <h1 className="font-header text-[48px] font-extrabold text-white">Driss Freah</h1>
      <p className="text-light-gray">
        And I'm a software developer and UI UX designer. I have worked multiple projects as a fullstack dev either in a team or as a solo dev.  <br/>
        If you would like to see some of these projects and get to know me and how I got here you're in luck ! <br/>
        oh and heres my <a href={require("../assets/files/drissCV.pdf")} download className="text-light-blue font-bold underline">resume</a> just incase.
      </p>
    </section>
  )
}

function Section2 (props) {
  return (
    <section className="container mx-auto mt-[200px] mb-[360px]">
      <h1 className="before:content-['1.'] before:mr-[10px] before:text-light-blue before:font-bold after:content-[] text-white font-header text-[18px]">About me</h1>
      <hr className="border-t border-light-gray my-4" />
      <p className="text-light-gray">

      </p>
    </section>
  )
}

function App() {
  return (
    <div className="main-page">
      <Navbar/>
      <Section1/>
      <Section2/>
    </div>
  );
}

export default App;
