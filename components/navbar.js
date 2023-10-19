import Link from "next/link";
import styles from "./layout.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navFlex}>
            <div className={styles.logo}>
                <p>
                    LOGO
                </p>
            </div>
            <div className={styles.linkWrapper}>
              <Link href="/bio">
                <p>Bio</p>
              </Link>
            </div>
            <div className={styles.linkWrapper}>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </div>
            <div className={styles.linkWrapper}>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
