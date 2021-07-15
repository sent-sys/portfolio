import List from "../List";
import Footer from "../Layout/Footer";

export default function Home() {
  return (
    <div className="home-color m-1 p-2 rounded">
      <div className="">
        <h3 className="text-white text-center mt-3 m-5"></h3>
        <h3 className="text-white text-center m-3">My name is Matthew Ho</h3>
        <h3 className="text-white text-center m-3">
          I build things on the internet
        </h3>
        <h3 className="text-white text-center mb-3 m-5"></h3>
      </div>
      <hr className="color-primary my-5"></hr>
      <List />
      <Footer />
    </div>
  );
}
