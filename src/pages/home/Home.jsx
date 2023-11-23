import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Open from "../../components/open/open";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Open />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <FeaturedProperties/>

        <Footer/>
      </div>
    </div>







  );
};

export default Home;
