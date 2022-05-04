import { NavLink } from "react-router-dom";
import myprofile from "../images/myprofile.jpg";

const HomePage = () => {
  return (
    //
    <div className="homecontent">
      <div className="image">
        {" "}
        <img src={myprofile} alt="profile pic" />
        <h1>VIVEK KUMAR BONDLA</h1>
      </div>

      <div className="about">
        <h2 id="headings">About Me</h2>
        <p id="content">Hey, Greetings everyone !</p>
        <p id="content">
          Coding on ReactJS and dreaming on ReactJS. Want to help companies to
          build complex web applications serving users with React and modern
          technologies
        </p>
      </div>
      <div className="about">
        <h2 id="headings">Technologies</h2>
        <p id="content">Technologies  that i am familiar with </p>
        <p id="technologies">React | Redux | MongoDB | NodeJs/Expessjs | CSS3 | Bootstrap | HTML5 | JavaScript | Git & GitHub </p>
       
      </div>
      <div className="about">
        <h2 id="headings">Handson</h2>

        <p id="content">
          Applied my knowledge on various technologies in these projects and
          learnt many more things while making my hands dirty. Please take your
          time to look in those Projects
        </p>
       <NavLink to="/projects"><h3>Let's check Projects </h3></NavLink>
      </div>
    </div>
  );
};

export default HomePage;
