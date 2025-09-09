import { FaGithub } from "react-icons/fa";

type Project = { title: string; blurb: string; href: string };

const projects: Project[] = [
  { title: "FTP Server (C++)", blurb: "Active-mode FTP over sockets; RFC 959/2428 with IPv6 support.", href: "https://github.com/jchoubassi/FTP_server" },
  { title: "Inverted Pendulum (C++)", blurb: "Fuzzy-logic controller with real-time simulation.", href: "https://github.com/jchoubassi/InvertedPendulum" },
  { title: "Buddy System Memory Manager (C++)", blurb: "Custom allocator showcasing OS-level memory management.", href: "https://github.com/jchoubassi/buddy-system-memory-manager" },
  { title: "Date Adjuster (Haskell)", blurb: "Correctly shifts dates across months/years and leap years.", href: "https://github.com/jchoubassi/haskell-date-adjuster" },
  { title: "Airline Site Sim (Python)", blurb: "Domain modeling / simulation; clean Python structure.", href: "https://github.com/jchoubassi/airline_site_sim" },
  { title: "Computer Store Management (C++)", blurb: "Inventory & operations app using OOP, files, and menus.", href: "https://github.com/jchoubassi/computer_store_management" },
  { title: "Course Selection Tool (Java)", blurb: "Enrollment tool with searching, validation, and serialization.", href: "https://github.com/jchoubassi/course_selection_tool" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="border border-brand-200/40 rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.blurb}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 border rounded border-brand-200 text-brand-700 hover:bg-brand-50"
              >
                <FaGithub className="text-brand-700" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
