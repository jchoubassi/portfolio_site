import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  blurb: string;
  href?: string;
  tech: string[];
};

const infrastructureProjects: Project[] = [
  {
    title: "Network Infrastructure Refresh",
    blurb:
      "Supported large-scale infrastructure refreshes across remote sites, including switch replacements, SD-WAN deployments, firewall changeovers, and live production cutovers.",
    tech: ["Cisco", "Palo Alto", "VeloCloud", "Cutovers"],
  },
  {
    title: "POP Site Network Upgrades",
    blurb:
      "Contributed to network upgrades at POP sites, assisting with hardware replacements, connectivity validation, and transition support during modernization efforts.",
    tech: ["Cisco", "Remote Sites", "Troubleshooting"],
  },
  {
    title: "Wireless AP Refresh",
    blurb:
      "Supported wireless infrastructure upgrades through access point replacements, deployment coordination, and post-cutover troubleshooting to improve coverage and reliability.",
    tech: ["Wireless", "Access Points", "Deployment"],
  },
  {
    title: "DHCP Failover Deployment",
    blurb:
      "Implemented DHCP failover (hot standby) using Windows Server to improve service continuity and network resilience.",
    tech: ["Windows Server", "DHCP"],
  },
];

const softwareProjects: Project[] = [
  {
    title: "FTP Server (C++)",
    blurb:
      "Implemented active-mode FTP over sockets with IPv6 support following RFC 959/2428.",
    href: "https://github.com/jchoubassi/FTP_server",
    tech: ["C++", "Sockets", "IPv6"],
  },
  {
    title: "Buddy System Memory Manager (C++)",
    blurb:
      "Built a custom allocator demonstrating OS-level memory management techniques.",
    href: "https://github.com/jchoubassi/buddy-system-memory-manager",
    tech: ["C++", "Memory Management", "Operating Systems"],
  },
  {
    title: "Inverted Pendulum (C++)",
    blurb:
      "Developed a fuzzy-logic controller with real-time simulation and control tuning.",
    href: "https://github.com/jchoubassi/InvertedPendulum",
    tech: ["C++", "Fuzzy Logic", "Simulation"],
  },
];

function ProjectCard({ title, blurb, href, tech }: Project) {
  return (
    <div className="border border-brand-200/40 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-300 mt-2">{blurb}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-1 rounded bg-brand-50 text-brand-700"
          >
            {item}
          </span>
        ))}
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 border rounded border-brand-200 text-brand-700 hover:bg-brand-50"
        >
          <FaGithub className="text-brand-700" />
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>

        <h3 className="text-lg font-semibold mb-4">Infrastructure & Systems</h3>
        <div className="space-y-6 mb-10">
          {infrastructureProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">Software Projects</h3>
        <div className="space-y-6">
          {softwareProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
