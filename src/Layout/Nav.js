import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="row container-fluid justify-content-center align-items-center nav-bar sticky-top m-1 p-2 px-5">
      <div className="col-6">
        <div className="me-auto p-2">
          <a
            href="#top"
            className="m-1 d-flex text-decoration-none text-white align-items-center"
          >
            <h4 className="m-2 navi-link">Matthew Ho</h4>
          </a>
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex justify-content-end">
          <Link
            className="btn btn-primary position-relative me-2"
            to="/portfolio"
          >
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}
