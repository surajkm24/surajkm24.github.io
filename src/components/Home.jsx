import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from 'react-icons/bi';
import '../styles/home.css';
import { BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'

export const Home = () => {
    const { light } = useContext(ThemeContext);

    return <div id='home' style={{ '--bglight': light ? "#edf2f8" : "#0a192f" }}>
        <div id='homegif' >
            <img src='https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.webp' />
        </div>
        <div id='homecontent' style={{ '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Hi, I am</p>
            <p>Suraj Kumar Mishra.</p>
            <p>I'm a <span>&nbsp;Full Stack Developer.</span></p>
            <p>An ambitious, self motivated and result driven full stack web developer dedicated to building and optimizing user-focused websites and applications. Able to work under pressure with minimal supervision. A quick learner who can absorb new ideas and can communicate them clearly and effectively.</p>
            <div className='homeCont'>
                <a href='/assets/Suraj_Kumar_Mishra.27d24528.pdf' style={{ textDecoration: "none" }} download='Suraj_Kumar_Mishra_Resume'>
                    <button>Resume <i>
                        <BiDownload />
                    </i></button>
                </a>
                <div className='homeIcCont' style={{'--icColor':light?"#0a192f":"#edf2f8"}}>
                    <div>
                        <a href='https://linkedin.com/in/surajkm24' target='_blank'>
                            <BsLinkedin className='homeIc' />
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/surajkm24' target='_blank'>
                            <BsGithub className='homeIc' />
                        </a>
                    </div>
                    <div>
                        <a href='mailto:surajkm336796@gmail.com' >
                            <SiGmail className='homeIc' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}