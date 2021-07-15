import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="rounded d-flex sticky-top m-1 p-2 align-items-center">
      <div className="me-auto p-2">
        <Link
          to="/portfolio"
          className="m-1 d-flex text-decoration-none text-white align-items-center"
        >
          <h4 className="m-2 navi-link">Matthew Ho</h4>
        </Link>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <Link
          className="btn btn-primary position-relative me-2"
          to="/portfolio"
        >
          about
        </Link>
      </div>
    </nav>
  );
}
