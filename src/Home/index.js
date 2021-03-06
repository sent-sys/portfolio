import List from "../List";
import About from "../About";
import Footer from "../Layout/Footer";
import { Fade } from "react-reveal";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Nav from "../Layout/Nav";
import selfIcon from "../Icon/SelfIcon.png";
import progIcon from "../Icon/progIcon.svg";
import resume from "../DL/MH.pdf";

export default function Home() {
  const { url } = useRouteMatch();
  return (
    <div className="home-color m-1 p-2 rounded shadow">
      <Nav />
      <Switch>
        <Route exact path={url}>
          <div>
            <div className="mt-3 m-5 before-intro"></div>
            <Fade bottom delay={200}>
              <img
                className="mx-auto d-block img-fluid icon"
                alt="Self Icon"
                src={selfIcon}
              />
            </Fade>
            <Fade bottom delay={500}>
              <h1 className="text-white text-center m-3">
                My name is Matthew Ho
              </h1>
            </Fade>
            <Fade bottom delay={1000}>
              <h1 className="text-white text-center m-3">
                I build and design ideas on the internet
              </h1>
            </Fade>
            <div className="mb-3 m-5 after-intro"></div>
            <img
              src={progIcon}
              alt="Tech Icon"
              className="mx-auto d-block img-fluid prog-icon"
            />
            <div className="d-flex mt-5 after-icon justify-content-center align-items-center">
              <a
                href={resume}
                download={true}
                className="text-decoration-none text-white git-link"
              >
                <h3>download resume (55.7kb)</h3>
              </a>
            </div>
          </div>
          <List />
          <div className="bottom-spacing" />
        </Route>
        <Route path={`${url}/about`}>
          <About />
          <div className="bottom-spacing" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
