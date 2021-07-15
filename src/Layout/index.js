import Nav from "./Nav";
import Home from "../Home";

export default function Layout() {
  return (
    <div className="main container-fluid">
      <Nav />
      <Home />
    </div>
  );
}
