import { useContext } from 'react';
import '../styles/projects.css';
import { ThemeContext } from '../context/ThemeContext'
import {GoProject} from 'react-icons/go'
export const Projects = () => {
    const { light } = useContext(ThemeContext);

    return <div id='projects' style={{ '--bglightproject': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
        <p>My Creative <span>Projects </span>Section <span><GoProject/></span></p>
        <div className='projectCard'>
            
        </div>
    </div>
}