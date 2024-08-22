import Header from "./Component/header.jsx";
import ConceptDescription from "./Component/conceptDescription.jsx";
import CoreConcept from "./Component/coreConcept.jsx";
import { useState } from "react";
import {data} from "./data.js";
import componentImg from "./assets/images/components.png";
import jsxImg from "./assets/images/jsx-ui.png";
import stateImg from "./assets/images/state-mgmt.png";
import propsImg from "./assets/images/config.png";

export default function App() {
  const [tabContent, showTabContent] = useState(false);

  function handleTabButton(type) {
    showTabContent(type);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li>
              <button
                onClick={() => handleTabButton("components")}
                className={tabContent == "components" ? "active" : ""}
              >
                Components
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabButton("jsx")}
                className={tabContent == "jsx" ? "active" : ""}
              >
                JSX
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabButton("props")}
                className={tabContent == "props" ? "active" : ""}
              >
                Props
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabButton("state")}
                className={tabContent == "state" ? "active" : ""}
              >
                State
              </button>
            </li>
          </menu>
        </section>
        {tabContent && (
          <section id="conceptDescription">
            <ConceptDescription content={data[tabContent]} />
          </section>
        )}
        {!tabContent && <p>Please select a content</p>}
      </main>
    </>
  );
}
