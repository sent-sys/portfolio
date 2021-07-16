import { Fade } from "react-reveal";

export default function About() {
  return (
    <div className="container about-section">
      <div className="before-intro"></div>
      <Fade bottom>
        <h3 className="px-5 text-white text-center">
          This is the about me section and I have to add a bunch of stuff to it
        </h3>
      </Fade>
    </div>
  );
}
