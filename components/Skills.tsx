import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava, FaNetworkWired, FaWindows } from "react-icons/fa";

const skills = [
  { name: "C / C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: FaJava },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Docker", Icon: SiDocker },
  { name: "Git / GitHub", Icon: SiGit },
  { name: "Active Directory", Icon: FaWindows },
  { name: "TCP/IP Networking", Icon: FaNetworkWired },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-3 p-3 border rounded">
              <Icon className="text-xl text-brand-700" />
              <span className="text-gray-200">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
