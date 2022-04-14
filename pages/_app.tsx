import type { AppProps } from "next/app";
import Link from "next/link";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "../styles/globals.scss";
import styles from "../styles/App.module.scss";

import { Navbar, H2, H3, Alignment, Button } from "@blueprintjs/core";
import { username } from "../settings";
import { capitalise } from "../utils";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar fixedToTop>
        <Navbar.Group align={Alignment.LEFT}>
          <Link href="/">
            <H2
              style={{ cursor: "pointer", textAlign: "center", margin: "auto" }}
            >
              {capitalise(username)}
            </H2>
          </Link>
          <Navbar.Divider />
          <Link href="skills">
            <Button
              minimal
              icon="document"
              className="bp4-large"
              text="My skills"
            />
          </Link>
          <Link href="projects">
            <Button
              minimal
              icon="document"
              className="bp4-large"
              text="My projects"
            />
          </Link>
        </Navbar.Group>
      </Navbar>
      <div className={styles.body_container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
