import ImgMediaCard from "../util/Card";

import covid from '../images/covid.png';
import foodorder from '../images/foodorder1.png';
import quotes from '../images/quotes.png';
import expense from '../images/expense1.png';

const ProjectPage = () => {
  return (
    <div className="container__projects">
      <div className="project">
        <ImgMediaCard  image ={covid} site ="https://covid-19-trackerme.netlify.app" title='COVID-19' description="This application is used for tracking  corona virus cases along the globe and also country wise"/>
        <ImgMediaCard image = {foodorder}title='Food Order App' description="You can order food online while you are sitting in home "/>
      </div>
      <div className="project">
        <ImgMediaCard image={quotes} title="Quote's App" description="This is useful to add a quotation and share it while other's can also view and comment on that quote "/>
        <ImgMediaCard image={expense}title='Expense Tracker' description="One can track their expenses month wise so that in future you'll be little careful while spending in future"/>
      </div>
    </div>
  );
};

export default ProjectPage;
