import { useContext } from 'react';
import '../styles/projects.css';
import { ThemeContext } from '../context/ThemeContext'
import { GoProject } from 'react-icons/go'
import { FaEye } from 'react-icons/fa'
import { SiChakraui, SiGithub, SiHtml5, SiCss3, SiJavascript, SiReact, SiReactrouter, SiHeroku, SiRedux, SiVercel, SiExpress, SiMongodb, SiGit, SiNetlify } from 'react-icons/si'

export const Projects = () => {
    const { light } = useContext(ThemeContext);

    return <div id='projects' style={{ '--bglightproject': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "white" : "#152235" }}>
        <p>Featured <span>Projects </span> <span><GoProject /></span></p>
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/Screenshot%20(667).png' />
            </div>
            <div className='prCardContent'>
                <p>BlueMercury.com - Clone</p>
                <p>It's an individual project. This project is about building a frontend clone of
                    BlueMercury.com, which is an e-commerce website providing cosmetic items and other services
                    like in-store Spa, Massage etc. Users can signup, login and browse the attractive homepage of
                    the website. It is built using React, ChakraUI, CSS and React Router.
                </p>
                <div className='prCardTs'>
                    <SiReact style={{ color: "#53c1de" }} className='tsIc' />
                    <SiChakraui style={{ color: "#60c9ca", background: "white", borderRadius: "50%" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiReactrouter style={{ color: "tomato" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://bluemercury-clone-suraj.netlify.app/' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/surajkm24/overconfident-giants-5053' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/geek1.png' />
            </div>
            <div className='prCardContent'>
                <p>GeekBuying.com - Clone</p>
                <p>This website is a clone of GeekBuying.com which is an e-commerce website
                    dealing in a variuos types of items with a specialization in electronics. Users can signup, login, explore products, add to cart, checkout and much more
                    in this project. It is built using pure HTML, CSS and Vanilla JavaScript only. Authentication is implemented using localStorage.

                </p>
                <div className='prCardTs'>
                    <SiHtml5 style={{ color: "#ef662a" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://adorable-cobbler-b9755b.netlify.app/index.html' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/surajkm24/geekbuying.com' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src='https://user-images.githubusercontent.com/101391413/167382302-899da381-d361-4e1c-a259-3910a2239383.png' />
            </div>
            <div className='prCardContent'>
                <p>boAt.com - Clone</p>
                <p>This website is a clone of boAt.com which is one of India's finest e-commerce website
                    for world's best headphones. Users can signup, login, explore products, add to cart, apply discount and much more
                    in this project. It is built using pure HTML, CSS and Vanilla JavaScript only. Authentication is implemented using localStorage.
                </p>
                <div className='prCardTs'>
                    <SiHtml5 style={{ color: "#ef662a" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://boat-clone2.netlify.app/' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/surajkm24/boAt-clone' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>
    </div>
}