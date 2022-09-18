import { useContext } from 'react';
import '../styles/contact.css';
import { ThemeContext } from '../context/ThemeContext';
export const Contact = () => {
    const { light } = useContext(ThemeContext);
    return <div id='contact' style={{ '--bglightproject': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "white" : "#152235" }}>
        <p>Get In <span>Touch</span> <span></span></p>
        <div id='contactCont'>
            <div id='contImg'>
                <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/2721d70cd4216cb14df8c2fc62bb172d632ab47e/assets/contact_me.svg' />
            </div>
            <div id='contForm'></div>
        </div>
    </div>
}