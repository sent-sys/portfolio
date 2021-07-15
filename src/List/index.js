import { Link } from "react-router-dom";

export default function List() {
  return (
    <div className="row p-2 justify-content-around">
      <div className="card text-white card-bg col-md-6 card-width">
        <img src="/images/1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">Project 1</h5>
          <p className="card-text">Quick project description.</p>
          <Link to="/" className="btn btn-primary">
            (placeholder GITHUB link)
          </Link>
        </div>
      </div>
      <div className="card text-white card-bg col-md-6 card-width">
        <img src="/images/2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">Project 1</h5>
          <p className="card-text">Quick project description.</p>
          <Link to="/" className="btn btn-primary">
            (placeholder GITHUB link)
          </Link>
        </div>
      </div>
    </div>
  );
}
