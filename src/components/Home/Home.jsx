import React from "react";
import "./Home.css";
import painter from "../../assets/artist.png"
import book from "../../assets/book.png"
import pokemon from "../../assets/pokemon.png"
import singing from "../../assets/singing.png"

const Home = () => {
  return (
    <div className="home_h">
      <div className="heading">
        <h1 className="home-heading">Explore</h1> 
        <h1 className="home-heading">your</h1>
        <h1 className="home-heading blue"> hobbie </h1>
        <h1 className="home-heading"> or </h1>
        <h1 className="home-heading purple"> passion </h1>
      </div>
      <p className=" para"> 
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities... </p>
        <p className="para">
          if you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      
      <div className="home_logo">
        <img className="home_img" src={singing} alt="" />
        <img className="home_img" src={pokemon} alt="" />
        <img className="home_img" src={book} alt="" />
        <img className="home_img" src={painter} alt="" />
      </div>
    </div>
  );
};

export default Home;
