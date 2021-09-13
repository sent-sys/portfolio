import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function List() {
  return (
    <div>
      <Fade bottom>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/ResPNG.png"
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
                <Link
                  to="https://github.com/sent-sys/portfolio"
                  className="btn btn-primary"
                >
                  Github
                </Link>
                <Link
                  to="https://fc-restaurant-res-frontend.herokuapp.com/"
                  className="btn btn-warning"
                >
                  Heroku Live Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/2.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 2</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/3.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 3</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/1.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 1</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/2.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 2</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/3.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 3</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/1.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 1</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/2.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 2</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/3.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Project 3</h5>
                <p className="card-text">Quick project description.</p>
                <Link to="/" className="btn btn-primary">
                  (placeholder GITHUB link)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
