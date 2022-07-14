import React from "react";
import './Home.css'
import "@fontsource/shizuru";
import $ from 'jquery';
import lottie from "lottie-web";
import lf20_avnldv94 from './lotties/lf20_avnldv94.json';
import teal_city from './lotties/lf20_u62920f1.json'
function Home() {
    React.useEffect(() => {
        const instance = lottie.loadAnimation({
            container: document.querySelector("#lf20_avnldv94"),
            animationData:teal_city,
            renderer: 'svg',
            autoplay: true,
        });
        return () => instance.destroy();
    }, []);
    
    $(function(){
        $('#home').fadeIn(4000);
        var animation = $('#lf20_avnldv94');
        animation.fadeIn(4000);
        
    });
    
    $(function(){
        setTimeout(function() {
            $('#h1s').removeClass('invisible');
            $('#h1s').addClass('h1-container');    
        }, 2000);
    });
    // $(function(){
    //     var animation = $('#lf20_avnldv94');
    //     animation.fadeIn(4000);
    // });

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
            <div className="wrapper">
            <div id="left-side-home" >
            <div  id="h1s" className="invisible">
            <h1 id="home-h1" className="typewriter title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Hi, I'm
                <br className="hidden lg:inline-block" />
            </h1>
            <h1 id="home-h1-name" className="typewriter title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Seyoung Ree
                <br className="hidden lg:inline-block" /></h1>
            {/* <p id="first-p">SOFTARE ENGINEER &#183; FULL-STACK DEVELOPER &#183; GRAPHIC DESIGNER</p> */}
            <p id="first-p">Software Engineer &#183; Full-stack Developer</p>

            </div>
            <br/>
            {/* <p id="second-p">This resume is outdated and the website is still in progress! </p> */}
            <a href="https://drive.google.com/file/d/1Q3j4h16KypqJ_BhVY82PlTdmZPB9hnwQ/view?usp=sharing" target="_blank">
            <button className="cta button1" >
                <span>Resume</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
            </a>
            <a href="https://drive.google.com/file/d/1Q3j4h16KypqJ_BhVY82PlTdmZPB9hnwQ/view?usp=sharing" target="_blank">
            <button className="cta" >
                <span>Email me</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
            </a>
            </div>
            <div id="right-side-home">
                <div id="lf20_avnldv94" />
            </div>  
            </div>  
         </section>
        
    );
}

export default Home;