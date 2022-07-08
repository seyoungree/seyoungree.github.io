import React from "react";
import './Home.css'
import "@fontsource/shizuru";
import $ from 'jquery';

function Home() {

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

    window.onload = function() {
        var element = document.getElementById("home");
        element.classList.add("loaded");
    }

      
    return (
        <section id="home" className="homepage slide-up">
            <br/>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Hi, I'm Seyoung!
                <br className="hidden lg:inline-block" />
            </h1>
            <p>I am a sophomore CS student at Columbia University. I'm currently looking for software engineering internships. Please take a look at my resume and reach me at seyoungree@gmail.com!</p>
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