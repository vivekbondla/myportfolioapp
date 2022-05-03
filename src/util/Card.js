import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
// import covid from '../images/covid.png';

export default function ImgMediaCard(props) {
  const visitSiteHandler = (event) => {
    let siteURL;
    switch (props.title) {
      case "COVID-19":
        siteURL = "https://covid19trackerme.netlify.app";
        break;

      case "Food Order App":
        siteURL = "https://viveksresturant.netlify.app";

        break;
      case "Quote's App":
        siteURL = "https://quotesappme.netlify.app";
        break;
        case "Expense Tracker":
          siteURL = "https://expensetrackerme.netlify.app";
          break;

      default:
        break;
    }
    window.open(siteURL, "_blank");
  };

  const githubHandler = (event) => {
    let siteURL;
    switch (props.title) {
      case "COVID-19":
        siteURL = "https://github.com/vivekbondla/react-covid-tracker";
        break;

      case "Food Order App":
        siteURL = "https://github.com/vivekbondla/foodorderapp";

        break;
      case "Quote's App":
        siteURL = "https://github.com/vivekbondla/quotesapp";
        break;
        case "Expense Tracker":
          siteURL = "https://github.com/vivekbondla/expense-tracker";
          break;

      default:
        break;
    }
    window.open(siteURL, "_blank");
  };
  return (
    <div className="card">
       <CardMedia
        component="img"
        alt="picture"
        background-size = "contain"
        image={props.image}
        padding="2px"
      />
       
      <CardContent>
        <h1>{props.title}</h1>
        <h5>{props.description}</h5>
      </CardContent>
      <div className="cardactions">
        <Button onClick={visitSiteHandler} size="small">
          Visit Site
        </Button>
        <Button  onClick={githubHandler} size="small" >GitHub Link</Button>
      </div>
    </div>
  );
}
