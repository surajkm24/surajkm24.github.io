import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/skills.css';
import { GiSkills } from 'react-icons/gi';
import { SiChakraui, SiHtml5,SiTypescript, SiCss3, SiJavascript, SiReact, SiReactrouter, SiHeroku, SiRedux, SiVercel, SiExpress, SiMongodb, SiGit, SiNetlify } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io5'

export const Skills = () => { 
  
    const { light } = useContext(ThemeContext);

    return <div id='skill' style={{ '--bglightedskill': light ? "#edf2f8" : "#0a192f",'--bglightskill': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
        <p>Sk<span>il</span>ls <GiSkills fontSize={'25px'} /></p>
        <div id='skillset' >
            <div data-aos='zoom-in'>
                <SiHtml5 style={{ color: "#ef662a" }} className='skillIc' />
                <p>HTML</p>
            </div>
            <div data-aos='zoom-in'>
                <SiCss3 style={{ color: "#1c88c7" }} className='skillIc' />
                <p>CSS</p>
            </div>
            <div data-aos='zoom-in'>
                <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='skillIc' />
                <p>JavaScript</p>
            </div>
            <div data-aos='zoom-in'>
                <SiTypescript style={{ color: "blue", background: "white",borderRadius:"10px" }} className='skillIc' />
                <p>TypeScript</p>
            </div>
            <div data-aos='zoom-in'>
                <SiReact style={{ color: "#53c1de" }} className='skillIc' />
                <p>React</p>
            </div>
            <div data-aos='zoom-in'>
               <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/router-ii.png'/>
                <p>React Router</p>
            </div>
            <div data-aos='zoom-in'>
                <SiRedux style={{ color: "#7549ba" }} className='skillIc' />
                <p>Redux</p>
            </div>
            <div data-aos='zoom-in'>
                <IoLogoNodejs style={{ color: "#8bc64a" }} className='skillIc' />
                <p>NodeJs</p>
            </div>
            <div data-aos='zoom-in'>
                <SiExpress style={{ color: "#000000" }} className='skillIc' />
                <p>Express</p>
            </div>
            <div data-aos='zoom-in'>
                <SiMongodb style={{ color: "#589733" }} className='skillIc' />
                <p>MongoDB</p>
            </div>
            <div data-aos='zoom-in'>
                <SiGit style={{ color: "#de4c36" }} className='skillIc' />
                <p>Git</p>
            </div>
            <div data-aos='zoom-in'>
                <SiChakraui style={{ color: "#60c9ca",background:"white",borderRadius:"50%" }} className='skillIc' />
                <p>ChakraUI</p>
            </div>
            <div data-aos='zoom-in'>
                <SiNetlify style={{ color: "#4d9abf" }} className='skillIc' />
                <p>Netlify</p>
            </div>
            <div data-aos='zoom-in'>
                <SiVercel style={{ color: "white", background: "black", boxSizing: "border-box", padding: "13px", borderRadius: "50%" }} className='skillIc' />
                <p>Vercel</p>
            </div>
            <div data-aos='zoom-in'>
                <SiHeroku style={{ color: "white", background: "#564d80", padding: "3px", borderRadius: "5px" }} className='skillIc' />
                <p>Heroku</p>
            </div>
            <div data-aos='zoom-in'> 
                <img src="https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/mongoose.png"/>
                <p>Mongoose</p>
            </div>
        </div>
    </div>
}