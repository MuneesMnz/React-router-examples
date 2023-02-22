import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => nav("/order", { replace: true })}>order</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        iusto maiores aspernatur consectetur inventore, totam rem hic, corporis
        debitis quod numquam nihil. Natus corporis odio, provident fugiat vitae
        molestias, cumque, maxime nesciunt nihil dolore nemo porro. Esse odio
        doloribus quasi! Esse explicabo aspernatur, unde nesciunt amet dolorem

        inventore officia rerum natus dolores quasi fugit deserunt! Ut deserunt
        totam earum ipsa, cupiditate quod veniam vero sapiente, nostrum labore
        quisquam nulla distinctio ducimus necessitatibus aliquam, atque
        laboriosam iusto dignissimos voluptas provident! Modi sed delectus
        doloremque quia, magni dolores mollitia minus corporis amet neque
        possimus vitae laboriosam totam commodi dolore tempora doloribus atque?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        iusto maiores aspernatur consectetur inventore, totam rem hic, corporis
        debitis quod numquam nihil. Natus corporis odio, provident fugiat vitae
        molestias, cumque, maxime nesciunt nihil dolore nemo porro. Esse odio
        doloribus quasi! Esse explicabo aspernatur, unde nesciunt amet dolorem
      </p>
    </div>
  );
};

export default About;
