import "./style.css";
import image from "./img/me.png";
const Name = "Adithep Tamwisai";
const age = 27;
const title = "Frontend Developer";
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="introduce">
          <p className="title"> About Me </p>{" "}
          <p className="textArea">
            {" "}
            Hello, my name is {Name} {title}. <br />I 'm {age} years old.{" "}
          </p>{" "}
        </div>{" "}
        <div className="image">
          <img src={image} alt="Adithep Tamwisai" />
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default AboutMe;
