import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from 'react-icons/bi';
import '../styles/home.css';

export const Home = () => {
    const { light } = useContext(ThemeContext);

    return <div id='home' style={{ '--bglight': light ? "#edf2f8" : "#0a192f" }}>
        <div id='homegif' >
            <img src='https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.webp' />
        </div>
        <div id='homecontent' style={{ '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Hello! Myself</p>
            <p>Suraj Kumar Mishra</p>
            <p>I'm a <span>&nbsp;Full Stack Developer.</span></p>
            <p>An ambitious, self motivated and result driven full stack web developer dedicated to building and optimizing user-focused websites and applications. Able to work under pressure with minimal supervision. A quick learner who can absorb new ideas and can communicate them clearly and effectively.</p>
            <a href='/assets/Suraj_Kumar_Mishra.27d24528.pdf' style={{ textDecoration: "none" }} download='Suraj_Kumar_Mishra_Resume'>
                <button>Resume <i>
                    <BiDownload />
                </i></button>
            </a>
        </div>
    </div>
}