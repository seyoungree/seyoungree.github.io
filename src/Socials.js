import {
    faLinkedin,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Socials() {
    return (
        <div class="social-container">
    
            <a href="https://www.linkedin.com/in/seyoung-ree-3bb99016a/"
                target="_blank"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/seyoungree"
                target="_blank"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="mailto: seyoungree@gmail.com" 
                target="_blank"
                className="email social">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a href="Tel: 419-376-4718"
                target="_blank"
                className="phone social">
                <FontAwesomeIcon icon={faPhone} size="lg" />
            </a>
        </div>
    );
}

export default Socials;