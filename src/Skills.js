import React from 'react';
import './Skills.css'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import reactIcon from "./assets/react-icon.png"
import pythonIcon from "./assets/python-icon.png"
import cIcon from "./assets/c_icon.png"
import javaIcon from "./assets/java-icon.png"
import htmlIcon from "./assets/html-icon.png"
import cssIcon from "./assets/css-icon.png"
import jsIcon from "./assets/js-icon.png"
import cloudIcon from "./assets/cloud-icon.png"
import dashIcon from "./assets/dash-icon.png"
import matplotlibIcon from "./assets/matplotlib-icon.png"
import githubIcon from "./assets/github-icon.png"
import pandasIcon from "./assets/pandas-icon.png"
import fireIcon from "./assets/fire-icon.png"
import bootIcon from "./assets/boot-icon.png"
import bulmaIcon from "./assets/bulma-icon.png"
import codingLottie from "./lotties/lf30_editor_xylox7bp.json";

import lottie from "lottie-web";

export default function Skills() {
    React.useEffect(() => {
        const instance = lottie.loadAnimation({
            container: document.querySelector("#coding-ani"),
            animationData:codingLottie,
            // renderer: 'svg',
            autoplay: true,
        });
        return () => instance.destroy();
    }, []);

    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".tag");
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          } else {
            $(tag).removeClass("visible");
          }
        }
      });

    return (
        <section id="skills-section" className="tag slide-up">
            <h1 id="skills-header">Tech Stack</h1>
            <div className="stack-container">
            <div className="skill-container">
                <div className="skill">
                    <img src={reactIcon} alt="react icon"/><span>React</span>
                </div>
                <div className="skill">
                <img src={pythonIcon} alt="python icon"/><span>Python</span>
                </div>
                <div className="skill">
                <img src={cIcon} alt="c++ icon"/><span>C++</span>
                </div>
                <div className="skill">
                <img src={javaIcon} alt="java icon"/><span>Java</span>
                </div>
                <div className="skill">
                <img src={htmlIcon} alt="html icon"/><span>HTML</span>
                </div>
                <div className="skill">
                <img src={cssIcon} alt="css icon"/><span>CSS</span>
                </div>
                <div className="skill">
                <img src={jsIcon} alt="js icon"/><span>JavaScript</span>
                </div>
                <div className="skill">
                <img src={githubIcon} alt="github icon"/><span>Github</span>
                </div>
                <div className="skill">
                <img src={cloudIcon} alt="google cloud icon"/><span>Google Cloud Services</span>
                </div>
                <div className="skill">
                <img src={fireIcon} alt="firebase icon"/><span>Firebase</span>
                </div>
                <div className="skill">
                <img src={pandasIcon} alt="pandas icon"/><span>Pandas</span>
                </div>
                <div className="skill">
                <img src={dashIcon} alt="dash icon"/><span>Dash</span>
                </div>
                <div className="skill">
                <img src={matplotlibIcon} alt="matplotlib icon"/><span>Matplotlib</span>
                </div>
                <div className="skill">
                <img src={bootIcon} alt="bootstrap icon"/><span>Bootstrap</span>
                </div>
                <div className="skill">
                <img src={bulmaIcon} alt="bulma icon"/><span>Bulma</span>
                </div>
            </div>

            <div id="coding-ani"></div>
            </div> 
        </section>
    );
}