import { Fade } from "react-reveal";

export default function About() {
  return (
    <div className="container about-section">
      <div className="before-intro"></div>
      <Fade top>
        <h3 className="px-5 text-white text-center">Nice to meet you.</h3>
      </Fade>
      <Fade bottom>
        <h4 className="px-5 mt-5 text-white text-center">
          I'm currently a student in the Software Engineering Immersion program
          with Thinkful.
        </h4>
        <h4 className="px-5 text-white text-center">
          Using skills I've learned from my background in CS and programming, I
          am pursuing a career in the Tech industry. My abilities favor:
        </h4>
        <h4 className="px-5 mt-3 text-white text-center">
          ReactJS, CSS3, HTML5, Javascript(ES6+), and Bootstrap.
        </h4>
        <h4 className="px-5 mt-3 text-white text-center">
          I'm interested in Front-End development as I feel most inspired by
          client-facing design work.
        </h4>
      </Fade>
    </div>
  );
}
