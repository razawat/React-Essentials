import header from "../assets/images/header.png";

export default function Header() {
  return (
    <header id="header">
      <img src={header} alt="header" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
