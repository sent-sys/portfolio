import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="row container-fluid justify-content-center align-items-center nav-bar sticky-top m-1 p-2 px-5">
      <div className="col-6">
        <div className="me-auto p-2">
          <a
            href="#top"
            className="d-flex text-white align-items-center text-decoration-none"
          >
            <h4 className="m-2 navi-link git-link">Matthew Ho</h4>
          </a>
          <Link to="/portfolio" className="text-decoration-none">
            <h5 className="ms-2 text-white navi-link small git-link">
              portfolio
            </h5>
          </Link>
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex justify-content-end">
          <Link
            className="btn btn-primary position-relative me-2 shadow"
            to="/portfolio/about"
          >
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}
