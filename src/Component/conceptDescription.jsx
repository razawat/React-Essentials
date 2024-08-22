import PropsTypes from "prop-types";

export default function ConceptDescription({ content }) {
  console.log("Content: ", content);
  return (
    <div>
      <h3>{content.name}</h3>
      <p>{content.example}</p>
      <pre>
        <code>{content.code}</code>
      </pre>
      {/* <pre>
       {content.code}
      </pre> */}
    </div>
  );
}

ConceptDescription.propTypes = {
  content: PropsTypes.object.isRequired,
};
