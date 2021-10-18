import { Fade } from "react-reveal";
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import imgRes from "../Images/ResPNG.png";

export default function List() {
  return (
    <div className="container-fluid flex-column w-75 justify-content-center text-center">
      <Fade bottom>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={imgRes}
                className="card-img-top"
                alt="Restaurant Reservation System"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Restaurant Reservation System
                </h5>
                <p className="card-text">
                  A full-stack application that simulates a Restaurant
                  Reservation system; built with React, Node.js, Express, and
                  Bootstrap.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/Restaurant_Reservation"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://fc-restaurant-res-frontend.herokuapp.com/"
                    className="btn btn-warning"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Heroku Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={img2}
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">We Love Movies</h5>
                <p className="card-text">
                  Currently this is only the Back-end portion of the project.
                  Front-end forthcoming.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/c52_WeLoveMovies"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={img3}
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Operation Grub Dash</h5>
                <p className="card-text">
                  Yet another Back-end solution, but this time, for an online,
                  food-ordering system!
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/c52_GrubDash_Project"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={img1}
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Flashcards</h5>
                <p className="card-text">
                  A Front-end application with a UI for creating, and reviewing
                  decks of flash cards. Built with React and Bootstrap.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/c52_Flashcards"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={img2}
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Pomodoro Timer</h5>
                <p className="card-text">Quick project description.</p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/portfolio"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://fc-restaurant-res-frontend.herokuapp.com/"
                    className="btn btn-warning"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Heroku Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src={img3}
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">This Portfolio!</h5>
                <p className="card-text">
                  This portfolio web page was built purely with React and
                  Bootstrap!
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/sent-sys/portfolio"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
