import React from "react";
import './Home.css'
import "@fontsource/shizuru";

function Home() {
    return (
        <section id="home">
            <br/>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Hi, I'm Seyoung!
                <br className="hidden lg:inline-block" />
            </h1>
            <p>I am a sophomore CS student at Columbia University! I'm skilled at full-stack development, and am looking for software engineering internships. </p>
            <br/>
            <p>This resume is outdated and the website is still in progress! </p>
            <a href="https://drive.google.com/file/d/1Q3j4h16KypqJ_BhVY82PlTdmZPB9hnwQ/view?usp=sharing" target="_blank">
            <button className="cta" >
                <span>Resume</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
            </a>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         </section>
        
    );
}

export default Home;