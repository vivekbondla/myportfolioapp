import "./Footer.css";
import linkedin from '../images/linkedin.png';
import github from '../images/github.jpg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Connect with me: </h3>
      </div>
      <div className="contact__icons">
        <a
          href="https://www.linkedin.com/in/vivek-kumar-bondla-1411371a4"
          target="blank"
        >
          <img src={linkedin} height="35px" width="35px" alt="linkedIn"/>
        </a>
        <a href="https://github.com/vivekbondla" target="blank">
        <img src={github} height="35px" width="35px" alt="github"/>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B918686392469&text&app_absent=0" target="blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" height="35px" width="35px" alt="whatsapp"/>
        </a>
        
        <p>vivekbondla95@gmail.com</p>
      </div>
    </div>
  );
};
export default Footer;
