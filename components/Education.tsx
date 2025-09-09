import { FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4 border rounded-lg p-4">
            <div className="shrink-0 mt-1">
              <FaGraduationCap className="text-2xl text-brand-700" />
            </div>
            <div>
              <h3 className="font-bold">BSc, Computer Science</h3>
              <p className="text-sm text-gray-400">Massey University · Present</p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Coursework in systems programming, networking, AI, and embedded development.</li>
                <li>Projects include memory allocators, TCP servers with RSA encryption, and web applications.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 border rounded-lg p-4">
            <div className="shrink-0 mt-1">
              <FaUniversity className="text-2xl text-brand-700" />
            </div>
            <div>
              <h3 className="font-bold">BSc, Psychology</h3>
              <p className="text-sm text-gray-400">MacEwan University · Jun 2020</p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Specialized in Cognitive &amp; Perception Psychology.</li>
                <li>Conducted supervised research on eye gaze and personality perception.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
