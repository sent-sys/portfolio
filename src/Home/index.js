import List from "../List";
import Footer from "../Layout/Footer";
import { Fade } from "react-reveal";
import Nav from "../Layout/Nav";

export default function Home() {
  return (
    <div className="home-color m-1 p-2 rounded shadow">
      <Fade>
        <Nav />
        <div>
          <div className="mt-3 m-5 before-intro"></div>
          <h1 className="text-white text-center m-3">My name is Matthew Ho</h1>
          <h1 className="text-white text-center m-3">
            I build and design ideas on the internet
          </h1>
          <div className="mb-3 m-5 after-intro"></div>
        </div>
      </Fade>
      <List />
      <Footer />
    </div>
  );
}
