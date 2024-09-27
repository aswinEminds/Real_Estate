import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Header from "../../component/Header/Header";

function Home() {
  return (
    <div className="home-parent">
      <div className="hero-section">
        <div className="first">
          <Header />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            corporis quis est inventore, aut ex doloribus rerum architecto
            nostrum optio, commodi itaque in nihil praesentium asperiores omnis
            perspiciatis consectetur fugiat.
          </p>
          <p></p>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
