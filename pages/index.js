import Head from "next/head";
import CenteredLayout, { siteTitle } from "../components/centeredLayout";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Anniessa Antar";

export default function Home() {
  return (
    <CenteredLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.container}>
        <div className={utilStyles.header}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={150}
            width={130}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <p>Hello, I'm Anniessa. I am a software engineer.</p>
        </div>
      </section>
    </CenteredLayout>
  );
}
