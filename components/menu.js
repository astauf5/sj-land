import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme";
import Link from "next/link";
import NavLink from "./navLink";
import Contact from "./contact";
import util from "../styles/util.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Link href="/">
          <img
            className={util.hiddenOnMobile + " " + util.pointer + " logoInvert"}
            src="/logo.png"
            alt="site logo"
          ></img>
        </Link>

        <nav className={styles.nav}>
          <NavLink svg="recents" href="/" label="Home" shortcut="1" />
          <NavLink svg="about" href="/about" label="About" shortcut="2" />

          <NavLink
            svg="projects"
            href="/projects"
            label="Projects"
            shortcut="3"
          />
          <NavLink
            svg="shopping-cart"
            href="/store"
            label="Boutique"
            shortcut="4"
          />
          <NavLink
            svg="investments"
            href="/investments"
            label="Investments"
            shortcut="5"
          />
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="reading"
            href="/reading-list"
            label="Reading List"
            shortcut="6"
          />
          <NavLink
            svg="shopping-bag"
            href="/goods"
            label="Aesthetic Goods"
            shortcut="7"
          />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="8" />
          <NavLink
            svg="newsletters"
            href="/newsletters"
            label="Newsletters"
            shortcut="9"
          />
          <NavLink
            svg="podcasts"
            href="/podcasts"
            label="Podcasts"
            shortcut="0"
          />
          <p className={styles.divider}>Stay in touch</p>
          <Contact svg="chat" label="Contact" shortcut="/" />
          <NavLink
            svg="linkedin"
            href="https://linkedin.com/alexstauffer"
            label="LinkedIn"
            external="true"
          />
        </nav>
      </div>
      <ThemeChanger />
    </div>
  );
}
