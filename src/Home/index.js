import List from "../List";
import Footer from "../Layout/Footer";

export default function Home() {
  return (
    <div className="home-color m-1 p-2 rounded shadow">
      <div className="">
        <div className="mt-3 m-5"></div>
        <h1 className="text-white text-center m-3">My name is Matthew Ho</h1>
        <h1 className="text-white text-center m-3">
          I build and design ideas on the internet
        </h1>
        <div className="mb-3 m-5"></div>
      </div>
      <hr className="color-primary my-5"></hr>
      <List />
      <Footer />
    </div>
  );
}
