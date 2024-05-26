import { Tooltip } from "antd";
import emailIcon from "../assets/Email icon.svg";
import phoneIcon from "../assets/phone icon.svg";
import linkedinIcon from "../assets/Linkedin Logo.svg";

export default function LetsConnect() {
  return (
    <div id="connect">
      <h1>Let's Connect</h1>
      <div className="contact-info">
        <span>
          <Tooltip title="Click to send email">
            <span>
              <a href="mailto:alijawad04@gmail.com">
                <img class="icon" src={emailIcon} />
                <p>alijawad04@gmail.com</p>
              </a>
            </span>
          </Tooltip>
        </span>
        <span>
          <a href="tel:03400961779">
            <img class="icon" src={phoneIcon} />

            <p>+92 340 0961779</p>
          </a>
        </span>

        <span>
          <Tooltip title="Click to view profile">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ali-jawad-9b6a1020a/"
            >
              <img className="icon" src={linkedinIcon} />

              <p>Ali Jawad</p>
            </a>
          </Tooltip>
        </span>
      </div>
    </div>
  );
}
