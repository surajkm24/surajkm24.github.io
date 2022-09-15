import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgCloseR } from 'react-icons/cg';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/navbar.css';

export const Navbar = () => {
    const [drawer, setDrawer] = useState(false);
    const { light, setLight } = useContext(ThemeContext)

    const openDrawer = () => {
        setDrawer(true);
    }

    const closeDrawer = () => {
        setTimeout(() => {
            setDrawer(false)
        }, 400)
        if (drawer) {
            let drawerCont = document.getElementsByClassName('drawerCont')[0]
            drawerCont.style.transition = '1s linear'
            drawerCont.style.transform = 'translateX(50vw)'
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (drawer) {
                document.getElementsByClassName('drawerCont')[0].style.transition = '1s linear'
                document.getElementsByClassName('drawerCont')[0].style.transform = 'translateX(-50vw)';
                //   document.getElementById('drawerCont').style.transition = 'transform 2s linear'
            }
        }, -100)
    }, [drawer])

    return <div className='nav' style={{ '--backgroundnav': light ? '#edf2f8' : '#0a192f', '--navTextHover': light ? "#dc143c" : "#64ffda" }}>
        <div>
            <svg viewBox="0 0 100 120" style={{ height: "55px", width: "62px" }} >
                <polygon fill={light ? "#edf2f8" : '#0a192f'} className="Shape" stroke={light ? "#dc143c" : "#64ffda"} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 2 0 22 0 67 39 90 78 68 78 23"></polygon>
                <text x='40' y='60' text-anchor="middle" fill={light ? "#dc143c" : "#64ffda"} fontSize="50px" fontWeight="640" >S</text>
            </svg>
        </div>
        <div className='navButtons' style={light ? { '--navText': "black", '--navTextHover': "#dc143c" } : { '--navText': "rgba(255,255,255,0.9)", '--navTextHover': "#dc143c" }}>
            <p><a href='#'>HOME</a></p>
            <p><a href='#'>ABOUT</a></p>
            <p><a href='#'>SKILLS</a></p>
            <p><a href='#'>PROJECTS</a></p>
            <p><a href='#'>CONTACT</a></p>
            <p><a href='#'>RESUME</a></p>
            {light ? <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "#0a192f" }} onClick={() => setLight(false)}><FaMoon /></i> :
                <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "yellow" }} onClick={() => setLight(true)}><FaSun /></i>}
        </div>
        <div className='navDrawer' style={light ? { '--navTextHover': "black" } : { '--navTextHover': "#dc143c" }}>
            <i className="fas" onClick={openDrawer} style={{ color: light ? "black" : "rgba(255,255,255,0.9)", fontSize: "20px", padding: "0px" }}><GiHamburgerMenu size='23px' style={{ padding: "10px 10px" }} /></i>
            {light ? <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "#0a192f" }} onClick={() => setLight(false)}><FaMoon /></i> :
                <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "yellow" }} onClick={() => setLight(true)}><FaSun /></i>}
        </div>

        <div className='navDrawerBackdrop' style={{ display: drawer ? 'flex' : 'none', '--back1': light ? "#dc143cc5" : "#64ffdb9c", '--back2': light ? "#dc143c90" : "#64ffdd68" }}>
            <svg viewBox="0 0 100 120" style={{ height: "55px", width: "62px" }} >
                <polygon fill={light ? "#edf2f8" : '#0a192f'} className="Shape" stroke={light ? "#dc143c" : "#64ffda"} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 2 0 22 0 67 39 90 78 68 78 23"></polygon>
                <text x='40' y='60' text-anchor="middle" fill={light ? "#dc143c" : "#64ffda"} fontSize="50px" fontWeight="640" >S</text>
            </svg>
            <div className='drawerCont' style={light ? { '--navText': "black", '--navTextHover': "#dc143c", background: "#edf2f8" } : { '--navText': "rgba(255,255,255,0.9)", '--navTextHover': "#dc143c", background: "#0a192f" }}>
                <i class="fa" onClick={closeDrawer} style={{ color: light ? "black" : "rgba(255,255,255,0.9)", fontSize: "25px", marginLeft: "250px", padding: "0px" }}><CgCloseR style={{ padding: "10px 10px" }} /></i>
                <p><a href='#'>HOME</a></p>
                <p><a href='#'>ABOUT</a></p>
                <p><a href='#'>SKILLS</a></p>
                <p><a href='#'>PROJECTS</a></p>
                <p><a href='#'>CONTACT</a></p>
                <p><a href='#'>RESUME</a></p>
            </div>
        </div>
    </div>
}