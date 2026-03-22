export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="mb-6">
          <h3 className="font-bold">Network Technician – Canadian Mountain Holidays</h3>
          <p className="text-sm text-gray-400">Sept 2025 – Present · Banff, AB</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Support and maintain network infrastructure across 15+ remote sites.</li>
            <li>Work with Cisco switching, Palo Alto firewalls, and SD-WAN (VeloCloud).</li>
            <li>Execute network cutovers and infrastructure upgrades in live environments.</li>
            <li>Implemented DHCP failover (hot standby) using Windows Server.</li>
            <li>Provision virtual machines using VMware vSphere for infrastructure services.</li>
            <li>Monitor and troubleshoot network performance using PRTG and SolarWinds.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold">Support Technician – Government of Canada</h3>
          <p className="text-sm text-gray-400">Jan 2024 – Jun 2025 · Edmonton, AB</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Delivered frontline IT support for 1,000+ users, maintaining a 98% incident resolution rate.</li>
            <li>Administered Active Directory and Microsoft 365 for 1,000+ users, improving access control and system reliability.</li>
            <li>Wrote a monthly IT newsletter and built guides/training resources that streamlined onboarding.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold">Product Zone Expert – Apple Inc.</h3>
          <p className="text-sm text-gray-400">May 2022 – Jan 2024 · Edmonton, AB</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Delivered technical support and training across Apple’s ecosystem, improving user confidence and experience.</li>
            <li>Mentored peers and improved team workflows, boosting efficiency and knowledge-sharing.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Sales Associate – The Source</h3>
          <p className="text-sm text-gray-400">Mar 2018 – Feb 2022 · Edmonton, AB</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Provided tailored tech solutions and authored reference guides for team use.</li>
            <li>Organized schedules and supported team growth through training and collaboration.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
