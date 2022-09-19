import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/githubstats.css';
import { SiGithub } from 'react-icons/si';
import { useEffect } from 'react';
import { useRef } from 'react';

export const GithubStats = () => {
    const { light } = useContext(ThemeContext);
    const calender = useRef()
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         GitHubCalendar(calender.current, "surajkm24", { responsive: true });
    //     },10000)
    // },[])
    return <div id='githubstats' style={{ '--bglightstats': light ? "#edf2f8" : "#0a192f", '--bglight2stats': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "#edf2f8" : "#273849" }}>
        <p>Sta<span>tis</span>tics <SiGithub id='gitStIc' fontSize={'25px'} style={{ transition: "none", '--icColor': light ? "black" : "white" }} /></p>
        <div id='statCont'>
            <div>
                {!light ? <img src='https://github-readme-stats.vercel.app/api?username=surajkm24&theme=vue-dark&show_icons=true&hide_border=true&count_private=true' />
                    : <img src='https://github-readme-stats.vercel.app/api?username=surajkm24&theme=flag-india&show_icons=true&hide_border=true&count_private=true&title_color=blue&text_color=black&bg_color=edf2f8' />
                }
            </div>
            <div>
                {light ? <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=surajkm24&theme=flag-india&show_icons=true&hide_border=true&layout=compact&title_color=blue&text_color=black&bg_color=edf2f8' />
                    : <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=surajkm24&theme=vue-dark&show_icons=true&hide_border=true&layout=compact' />
                }
            </div>
        </div>
        <div className='calender' ref={calender}>
            {light ? <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/contributions.png' />
                : <img src='https://raw.githubusercontent.com/surajkm24/surajkm24.github.io/master/assets/contributions%20(1).png' />}
        </div>
    </div>
}