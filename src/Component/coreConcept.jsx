export default function CoreConcept({ name, description, image }) {
  console.log("Image: ", image);
  return (
    <>
      <img src={image} alt="img" />
      <h3>{name}</h3>
      <p>{description}</p>
    </>
  );
}
