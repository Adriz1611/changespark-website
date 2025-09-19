import Team from "@/components/pages/team";

const TeamHero = () => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
    <div className="container-custom relative z-10 text-center">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-heading">
        Meet Our Team
      </h1>
      <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-paragraph">
        Passionate changemakers dedicated to empowering communities and creating lasting positive impact.
      </p>
    </div>
  </section>
);

const JoinTeam = () => (
  <section className="section-padding bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Team</h2>
      <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-12">
        We're always looking for passionate individuals who share our vision of creating positive change. Explore our current openings and become part of our mission.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="/join-us" className="btn-secondary text-lg">
          Volunteer With Us
        </a>
        <a href="mailto:connect@changespark.in" className="btn-outline text-lg">
          Send Us Your Resume
        </a>
      </div>
    </div>
  </section>
);


export default async function TeamSection() {
  return (
    <>
      <TeamHero />
      <section className="section-padding bg-gray-50">
        <Team />
      </section>
      <JoinTeam />
    </>
  );
}
