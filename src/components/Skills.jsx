import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/skills.css';
import { GiSkills } from 'react-icons/gi';
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiReact, SiReactrouter, SiHeroku, SiRedux, SiVercel, SiExpress, SiMongodb, SiGit, SiNetlify } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io5'

export const Skills = () => {

    const { light } = useContext(ThemeContext);

    return <div id='skill' style={{ '--bglightskill': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
        <p>Sk<span>il</span>ls <GiSkills fontSize={'25px'} /></p>
        <div id='skillset'>
            <div>
                <SiHtml5 style={{ color: "#ef662a" }} className='skillIc' />
            </div>
            <div>
                <SiCss3 style={{ color: "#1c88c7" }} className='skillIc' />
            </div>
            <div>
                <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='skillIc' />
            </div>
            <div>
                <SiReact style={{ color: "#53c1de" }} className='skillIc' />
            </div>
            <div>
                <SiReactrouter style={{ color: "#60c9ca" }} className='skillIc' />
            </div>
            <div>
                <SiRedux style={{ color: "#7549ba" }} className='skillIc' />
            </div>
            <div>
                <IoLogoNodejs style={{ color: "#8bc64a" }} className='skillIc' />
            </div>
            <div>
                <SiExpress style={{ color: "#000000" }} className='skillIc' />
            </div>
            <div>
                <SiMongodb style={{ color: "#589733" }} className='skillIc' />
            </div>
            <div>
                <SiGit style={{ color: "#de4c36" }} className='skillIc' />
            </div>
            <div>
                <SiChakraui style={{ color: "#60c9ca" }} className='skillIc' />
            </div>
            <div>
                <SiNetlify style={{ color: "#4d9abf" }} className='skillIc' />
            </div>
            <div>
                <SiVercel style={{ color: "white", background: "black", boxSizing: "border-box", padding: "13px", borderRadius: "50%" }} className='skillIc' />
            </div>
            <div>
                <SiHeroku style={{ color: "white", background: "#564d80", padding: "3px", borderRadius: "5px" }} className='skillIc' />
            </div>
            <div>
                <img src="https://mohit-portfolio.vercel.app/assets/mongoose.20aad1bc.png" class="chakra-image css-0" />
            </div>
        </div>
    </div>
}