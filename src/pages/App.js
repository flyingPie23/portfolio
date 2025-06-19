
import Navbar from "../components/navbar";
import { useState } from 'react';

function Section1() {
  return (
    <section className="md:my-[200px] md:mx-[150px] md:py-[40px]">
      <h2 className="font-header text-[28px] text-light-blue">Hello! welcome to my portfolio.</h2>
      <h1 className="font-header text-[48px] font-extrabold text-white">Driss Freah</h1>
      <p className="text-light-gray">
      And I'm a software developer and UI UX designer. I have worked multiple projects as a fullstack dev either in a team or as a solo dev.  <br/>
      If you would like to see some of these projects and get to know me and how I got here you're in luck ! <br/>
      oh and heres my <a href={require("../assets/files/drissCV.pdf")} download className="text-light-blue font-bold underline">resume</a> just incase.
      </p>
    </section>
    );
}

function Section2(props) {
  return (
  <section id="About" className="md:my-[200px] md:mx-[150px] md:py-[40px]">
    <h1 className="before:content-['1.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">About me</h1>
    <hr className="border-t border-light-gray my-4" />
    <div className="flex">
      <div>
        <p className="text-light-gray mr-[40px] ">
          Hey there! my name is  <strong className="text-header text-light-blue">Driss</strong> and I'm a Developer. I started my tech journey back in <strong className="text-header text-light-blue">2022</strong> when I was just turning <strong className="text-header text-light-blue">18.</strong>  <br/>
          <br/>
          Straight after finishing high school I knew I wanted to get a career in software development. It started with a passion for game design and after starting the <a href="https://www.lewagon.com/" target="_blank" rel="noreferrer" className="text-header text-light-blue underline font-bold">le Wagon's</a> bootcamp
          here at Casablanca where I'm from, it quickly became an interest in designing and the whole front-end aspect of web development. In there I had the wonderful opportunity to learn amongst a talented group of my peers skills that helped throughout my journey
          such as <strong className="text-header text-light-blue">writing clean efficient code, collaboration</strong> and <strong className="text-header text-light-blue">UX UI principles</strong> that I still follow to this day. <br/>
          And I've been able to hone these skills even further in my most prominent role yet, as part of the <strong className="text-header text-light-blue">Teaching Staff</strong> here at le Wagon's Casablanca, providing lectures and guidance to people looking to start their own tech journey. <br/>
          <br/>
          And now I'm focus`ed on learning as much as I can in an always changing and evolving field that I'm really passionate about while trying to deliver noticeable impact on <strong className="text-header text-light-blue">user-friendly</strong> projects,
          whether they be my own ideas, or part of a thriving team.<br/>
          <br/>
          Here's some of the languages, frameworks and tools that I use:
        </p>
        <div className="grid grid-cols-3 gap-[4px] mt-[32px]">
          {props.skills && props.skills.map((skill, idx) => (
            <p key={idx} className="text-light-gray before:content-['*'] before:mr-[10px]  before:text-light-blue before:font-bold text-[14px] text-header font-bold">
              {skill}
            </p>
          ))}
        </div>
      </div>
      <img className="h-[80%] w-[40%] ml-[40px] rounded-[12px] shadow-[14px_16px_0px_0px_#48A6A7] hover:shadow-[20px_22px_0px_0px_#48A6A7] hover:translate-x-[-4px] hover:translate-y-[-4px]" src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=" alt="" />
    </div>
  </section>
  )
};

function Section3(props) {
  const active = "text-light-blue font-header font-semibold p-[8px] mr-[22px] underline underline-offset-[8px]"
  const pending = "text-light-gray font-header font-semibold p-[8px] mr-[22px] hover:text-white underline-offset-[8px] hover:underline"
  const [order, setOrder] = useState(1)

  return (
    <section id="Experience" className="md:my-[200px] md:mx-[150px] md:py-[40px]">
       <h1 className="before:content-['2.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">Experience</h1>
       <hr className="border-t border-light-gray my-4" />

       <div className="flex">
        <button id="1" className={order === 1 ? active : pending} onClick={() => setOrder(1)}> 2022-23 </button>
        <button id="2" className={order === 2 ? active : pending} onClick={() => setOrder(2)}> 2023-24 </button>
        <button id="3" className={order === 3 ? active : pending} onClick={() => setOrder(3)}> 2024-today </button>
       </div>
    </section>
  );
}

function App() {
  const skills = ["Html5","Css","Javascript","Sql","Postgress","Git Version controle","Ruby on Rails", "React js", "Figma"];

  return (
    <div className="main-page">
      <Navbar/>
      <Section1 />
      <Section2 skills={skills} />
      <Section3/>
    </div>
  );
}

export default App;
