export default function Footer() {
  return (
    <div className="footer align-items-center mt-5">
      <div className="row d-flex">
        <div className="col-4 d-flex justify-content-center">
          <a
            className="text-white text-decoration-none link-light git-link"
            href="https://github.com/sent-sys"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p className="small text-white">© 2021 Matthew Ho</p>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <a
            className="text-white text-decoration-none link-light git-link"
            href="https://www.linkedin.com/in/matthewnh/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
