"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Check,
  Compass,
  Flag,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  MonitorSmartphone,
  Sparkles,
  Scale,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

const beliefs = [
  ["Courage", "To dream big and step up for the nation."],
  ["Discipline", "To stay consistent in effort and purpose."],
  ["Hard Work", "To turn plans into results."],
  ["Integrity", "To build with honesty, transparency, and service."],
];

const vision = [
  ["Know themselves", "Understand their strengths, values, aspirations and purpose."],
  ["Develop themselves", "Build the knowledge, skills and emotional capabilities needed for life and work."],
  ["Contribute to society", "Use their talents and opportunities to create positive change around them."],
  ["Lead with integrity", "Demonstrate responsibility, empathy, courage and ethical leadership."],
  ["Build the country’s future", "Become active contributors to a more prosperous, inclusive, innovative and sustainable nation."],
];

const mission = [
  ["Discover", "Discover their strengths, interests, aspirations and purpose."],
  ["Develop", "Develop self-leadership, emotional intelligence, communication, creativity and other future-ready skills."],
  ["Participate", "Engage in programs, projects, community initiatives and opportunities that encourage learning through action."],
  ["Lead", "Take responsibility, inspire others and become positive role models in their communities."],
  ["Impact", "Turn knowledge and skills into meaningful contributions to society and the nation."],
];

const journey = [
  ["Discover", "Know yourself. Identify your strengths, interests, aspirations and purpose.", Compass],
  ["Learn", "Build the skills, knowledge and mindset needed for your personal and professional journey.", BookOpen],
  ["Participate", "Get involved in programs, projects, campaigns and community initiatives.", Users],
  ["Lead", "Take initiative. Work with others. Solve problems. Inspire positive change.", Megaphone],
  ["Impact", "Create meaningful results in your community and contribute to our development journey.", Target],
];

const leadershipSkills = [
  { title: "Self-leadership, emotional resilience & emotional intelligence", motto: "Know yourself. Lead yourself. Inspire others.", text: "Develop self-awareness, emotional resilience, confidence, responsible decision-making and personal leadership.", icon: Brain },
  { title: "Communication & public speaking", motto: "Find your voice. Express your ideas. Influence with purpose.", text: "Build confidence in communication, public speaking, presentation, listening and interpersonal skills.", icon: MessagesSquare },
  { title: "Critical thinking & decision making", motto: "Think critically. Decide wisely. Lead confidently.", text: "Question assumptions, evaluate evidence, explore choices and make decisions that create positive change.", icon: Scale },
  { title: "Conflict resolution & teamwork", motto: "Understand. Collaborate. Resolve. Grow together.", text: "Turn differences into dialogue, conflicts into solutions and teams into stronger communities.", icon: Handshake },
  { title: "Leadership", motto: "Lead with purpose. Collaborate with people. Create results.", text: "Develop teamwork, problem-solving, decision-making, collaboration and responsible leadership.", icon: Flag },
];

const capabilityTracks = [
  ["Social", "Understand society. Serve communities. Create social impact.", HeartHandshake],
  ["Digital", "Understand technology. Build digital capability. Create the future.", MonitorSmartphone],
  ["Green", "Protect our planet. Build green capability. Create a sustainable future.", Leaf],
  ["Entrepreneurship & innovation", "See possibilities. Create solutions. Build opportunities.", Lightbulb],
];

const joinGroups = [
  ["Students", "Discover. Learn. Participate. Lead."],
  ["Young professionals", "Share your experience. Mentor. Volunteer. Contribute."],
  ["Entrepreneurs", "Innovate. Create opportunities. Inspire others."],
  ["Volunteers", "Give your time, skills and energy to meaningful causes."],
  ["Educators & mentors", "Guide young people and help them realize their potential."],
  ["Institutions & organisations", "Partner with us to create greater opportunities and impact for youth."],
];

const FadeIn = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55 }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ eyebrow, title, text, light = false }) => (
  <div className="yuva-section-title max-w-3xl mx-auto text-center mb-12 lg:mb-16">
    {eyebrow && <p className={`uppercase tracking-[0.22em] text-sm font-semibold mb-4 ${light ? "text-green-200" : "text-green-700"}`}>{eyebrow}</p>}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading ${light ? "text-white" : "text-gray-900"}`}>{title}</h2>
    {text && <p className={`mt-5 text-lg leading-relaxed font-paragraph ${light ? "text-green-50" : "text-gray-600"}`}>{text}</p>}
  </div>
);

export default function YuvaVikasPage() {
  return (
    <main className="yuva-page overflow-hidden bg-white font-paragraph text-gray-700">
      <section className="relative flex min-h-[760px] items-center bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 text-white sm:min-h-[740px]">
        <div aria-hidden="true" className="yuva-grid absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-[32rem] w-[32rem] rounded-full bg-emerald-400/20 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[-7rem] top-24 h-72 w-72 rounded-full border border-green-200/20 yuva-orbit sm:right-[8%] sm:top-20 sm:h-96 sm:w-96" />
        <div aria-hidden="true" className="absolute right-[-3rem] top-40 h-48 w-48 rounded-full border border-yellow-200/30 yuva-orbit-reverse sm:right-[14%] sm:top-36 sm:h-64 sm:w-64" />
        <motion.div aria-hidden="true" animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-7 top-28 hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm sm:block"><span className="block text-4xl font-bold text-green-300">2047</span><span className="text-xs font-semibold tracking-widest text-white/75">VIKSIT BHARAT</span></motion.div>
        <div className="container-custom relative pt-28 pb-16 lg:pt-36 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.45 }} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"><Sparkles className="h-4 w-4 text-yellow-300" /> Youth as Change Makers</motion.div>
            <h1 className="mt-7 text-5xl font-bold leading-[1.05] font-heading sm:text-6xl lg:text-8xl">Mishan <span className="text-green-300">Yuva Vikas</span></h1>
            <p className="mt-5 text-2xl font-medium text-green-100 md:text-3xl">Building Viksit Bharat.</p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">We don&apos;t just want to talk about the future. We want to prepare our youth to build it.</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">An independent youth-centric journey inspired by the vision of Viksit Bharat @2047, empowering young minds with the awareness, skills, opportunities, confidence and leadership to contribute meaningfully to our development journey.</p>
            <motion.a whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }} href="#journey" className="yuva-cta btn-primary mt-10 inline-flex items-center gap-2">Start your journey <ArrowRight className="h-5 w-5" /></motion.a>
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } } }} className="mt-10 flex flex-wrap gap-2">
              {["Discover", "Develop", "Participate", "Lead", "Impact"].map((item) => <motion.span key={item} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-green-50 backdrop-blur-sm">{item}</motion.span>)}
            </motion.div>
          </motion.div>
          <a href="#journey" className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-green-100 sm:hidden"><span>Explore</span><span className="yuva-scroll-indicator h-7 w-4 rounded-full border border-green-100/70"><span /></span></a>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100 lg:p-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Vision</p><h2 className="mt-4 text-3xl font-bold text-gray-900 font-heading">A Generation of Confident, Capable and Responsible Youth.</h2><p className="mt-5 leading-relaxed">We envision a generation of youth who understand themselves, develop their capabilities and actively help shape a better future.</p><div className="mt-8 space-y-5">{vision.map(([title, text]) => <div key={title} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" /><p><strong className="uppercase text-gray-900">{title}</strong><span className="block mt-1 text-sm leading-relaxed">{text}</span></p></div>)}</div></FadeIn>
          <FadeIn className="rounded-3xl bg-gradient-to-br from-green-800 to-emerald-950 p-8 text-white shadow-lg lg:p-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">Mission</p><h2 className="mt-4 text-3xl font-bold font-heading">From Potential to Purpose. From Purpose to Action.</h2><p className="mt-5 leading-relaxed text-green-50">We seek to create meaningful pathways for youth to grow into capable, conscientious changemakers.</p><div className="mt-8 space-y-5">{mission.map(([title, text]) => <div key={title} className="flex gap-3"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-300 text-xs font-bold text-green-950">✓</span><p><strong className="uppercase text-white">{title}</strong><span className="block mt-1 text-sm leading-relaxed text-green-50">{text}</span></p></div>)}</div></FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white"><div className="container-custom"><FadeIn><SectionTitle eyebrow="Our motto" title="Unleash the Potential of Our Youth." text="Because when youth are skilled, informed and inspired, no goal is too big for us." /></FadeIn><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{beliefs.map(([title, text], index) => <FadeIn key={title} className="h-full"><div className="h-full rounded-2xl border border-green-100 bg-green-50 p-7"><span className="text-4xl font-bold text-green-200">0{index + 1}</span><h3 className="mt-4 text-2xl font-bold text-green-900 font-heading">{title}</h3><p className="mt-3 leading-relaxed">{text}</p></div></FadeIn>)}</div></div></section>

      <section className="section-padding bg-gradient-to-br from-emerald-950 to-green-800 text-white"><div className="container-custom max-w-5xl"><FadeIn><SectionTitle light eyebrow="Why Mishan Yuva Vikas?" title="2047 is the target. The journey begins now." /><div className="space-y-6 text-lg leading-relaxed text-green-50"><p>India&apos;s vision of becoming a Viksit Bharat by 2047 cannot be achieved by waiting. It must be built through the choices, capabilities, character and contributions of today&apos;s youth.</p><p>Mishan Yuva Vikas begins now. Our mission is to prepare, empower and inspire youth to become confident, responsible and capable citizens — individuals who can lead themselves, contribute to their communities and become changemakers in the journey towards Viksit Bharat @2047.</p><p>We want to prepare youth today to build the India we envision for tomorrow.</p></div><div className="mt-10 grid gap-3 text-center sm:grid-cols-3"><p className="rounded-xl border border-white/15 bg-white/10 px-4 py-5 font-semibold">The Mission is NOW.</p><p className="rounded-xl border border-white/15 bg-white/10 px-4 py-5 font-semibold">The Vision is Viksit Bharat @2047.</p><p className="rounded-xl border border-white/15 bg-white/10 px-4 py-5 font-semibold">The Journey begins today.</p></div></FadeIn></div></section>

      <section id="journey" className="section-padding bg-gray-50"><div className="container-custom"><SectionTitle eyebrow="Your journey" title="Discover. Learn. Participate. Lead. Impact." text="Mishan Yuva Vikas is designed as a journey—not just a program." /><div className="relative grid gap-5 before:absolute before:bottom-6 before:left-[21px] before:top-6 before:w-px before:bg-green-200 md:grid-cols-5 md:before:hidden">{journey.map(([title, text, Icon], index) => <FadeIn key={title} className="relative pl-12 md:pl-0"><motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-xl"><span className="absolute left-0 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 font-bold text-white shadow-md md:static md:bg-green-100 md:text-green-800 md:shadow-none">{index + 1}</span><Icon className="mt-1 h-7 w-7 text-green-700 md:mt-6" /><h3 className="mt-4 text-xl font-bold text-gray-900 font-heading">{title}</h3><p className="mt-3 text-sm leading-relaxed">{text}</p></motion.div></FadeIn>)}</div><div className="mt-10 text-center"><p className="mb-5 text-lg font-medium text-gray-800">Your journey can begin today.</p><Link href="/contact-us" className="btn-primary inline-flex items-center gap-2">Start your journey <ArrowRight className="h-5 w-5" /></Link></div></div></section>

      <section className="section-padding bg-white"><div className="container-custom max-w-5xl"><FadeIn><SectionTitle eyebrow="From the founder’s desk" title="Mishan Yuva Vikas — Youth as Change Makers" /><div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-7 md:p-12"><div className="space-y-5 text-lg leading-relaxed"><p>Our greatest strength is in our youth. The future of our nation will not be shaped only by policies and programs, but by the values, choices and actions of our young citizens.</p><p>Mishan Yuva Vikas seeks to inspire youth to become responsible, disciplined, visionary, focused and people of integrity — young citizens who take ownership of their lives and contribute meaningfully to society.</p><p>We believe in the dignity of every form of honest labor, fairness in opportunity and reward, and respect for every individual who contributes to our nation. We must reject exploitation and build a culture where hard work, ability and integrity are valued.</p><p>Corruption must have no place in the country we aspire to build. Integrity must begin at the top and become a value practiced by every citizen. We must learn to say no to corruption—not give, not take and not look away.</p><p>Our youth should embrace self-reliance. Rather than asking only, “What can I get?”, let us encourage them to ask, “What can I learn, create, contribute and give back?” The objective is not to reject legitimate support, but to develop the confidence and capabilities to stand on one&apos;s own feet.</p></div><blockquote className="mt-10 border-l-4 border-green-600 pl-6 text-xl font-medium italic leading-relaxed text-green-900">“I believe our greatest development opportunity lies in empowering our youth — not merely as recipients of opportunities, but as creators, leaders and nation-builders.”<footer className="mt-4 text-base not-italic text-gray-600">Jayakumar — Founder, Mishan Yuva Vikas</footer></blockquote><p className="mt-8 text-lg font-semibold text-green-900">Youth Today. Leaders Tomorrow.<br />Together, Let&apos;s Build a Viksit Bharat 2047.</p></div></FadeIn></div></section>

      <section className="section-padding bg-gray-50"><div className="container-custom"><SectionTitle eyebrow="Changemakers leadership development journey" title="Skills for Life. Skills for Leadership. Skills for the Future." text="Education should go beyond academic knowledge. Youth also need the ability to understand themselves, communicate effectively, work with others, make responsible decisions and lead with purpose." /><FadeIn><div className="rounded-2xl bg-green-900 px-6 py-6 text-center text-sm font-bold tracking-wider text-green-50 shadow-lg sm:text-base">MINDSET <span className="mx-2 text-green-300">→</span> LEADERSHIP <span className="mx-2 text-green-300">→</span> CAPABILITY <span className="mx-2 text-green-300">→</span> OPPORTUNITY <span className="mx-2 text-green-300">→</span> ACTION <span className="mx-2 text-green-300">→</span> IMPACT & CONTINUITY</div></FadeIn><div className="mt-10 grid gap-5 lg:grid-cols-3"><FadeIn className="lg:col-span-3"><div className="rounded-2xl border border-green-100 bg-white p-7"><p className="text-sm font-bold uppercase tracking-widest text-green-700">Tier 1 — Mindset</p><h3 className="mt-2 text-2xl font-bold text-gray-900 font-heading">Citizenship & Nation Building</h3><p className="mt-3 text-green-800 font-medium">Be responsible. Be involved. Be the change.</p><p className="mt-3 leading-relaxed">Encourage youth to understand their responsibilities and become active contributors to their communities and the nation.</p></div></FadeIn></div><div className="mt-12"><div className="mx-auto mb-8 max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">Tier 2 — Core leadership skills</p><h3 className="mt-3 text-3xl font-bold text-gray-900 font-heading">Build the inner skills that make change possible.</h3><p className="mt-4 leading-relaxed text-gray-600">Five connected capabilities to help young people lead themselves, work with others and create positive change.</p></div><div className="grid gap-5 md:grid-cols-2">{leadershipSkills.map(({ title, motto, text, icon: Icon }, index) => <FadeIn key={title} className={index === leadershipSkills.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)]" : ""}><div className="group h-full rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white"><Icon className="h-6 w-6" /></div><div><span className="text-xs font-bold uppercase tracking-widest text-green-700">Skill 0{index + 1}</span><h4 className="mt-1 text-xl font-bold text-gray-900 font-heading">{title}</h4></div></div><p className="mt-6 border-l-2 border-green-400 pl-4 font-medium italic leading-relaxed text-green-800">{motto}</p><p className="mt-4 text-sm leading-relaxed text-gray-600">{text}</p></div></FadeIn>)}</div></div><h3 className="mt-14 text-center text-2xl font-bold text-gray-900 font-heading">Tier 3 — Capability Tracks</h3><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{capabilityTracks.map(([title, text, Icon]) => <FadeIn key={title}><div className="h-full rounded-2xl border border-green-100 bg-green-50 p-6"><Icon className="h-8 w-8 text-green-700" /><h4 className="mt-5 text-xl font-bold text-green-950 font-heading">{title}</h4><p className="mt-3 text-sm leading-relaxed">{text}</p></div></FadeIn>)}</div><div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-white p-7 ring-1 ring-gray-100"><p className="text-sm font-bold uppercase tracking-widest text-green-700">Tier 4 — Opportunity</p><h4 className="mt-3 text-xl font-bold text-gray-900 font-heading">MYV Opportunity Navigator & Bank</h4><p className="mt-3 text-sm leading-relaxed">What opportunities exist, and where do I fit? The Navigator is the orientation programme; the Opportunity Bank is the resource that supports it.</p></div><div className="rounded-2xl bg-white p-7 ring-1 ring-gray-100"><p className="text-sm font-bold uppercase tracking-widest text-green-700">Tier 5 — Action</p><h4 className="mt-3 text-xl font-bold text-gray-900 font-heading">Mission-based Community Projects</h4><p className="mt-3 text-sm leading-relaxed">Convert learning and opportunity into impact.</p></div><div className="rounded-2xl bg-white p-7 ring-1 ring-gray-100"><p className="text-sm font-bold uppercase tracking-widest text-green-700">Tier 6 — Impact & continuity</p><h4 className="mt-3 text-xl font-bold text-gray-900 font-heading">A lifelong changemakers network</h4><p className="mt-3 text-sm leading-relaxed">Certification → Recognition → Changemakers Network → Continued Action</p></div></div></div></section>

      <section className="section-padding bg-gradient-to-br from-green-800 to-emerald-950 text-white"><div className="container-custom"><SectionTitle light eyebrow="Join the mission" title="Your Future. Your Contribution. Our Nation." text="Make a difference. Start today." /><div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">{["Learn something.", "Develop yourself.", "Help someone.", "Take an initiative.", "Join a project.", "Become a volunteer.", "Lead a change."].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4"><Check className="h-5 w-5 text-green-300" />{item}</div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-relaxed text-green-50">Be the generation that doesn&apos;t just witness India&apos;s transformation—but helps create it.</p></div></section>

      <section className="section-padding bg-white"><div className="container-custom grid gap-7 lg:grid-cols-2"><FadeIn><div className="h-full rounded-3xl bg-green-50 p-8 lg:p-10"><Award className="h-10 w-10 text-green-700" /><h2 className="mt-6 text-3xl font-bold text-gray-900 font-heading">Become a Change Maker</h2><p className="mt-3 text-xl font-medium text-green-800">Don&apos;t Wait for Change. Become Part of It.</p><p className="mt-6 leading-relaxed">Change does not always begin with a big idea. Sometimes it begins with one young person who decides to learn something new, solve a problem, start a conversation, volunteer, create an opportunity or lead by example.</p><p className="mt-4 leading-relaxed">Your contribution matters. Our future is not something we simply inherit. It is something we help build.</p><Link href="/contact-us" className="btn-primary mt-8 inline-flex items-center gap-2">Become a change maker <ArrowRight className="h-5 w-5" /></Link></div></FadeIn><FadeIn><div className="h-full rounded-3xl bg-gray-900 p-8 text-white lg:p-10"><Users className="h-10 w-10 text-green-300" /><h2 className="mt-6 text-3xl font-bold font-heading">Campus Ambassador Programme</h2><p className="mt-3 text-xl font-medium text-green-200">Take the Mission to Your Campus</p><p className="mt-6 leading-relaxed text-gray-200">Become a Mishan Yuva Vikas Campus Ambassador and help create a culture of learning, leadership, participation and positive action among young people.</p><ul className="mt-5 space-y-2 text-gray-100">{["Promote youth development initiatives", "Organize awareness and learning activities", "Encourage student participation", "Lead community initiatives", "Connect students with opportunities", "Develop your leadership experience", "Build a network of young changemakers"].map((item) => <li className="flex gap-2" key={item}><Check className="mt-1 h-4 w-4 shrink-0 text-green-300" />{item}</li>)}</ul><p className="mt-6 font-semibold text-green-200">Your Campus. Your Voice. Your Leadership.</p><Link href="/contact-us" className="btn-outline mt-8 inline-flex items-center gap-2">Become a campus ambassador <ArrowRight className="h-5 w-5" /></Link></div></FadeIn></div></section>

      <section className="section-padding bg-gray-50"><div className="container-custom"><SectionTitle eyebrow="Who can join?" title="There Is a Place for Every Change Maker" text="Whether you are taking your first step or already leading others, there is a place for you." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{joinGroups.map(([title, text]) => <FadeIn key={title}><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"><h3 className="text-lg font-bold uppercase text-green-800">{title}</h3><p className="mt-3 leading-relaxed">{text}</p></div></FadeIn>)}</div></div></section>
    </main>
  );
}
