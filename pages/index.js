import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Experience from "./experience";
import Projects from "./projects";
import Education from "./education";
import Skills from "./skills";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>Hello Next World!</h1>
          <p className={styles.description}>Get started by editing </p>
          <h2>Learn</h2>
          <ul></ul>
        </div>
        <Experience />
        <Education />
        <Projects />

        <Skills />
        <Contact />
      </main>
    </>
  );
}
