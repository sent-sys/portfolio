import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="container-fluid d-flex justify-content-end sticky-top p-2 align-items-center">
      <div className="me-auto p-2">
        <Link
          to="/"
          className="m-1 d-flex text-decoration-none text-white align-items-center"
        >
          <h3 className="m-2 navi-link">M. H.</h3>
        </Link>
      </div>
      <div className="col-2 w-auto mx-1">
        <Link className="btn button-color" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}
