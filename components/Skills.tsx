import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiVmware,
  SiCisco,
} from "react-icons/si";
import { FaJava, FaNetworkWired, FaWindows } from "react-icons/fa";

const skills = [
  //Networking
  { name: "Cisco Switching (VLANs)", Icon: SiCisco },
  { name: "Palo Alto Firewalls", Icon: FaNetworkWired },
  { name: "SD-WAN (VeloCloud)", Icon: FaNetworkWired },
  { name: "TCP/IP Networking", Icon: FaNetworkWired },
  { name: "Windows Server", Icon: FaWindows },
  { name: "DHCP / Network Services", Icon: FaWindows },
  { name: "VMware vSphere", Icon: SiVmware },
  { name: "Active Directory", Icon: FaWindows },

  //PROGRAMMING
  { name: "C / C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: FaJava },
  { name: "JavaScript", Icon: SiJavascript },

  //TOOLS
  { name: "Docker", Icon: SiDocker },
  { name: "Git / GitHub", Icon: SiGit },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
];

const handsOnSkills = [
  "Rack & stack hardware installations",
  "Structured cabling (RJ45 termination & patching)",
  "Switch configuration & deployment",
  "On-site network cutovers",
  "Hardware replacement & upgrades",
  "Remote site troubleshooting",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>

        {/*MAIN SKILLS*/}
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-3 p-3 border rounded">
              <Icon className="text-xl text-brand-700" />
              <span className="text-gray-200">{name}</span>
            </li>
          ))}
        </ul>

        {/*HANDS-ON*/}
        <h3 className="text-lg font-semibold mt-10 mb-4">
          Hands-On & Deployment
        </h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          {handsOnSkills.map((skill) => (
            <li key={skill} className="p-3 border rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
