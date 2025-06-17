import Navbar from "../components/navbar"


function Section1 (props) {
  return (
    <section className="md:mx-[120px] xl:mx-[150px] mt-[180px] mb-[250px]">
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
    <section className="md:mx-[120px] xl:mx-[150px] mt-[180px] mb-[250px]">
      <h1 className="before:content-['1.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[18px]">About me</h1>
      <hr className="border-t border-light-gray my-4" />
      <div className="flex">
        <p className="text-light-gray ">
          Hey there! my name is  <strong className="text-header text-light-blue">Driss</strong> and Im a Developer, i started my Tech journey back in <strong className="text-header text-light-blue">2022</strong> when i was just turning <strong className="text-header text-light-blue">18.</strong>  <br/>
          <br/>
          Straight after finishing highshcool i knew i wanted to get a carrer in software development, it started with a passion for game design and after starting the <a href="https://www.lewagon.com/" target="_blank"  className="text-header text-light-blue underline font-bold">le Wagon's</a> bootcamp
          here at Casablanca where im from it quickly became a intrest in designing and the whole front end aspect of web development. in there i had the wonderfull opurtinity to learn amongst a talented group of my peers skills that helped through out my journey
          such as <strong className="text-header text-light-blue">writing clean efficient code, collaboration</strong> and <strong className="text-header text-light-blue">UX UI principles</strong> that I still follow to this day. <br/>
          and Ive been able to hone these skills even further in my most prominent role yet, as part of the <strong className="text-header text-light-blue">Teaching Staff</strong> here at le Wagon's Casablanca providing lectures and guidence to poeple looking to start their own tech journey. <br/>
          <br/>
          And now im focused on learning as much as i can in an always changing and evolving feild that Im really passionated about while trying to deliver noticable impact on, <strong className="text-header text-light-blue">User friendly</strong> projects
          wether they be my own ideas, or part of a thriving team.

        </p>

        <img className="h-[80%] w-[40%] ml-[40px] rounded-[12px] shadow-[14px_16px_0px_0px_#48A6A7] hover:shadow-[20px_22px_0px_0px_#48A6A7] hover:translate-x-[-4px] hover:translate-y-[-4px]" src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=" alt="" />
      </div>

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
