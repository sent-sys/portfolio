import List from "../List";
import Footer from "../Layout/Footer";

export default function Home() {
  return (
    <div className="home-color m-1 p-2 rounded">
      <h3 className="text-white text-center m-5">Hello</h3>
      <h3 className="text-white text-center m-5">My name is Matthew Ho</h3>
      <h3 className="text-white text-center m-5">I make WebApps</h3>
      <hr className="color-primary mb-5"></hr>
      <List />
      <Footer />
    </div>
  );
}
