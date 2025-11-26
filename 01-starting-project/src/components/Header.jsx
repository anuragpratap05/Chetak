import getRandom from "../getRandom.js";

import reactImg from "../assets/react-core-concepts.png";
const keywords=["Fundamental","cruicial","Core"];

export default function Header() {

  const idx = getRandom(0,keywords.length-1);

  const word = keywords[idx];

  return ( <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {word} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>)
}