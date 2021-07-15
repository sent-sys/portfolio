import { Link } from "react-router-dom";

export default function List() {
  return (
    <div>
      <div className="row p-2">
        <div className="col-4">
          <div className="card text-white card-bg shadow">
            <img src="images/1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Project 1</h5>
              <p className="card-text">Quick project description.</p>
              <Link to="/" className="btn btn-primary">
                (placeholder GITHUB link)
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-white card-bg shadow">
            <img src="images/2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Project 2</h5>
              <p className="card-text">Quick project description.</p>
              <Link to="/" className="btn btn-primary">
                (placeholder GITHUB link)
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-white card-bg shadow">
            <img src="images/3.jpg" className="card-img-top" alt="..." />
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
    </div>
  );
}
