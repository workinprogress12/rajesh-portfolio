import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Laraibmomin.2002@gmail.com" data-cursor="disable">
                Laraibmomin.2002@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>
              B.E. Electronics & Communication Engineering <br/>
              Sathyabama Institute of Science and Technology
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/yoitsme418"
              target="_blank"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/laraib-momin-a99594192"
              target="_blank"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Laraib Momin</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;