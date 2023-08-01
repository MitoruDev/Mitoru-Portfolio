import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import mitoru from "../public/mitoru.png";
import lskills80 from "../public/lskills80.svg";
import lskills95 from "../public/lskills95.svg";
import dskills80 from "../public/dskills80.svg";
import dskills95 from "../public/dskills95.svg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const skills80 = darkMode ? dskills80 : lskills80;
  const skills95 = darkMode ? dskills95 : lskills95;
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mitoru Portfolio</title>
        <meta name="description" content="Willkommen auf der Portfolio-Seite von Mitoru. Hier können Sie mehr über Mitoru erfahren - ein talentierter Webentwickler und kreativer Kopf. Entdecken Sie beeindruckende Projekte, Fähigkeiten und Leidenschaften von Mitoru." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl hover:text-sky-500">Mitoru Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-4 py-2 rounded ml-8"
                  target="_blank"
                  href="https://discord.gg/Gy8M8Tsr7C"
                >
                  The 1%
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-sky-500 font-medium">
              Mitoru Dev
            </h2>
            <h3 className="text-2xl py-2">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Your ideas, our web. Let's start together
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 p-3 text-gray-600 dark:text-gray-400">
            <a target="_blank" href="https://twitter.com/Mitoru05"><AiFillTwitterCircle className="hover:text-sky-500"/></a>
            <a target="_blank" href="https://www.instagram.com/mitoru05/"><AiFillInstagram className="hover:text-sky-500"/></a>
            <a target="_blank" href="https://github.com/MitoruDev"><AiFillGithub className="hover:text-sky-500"/></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-72 h-72 mt-20 overflow-hidden">
            <Image src={mitoru} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="pb-10">
          <div className="max-w-4xl m-auto mt-20 bg-sky-200 p-5 rounded-xl dark:bg-gray-950">
            <h2 className=" text-center text-slate-950 text-4xl font-extrabold dark:text-white">Skills</h2>
            <p className="text-center mb-10 mt-2"> 
              These are my current proficiencies in the IT services domain and the progress I have made in learning.
            </p>
            <div className="flex flex-row max-w-screen text-center items-center">
              <div className="w-1/3 text-xs">
                <Image className="mx-auto p-5" src={skills95} alt="Skill 1" />
                <h5>HTML & CSS</h5>
              </div>
              <div className="w-1/3 text-xs"> 
                <Image className="mx-auto p-5" src={skills95} alt="Skill 2"/>
                <h5>JavaScript</h5>
              </div>
              <div className="w-1/3 text-xs">
                <Image className="mx-auto p-5" src={skills80} alt="Skill 3" />
                <h5>React</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
