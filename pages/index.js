import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Test from "./Test";
import Page2 from "./Page2";
import Page3 from "./Page3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>Hello Next World!</h1>
          <p className={styles.description}>Get started by editing </p>
          <h2>Learn</h2>
          <ul>
            <li>
              <a href="https://nextjs.org/docs">Documentation</a>
            </li>
            <li>
              <a href="https://nextjs.org/learn">Learn Next.js</a>
            </li>
          </ul>
          <h2>Examples</h2>
          <ul>
            <li>
              <a href="https://nextjs.org/docs">Documentation</a>
            </li>
            <li>
              <a href="https://nextjs.org/learn">Learn Next.js</a>
            </li>
          </ul>
        </div>
        <Test />
        <Page2 />
        <Page3 />
      </main>
    </> 
  ); 
}
 