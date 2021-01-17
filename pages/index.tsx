import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maga Suhas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.marquee}>
        <span>Click the below image </span>
      </h1>

      <main className={styles.main}>
        <Link href="/home">
          <Image
            src="/images/suhas_ugly.jpeg"
            alt="Ugly Suhas"
            height="831"
            width="1280"
          />
        </Link>
      </main>
    </div>
  );
}
