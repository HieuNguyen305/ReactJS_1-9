import Header from "./header";
import Carousel from "./carousel";
import WWD from "./wwd";
import Contact from "./contact";
import ListItem from "./list-item";
import Footer from "./footer";

function Baitap2() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <WWD />
          <Contact />
        </div>
        <ListItem />
      </div>
      <Footer />
    </>
  );
}
export default Baitap2;
