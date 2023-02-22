import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate=useNavigate()

  return (
    <div>
        <p>Home Page</p>
        <button onClick={()=>navigate('order',{replace : true})}>place order</button>
    </div>
  );
  
  
};

export default Home;
