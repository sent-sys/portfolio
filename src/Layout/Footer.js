export default function Footer() {
  return (
    <div className="footer align-items-center my-5">
      <div className="row d-flex">
        <div className="col-4 d-flex justify-content-center flex-column">
          <a
            className="text-white text-decoration-none link-light git-link text-center"
            href="https://github.com/sent-sys"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="text-white text-decoration-none link-light git-link text-center"
            href="https://docs.google.com/document/d/1y4nawcWlo6l-v6Qckkenj2s0cWCc53D4q2IzAXft2i0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p className="small text-white">© 2021 Matthew Ho</p>
        </div>
        <div className="col-4 d-flex justify-content-center flex-column">
          <a
            className="text-white text-decoration-none link-light git-link text-center"
            href="https://www.linkedin.com/in/matthewnh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-white text-decoration-none link-light git-link text-center"
            href="mailto:matthewho37@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
