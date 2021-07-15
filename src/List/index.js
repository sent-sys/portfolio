import { Link } from "react-router-dom";

export default function List() {
  return (
    <div className="row p-2 justify-content-around">
      <div class="card text-white card-bg col-md-6 card-width">
        <img src="images/1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Project 1</h5>
          <p class="card-text">Quick project description.</p>
          <Link to="/" class="btn btn-primary">
            (placeholder GITHUB link)
          </Link>
        </div>
      </div>
      <div class="card text-white card-bg col-md-6 card-width">
        <img src="images/2.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Project 1</h5>
          <p class="card-text">Quick project description.</p>
          <Link to="/" class="btn btn-primary">
            (placeholder GITHUB link)
          </Link>
        </div>
      </div>
    </div>
  );
}
