import classes from "./Header.module.css"

const Header = () => {
  return (<header className={classes.Header}>
    <div>
      <span>Keanu Weather</span>
      <span>Credits: <a href="https://baitemir.gatsbyjs.io" target="_blank">Baitemir</a></span>
    </div>
  </header>);
}

export default Header;