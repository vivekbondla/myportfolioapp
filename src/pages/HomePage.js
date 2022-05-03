import myprofile from '../images/myprofile.jpg'

const HomePage = () => {
  return (
    //
    <div className="homecontent">
      <div className="image">
        {" "}
        <img
          src={myprofile}
          alt="profile pic"
        />
        <h1>VIVEK KUMAR BONDLA</h1>
      </div>

      <div className="about">
        <h3>About Me:</h3>
        <p>Hey, Greetings everyone !</p>
        <p>
          Coding on ReactJS and dreaming on ReactJS. Want to help companies to
          build complex web applications serving users with React and modern
          technologies
        </p>
      </div>
    </div>
  );
};

export default HomePage;
