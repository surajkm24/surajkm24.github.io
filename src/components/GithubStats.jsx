import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/githubstats.css';
import { SiGithub } from 'react-icons/si';

export const GithubStats = () => {
    const { light } = useContext(ThemeContext);
    return <div id='githubstats' style={{ '--bglightstats': light ? "#edf2f8" : "#0a192f", '--bglight2stats': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
        <p>Git<span>Hub</span> Stats <SiGithub id='gitStIc' fontSize={'25px'} style={{transition:"none",'--icColor':light?"black":"white"}} /></p>
    </div>
}