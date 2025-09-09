import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Intro() {
  return (
    <section id="home" className="section">
      <div className="container flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-4xl font-bold">Hi, I’m Jennifer Choubassi</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          IT & Software Development • C++ • Python • Java • Web • Networking
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="/Jennifer-Choubassi.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <HiOutlineDocumentText className="text-brand-700" />
            Resume
          </a>
          <a
            href="https://github.com/jchoubassi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <FaGithub className="text-brand-700" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jennifer-choubassi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <BsLinkedin className="text-brand-700" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
