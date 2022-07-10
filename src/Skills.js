import React from 'react';
import './Skills.css'
import $ from 'jquery'

export default function Skills() {

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
            <h1 id="skills-header">Skills</h1>
        </section>
    );
}