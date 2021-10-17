import { Fade } from "react-reveal";
import icon from "../Icon/compIcon.svg";

export default function About() {
  return (
    <div className="container about-section">
      <div className="before-intro"></div>
      <Fade top>
        <h3 className="px-5 text-white text-center">Nice to meet you.</h3>
      </Fade>
      <Fade bottom>
        <h4 className="px-5 mt-5 text-white text-center">
          I'm a recent grad from the Software Engineering Immersion program with
        </h4>
        <h4 className="px-5 text-center">
          <a className="text-decoration-none" href="https://www.thinkful.com">
            Thinkful.
          </a>
        </h4>
        <h4 className="px-5 text-white text-center">
          Using the full-stack skills I've honed through the program, and skills
          I've learned from my background in CS and programming, I am pursuing a
          career in the Tech industry.
        </h4>
        <h4 className="px-5 mt-3 text-white text-center">
          My abilities favor: ReactJS/React Native, CSS3, HTML5,
          Javascript(ES6+), and Bootstrap.
        </h4>
        <h4 className="px-5 mt-3 text-white text-center">
          I'm interested in Full-stack developement, with a focus in Front-end.
          I've learned how to build projects from conception to deployment,
          thanks to the Thinkful program.
        </h4>
        <img src={icon} className="mx-auto d-block img-fluid about-icon" />
      </Fade>
    </div>
  );
}
