import {
    faLinkedin,
    faGithub,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
            <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
        </div>
    );
}

export default Socials;