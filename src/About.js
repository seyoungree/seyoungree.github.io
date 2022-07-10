import React from "react";
import $ from 'jquery';
import './About.css'

function About() {

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
        <section className="tag slide-up" id="about">
            <h1 id="about-header">About</h1>
            <div id="about-list">
                {/* <ul>
                <li>software </li>
                <li>student</li>
                </ul> */}
                <p id="first-p">I am a sophomore CS student at Columbia University. I'm currently looking for software engineering internships. Please take a look at my resume and reach me at seyoungree@gmail.com!</p>
            </div>
        </section>
    );
}

export default About;