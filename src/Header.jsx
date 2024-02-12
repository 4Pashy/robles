import mainLogo from "./assets/mainLogo.png";

/*Tome la decision de tener logo, search bar y los botones todo dentro del header simplemente porque asi lo he hecho antes y 
por el momento no se hace mucho css mas alla de delinear el area que quede claro con unos bordes.*/
function Header() {
  return (
    <>
      <header className="mainHeader">
        <img
          className="mainLogoImage"
          src={mainLogo}
          alt="logo recidencial robles"
        />
        <input type="text" placeholder="Search for products..." />
        <button className="buttons">Search</button>
      </header>
    </>
  );
}

export default Header;
