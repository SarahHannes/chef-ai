import chefIcon from "/src/assets/chef.png";

export default function Header() {
  return (
    <header>
      <img className="header-icon" src={chefIcon} alt="Chef icon" />
      <h1 className="header-name">My Robot Chef</h1>
    </header>
  );
}
