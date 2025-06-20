
import Navbar from "../components/navbar";
import { useState } from 'react';


function Section1(props) {
  return (
    <section className="md:mt-[150px] md:mb-[250px] md:mx-[150px] md:py-[40px] lg:mt-[250px] lg:mb-[300px] lg:mx-[200px] lg:py-[80px]">
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
  <section id="About" className="md:mt-[150px] md:mb-[250px] md:mx-[150px] md:py-[40px] lg:mt-[250px] lg:mb-[300px] lg:mx-[200px] lg:py-[80px]">
    <h1 className="before:content-['1.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">Who i am:</h1>
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
      <img className="h-[80%] w-[40%] ml-[40px] rounded-[12px] shadow-[14px_16px_0px_0px_#48A6A7] hover:shadow-[20px_22px_0px_0px_#48A6A7] hover:translate-x-[-4px] hover:translate-y-[-4px] ease-in-out duration-300" src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=" alt="" />
    </div>
  </section>
  )
};

function Section3(props) {
  const active = "text-light-blue font-header font-semibold p-[8px] mr-[22px] underline underline-offset-[8px]"
  const pending = "text-light-gray font-header font-semibold p-[8px] mr-[22px] hover:text-white underline-offset-[8px] hover:underline"
  const [order, setOrder] = useState(1)

  const Experience1 = () =>{
    return (
      <div className="text-light-gray mt-6 w-[100%] h-[100%] p-[12px]">
        <p className="text-light-gray font-header font-semibold max-w-[50%]">
          In this period I had just finished my high school studies and pretty much knew that I wanted to pursue a career in Tech. So I started researching and learning in my own time. <br/>
          <br/>
          That led me to join the  <strong className="text-header text-light-blue">Le Wagon Webdev bootcamp</strong>, where I acquired  <strong className="text-header text-light-blue">Le Wagon's certification</strong>  and the  <strong className="text-header text-light-blue">RNCP level 6 certification</strong>. <br/>
          <br/>
          As a beginner I had to learn the basics, starting with the programming language  <strong className="text-header text-light-blue">Driss</strong>  and all of the necessary  <strong className="text-header text-light-blue">OPP</strong> rules and practices. Then I learned about  <strong className="text-header text-light-blue">data manipulation</strong> and <strong className="text-header text-light-blue">data managment</strong>
          using <strong className="text-header text-light-blue">Sql</strong> and <strong className="text-header text-light-blue">Postgres</strong>.
          Following that up was <strong className="text-header text-light-blue">UX UI research</strong> and translating that to <strong className="text-header text-light-blue">user-friendly, responsive wireframes</strong> on <strong className="text-header text-light-blue">Figma</strong>. And of course, the next step was to learn <strong className="text-header text-light-blue">front-end</strong> concepts and learning <strong className="text-header text-light-blue">HTML</strong> and <strong className="text-header text-light-blue">CSS</strong>. Then
          some <strong className="text-header text-light-blue">Javascript</strong> to make said <strong className="text-header text-light-blue">dynamic design</strong> and for <strong className="text-header text-light-blue">Api managment</strong> while also learning to make <strong className="text-header text-light-blue">MVC</strong> and <strong className="text-header text-light-blue">Saas</strong> apps from scratch on <strong className="text-header text-light-blue">Ruby on Rails</strong> and <strong className="text-header text-light-blue">deploy</strong> them on <strong className="text-header text-light-blue">Heroku</strong>.
        </p>
      </div>
    )
  }

  const Experience2 = () =>{
    return (
      <div className="text-light-gray mt-6 w-[100%] h-[100%] p-[12px]">
        <p className="text-light-gray font-header font-semibold max-w-[50%] ">
          During this time I embraced my first role as a <strong className="text-header text-light-blue">freelance teacher</strong> at <strong className="text-header text-light-blue">Le Wagon Casablanca</strong>, where I've given lectures on <strong className="text-header text-light-blue">UX/UI design (Figma, user research,
          prototyping)</strong>  and provided <strong className="text-header text-light-blue">hands-on training</strong> on <strong className="text-header text-light-blue">HTML, CSS, JavaScript, Ruby on Rails, Heroku deployment, best coding practices</strong> and <strong className="text-header text-light-blue">project development</strong>. <br/>
          <br/>
          From <strong className="text-header text-light-blue">December 2023</strong> till <strong className="text-header text-light-blue">February 2024</strong>, I <strong className="text-header text-light-blue">co-managed a 9-week web development bootcamp</strong> for
          <strong className="text-header text-light-blue"> 30+</strong> students, providing <strong className="text-header text-light-blue">mentorship</strong>, <strong className="text-header text-light-blue">overseeing projects</strong>, and ensuring a <strong className="text-header text-light-blue">hands-on learning</strong> experience
          in <strong className="text-header text-light-blue">full-stack development</strong> and <strong className="text-header text-light-blue">UX/UI design</strong>.<br/>
          <br/>
          This period of my <strong className="text-header text-light-blue">career</strong> has taught me a lot about <strong className="text-header text-light-blue">clear</strong> and <strong className="text-header text-light-blue">effective communication</strong> while working with a <strong className="text-header text-light-blue">diverse group of people</strong> and how to <strong className="text-header text-light-blue">guide</strong> and <strong className="text-header text-light-blue">transfer knowledge</strong> in a way that can lead to more <strong className="text-header text-light-blue">productivity</strong> and a <strong className="text-header text-light-blue">good work atmosphere</strong>.
        </p>
      </div>
      )
  }

  const Experience3 = () =>{
    return (
      <div className="text-light-gray mt-6 w-[100%] h-[100%] p-[12px]">
        <p className="text-light-gray font-header font-semibold w-[50%] ">
          And now I still mainly do <strong className="text-header text-light-blue">freelance</strong> work either at the <strong className="text-header text-light-blue">Le Wagon</strong> campus or on sites like <strong className="text-header text-light-blue">Upwork</strong>. <br/>
          <br/>
          I have also been focused on improving my craft by learning new things, such as front-end libraries like <strong className="text-header text-light-blue">Tailwind</strong> and <strong className="text-header text-light-blue">Bootstrap</strong> and honing my <strong className="text-header text-light-blue">JavaScript</strong> skills by learning <strong className="text-header text-light-blue">React.js</strong> and <strong className="text-header text-light-blue">TypeScript</strong>.
          I've also been practicing <strong className="text-header text-light-blue">creating</strong> and <strong className="text-header text-light-blue">managing</strong> <strong className="text-header text-light-blue">RESTful APIs</strong> using my expertise in <strong className="text-header text-light-blue">Ruby on Rails</strong>. <br/>
          <br/>
          I remain to this day a <strong className="text-header text-light-blue">young</strong>, <strong className="text-header text-light-blue">passionate</strong> developer trying to <strong className="text-header text-light-blue">thrive</strong> and <strong className="text-header text-light-blue">learn</strong> in a domain that's always <strong className="text-header text-light-blue">evolving</strong> while finding my place in the middle of the <strong className="text-header text-light-blue">AI revolution</strong>.
        </p>
      </div>
    )
  }

  return (
    <section id="Experience" className="md:mt-[150px] md:mb-[250px] md:mx-[150px] md:py-[40px] lg:mt-[250px] lg:mb-[300px] lg:mx-[200px] lg:py-[80px]">
       <h1 className="before:content-['2.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">My Journey:</h1>
       <hr className="border-t border-light-gray my-4" />

       <div className="flex">
        <button id="1" className={order === 1 ? active : pending} onClick={() => setOrder(1)}> 2022-23 </button>
        <button id="2" className={order === 2 ? active : pending} onClick={() => setOrder(2)}> 2023-24 </button>
        <button id="3" className={order === 3 ? active : pending} onClick={() => setOrder(3)}> 2024-today </button>
       </div>

       {
        order === 1 ? (
          <Experience1/>
        ) : order === 2 ? (
          <Experience2/>
        ) : order === 3 ? (
          <Experience3/>
        ) : null
       }
    </section>
    );
}

function Section4(props) {
  const WorkCard = (props)=> {
    return (
      <div className="text-white h-[300px] my-[10px] p-[34px] border border-blue ease-in duration-300 hover:bg-blue hover:translate-y-[-12px] group relative">
        <div className="flex justify-center justify-between mb-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-blue group-hover:text-white transition-colors duration-300"
          >
            <path
              d="M10.414 4l2 2H20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6.414zM4 6v12h16V8h-8.414l-2-2H4z"
              fill="currentColor"
            />
          </svg>

          <a href={props.project.link} className="hover:translate-y-[-8px] ease-in duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block ml-2 align-middle text-blue group-hover:text-white transition-colors duration-300">
              <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7zm-9 4h7V5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7H5V7z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <h1 className="font-header font-bold text-light-blue group-hover:text-white transition-colors duration-300 text-[28px]">
          {props.project.title}
        </h1>

        <p className="text-light-gray font-header font-semibold max-w-[70%] group-hover:text-white transition-colors duration-300">{props.project.description}.</p>

        <div className="flex flex-row content-end absolute bottom-[34px] left-[34px]  text-light-gray">
          {
            props.project.tools && props.project.tools.map((tool, idx) => (
              <p key={idx} className="mr-[12px] font-header font-semibold max-w-[70%] group-hover:text-white transition-colors duration-300  group-hover:text-white transition-colors duration-300">{tool}</p>
            ))
          }

        </div>
      </div>
    )
  }
  return (
    <section id="Work" className="md:mt-[150px] md:mb-[250px] md:mx-[150px] md:py-[40px] lg:mt-[250px] lg:mb-[300px] lg:mx-[200px] lg:py-[80px]">
      <h1 className="before:content-['3.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">What i have worked on:</h1>
      <hr className="border-t border-light-gray my-4" />

      <div className="grid grid-cols-3 gap-[12px]">
        {
          props.projects && props.projects.map((project,idx)=> (
            <WorkCard key={idx} project={project}/>
          ))
        }
      </div>

    </section>

  )

}

function Section5(props) {
  return (
    <section id="Contact" className="md:mt-[150px] md:mb-[250px] md:mx-[150px] md:py-[40px] lg:mt-[250px] lg:mb-[300px] lg:mx-[200px] lg:py-[80px]">
      <h1 className="before:content-['4.'] before:mr-[10px] before:text-light-blue before:font-bold  text-white font-header text-[28px]">How to get in touch:</h1>
      <hr className="border-t border-light-gray my-4" />

      <div className="text-center mx-auto">
        <h1 className="">Intrested with my work ?</h1>
        <p>Im always looking for new opertunities</p>

      </div>

    </section>
  )
}

function App() {
  const skills = ["Html5","Css","Javascript","Sql","Postgress","Heroku deployment","Ruby on Rails", "React js", "Figma"];
  const projects = [
    {link: "https://github.com/flyingPie23", title: "this a title1", description: "a quick description of the project.1", tools: ["tool", "tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title2", description: "a quick description of the project.2", tools: ["tool", "tool", "tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title3", description: "a quick description of the project.3", tools: ["tool", "tool", "tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title4", description: "a quick description of the project.4", tools: ["tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title5", description: "a quick description of the project.5", tools: ["tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title6", description: "a quick description of the project.6", tools: ["tool",]},
    {link: "https://github.com/flyingPie23", title: "this a title7", description: "a quick description of the project.7", tools: ["tool", "tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title8", description: "a quick description of the project.8", tools: ["tool", "tool"]},
    {link: "https://github.com/flyingPie23", title: "this a title9", description: "a quick description of the project.9", tools: ["tool"]}
  ]

  return (
    <div className="main-page relative">
      <Navbar/>
      <Section1 />
      <Section2 skills={skills} />
      <Section3/>
      <Section4 projects={projects}/>
      <Section5/>
    </div>
  );
}

export default App;
