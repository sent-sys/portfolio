import Home from "../Home";
import { Fade } from "react-reveal";

export default function Layout() {
  return (
    <div className="main container-fluid">
      <header id="top"> </header>
      <Fade>
        <Home />
      </Fade>
    </div>
  );
}
