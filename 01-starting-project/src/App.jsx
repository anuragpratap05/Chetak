import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

import {CORE_CONCEPTS} from "./data.js"

function App() {
  return (
    <div>
     <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
          {CORE_CONCEPTS.map((concept)=>{
            return <CoreConcepts img={concept.image} title={concept.title} description={concept.description}/>
          })}
        </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;

