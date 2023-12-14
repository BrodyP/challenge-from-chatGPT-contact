import Link from "next/link";
import classes from "./header-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <h1> Contact</h1>
      </Link>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/contacts">Create Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
