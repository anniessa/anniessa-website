import Link from "next/link";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import CenteredLayout from "../components/centeredLayout";
import Navbar from "../components/navbar";


export default function Bio() {
  return (
    <CenteredLayout>
    <div className={utilStyles.header}>
    <h1>Experience</h1>
    <div className={styles.backToHome}>
      <Link href="/"> Back </Link>{" "}
      </div>
</div>
</CenteredLayout>
  );
};
