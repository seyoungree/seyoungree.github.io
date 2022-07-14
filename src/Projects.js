import ProjectCard from './ProjectCard'
import React from 'react'
import './Projects.css'
import $ from 'jquery';

export default function Projects(){

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
        <section id="projects-section" className="tag slide-up">
            <h1 id="projects-header">Projects </h1>
            <div id="projects-grid">
                <ProjectCard title="" description=""/>
                <ProjectCard title="IBM Accelerate Todo List App" description="electron transfer networks"/>
                <ProjectCard title="BGSU RNA Group" description="electron transfer networks"/>
            </div>
        </section>
    );
}