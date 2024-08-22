import Header from "./Component/header.jsx";
import CoreConcept from "./Component/coreConcept.jsx";

import data from "./data.json";
import componentImg from "./assets/images/components.png";
import jsxImg from "./assets/images/jsx-ui.png";
import stateImg from "./assets/images/state-mgmt.png";
import propsImg from "./assets/images/config.png";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="coreConcept">
          <h2>Core Concepts</h2>
          <ul>
            <li>
              <CoreConcept
                name={data.components.name}
                description={data.components.description}
                image={componentImg}
              />
            </li>
            <li>
              <CoreConcept
                name={data.jsx.name}
                description={data.jsx.description}
                image={jsxImg}
              />
            </li>
            <li>
              <CoreConcept
                name={data.props.name}
                description={data.props.description}
                image={propsImg}
              />
            </li>
            <li>
              <CoreConcept
                name={data.state.name}
                description={data.state.description}
                image={stateImg}
              />
            </li>
          </ul>
        </section>
        <section></section>
      </main>
    </>
  );
}
