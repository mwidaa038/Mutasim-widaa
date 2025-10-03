import React from 'react'

const CANDIDATE = {
  name: 'Mutasim Widaa',
  currentRole: 'Senior Operations Manager',
  targetMarket: 'Qatar',
  industry: 'Aviation / Transportation / Logistics',
  experience: '6+',
  achievements: [
    'Reduced operational costs by 10% YoY at Hertz through SOPs and staffing optimization',
    'Improved employee retention by 60% YoY with engagement and training programs',
    'Drove 30-point YoY NPS improvement by embedding employee/customer feedback systems'
  ],
  cvUrl: '/assets/MutasimWidaa-CV.pdf',
  strategyPdfUrl: '/assets/MutasimWidaa-Strategy.pdf'
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      <header className="bg-white shadow sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">M</div>
            <div>
              <h1 className="text-lg font-semibold">{CANDIDATE.name}</h1>
              <p className="text-sm text-slate-500">{CANDIDATE.currentRole} • {CANDIDATE.industry}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#strategy" className="hover:underline">Job Strategy</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase text-blue-700 font-semibold">Operations Leadership</p>
            <h2 className="text-4xl font-extrabold mt-2">{CANDIDATE.name}</h2>
            <p className="mt-4 text-lg text-slate-700">{CANDIDATE.experience} years of workforce management and operational transformation experience, delivering measurable results in high-pressure environments across transportation and logistics sectors.</p>
            <div className="mt-6 flex gap-3">
              <a href={CANDIDATE.cvUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded shadow bg-blue-600 text-white">Download CV</a>
              <a href={CANDIDATE.strategyPdfUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-blue-600 text-blue-600">Download Strategy</a>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold">Key Achievements</h3>
            <ul className="mt-3 space-y-2">
              {CANDIDATE.achievements.map((a,i)=> (
                <li key={i} className="text-slate-700">• {a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stats" className="mt-10 grid sm:grid-cols-3 gap-6">
          <Stat title="Years Experience" value={CANDIDATE.experience} />
          <Stat title="Target Market" value={CANDIDATE.targetMarket} />
          <Stat title="Industry" value={CANDIDATE.industry} />
        </section>

        <section id="about" className="mt-12 bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold">About</h3>
          <p className="mt-3 text-slate-700">Strategic operations leader with a proven record of cost optimization, workforce engagement, and customer experience transformation. Adept at scaling operations in dynamic industries and aligning with safety, compliance, and regulatory standards. Seeking senior operations leadership opportunities in Qatar’s aviation and transport sectors.</p>
        </section>

        <section id="experience" className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold">Experience</h3>
            <ExperienceItem title="Hub Operations Manager" company="Hertz" dates="Mar 2022 – May 2025" bullets={["Cut costs by 10% YoY via SOPs & data-driven staffing","Boosted retention 60% YoY","Improved NPS by 30 points YoY"]} />
            <ExperienceItem title="Quality Control Manager" company="Avis Budget Group" dates="Aug 2021 – Mar 2022" bullets={["Led 50+ staff across 6 departments","Reduced costs by $10,000 annually","Improved product quality by 40% YoY"]} />
            <ExperienceItem title="Instant Return Manager" company="Hertz" dates="Aug 2019 – May 2021" bullets={["Managed 10–15 staff across 3 shifts","Achieved 100% compliance within 1 month","Optimized KPIs and improved interdepartmental collaboration"]} />
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold">Education</h3>
            <p className="mt-2">B.A. Business Administration, University of Colorado Denver (2024)</p>
            <h3 className="text-xl font-bold mt-6">Languages</h3>
            <p>English (Native), Arabic (Intermediate)</p>
          </div>
        </section>

        <section id="strategy" className="mt-8 bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold">Targeted Job Search Strategy (Snapshot)</h3>
          <p className="mt-3">This tailored strategy for Qatar includes a CV-market alignment analysis, top 30 target employers, 14-day action plan, recruiter outreach templates, and KPIs. Download the full PDF above.</p>
          <div className="mt-4">
            <iframe src={CANDIDATE.strategyPdfUrl} title="Strategy Document" className="w-full h-96 border rounded" />
          </div>
        </section>

        <section id="contact" className="mt-8 bg-blue-50 rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-2">Email: <a href="mailto:Mwidaa038@gmail.com" className="text-blue-700">Mwidaa038@gmail.com</a></p>
          <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/Mutasim-Widaa" className="text-blue-700">linkedin.com/in/Mutasim-Widaa</a></p>
        </section>

      </main>

      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} {CANDIDATE.name} — Portfolio & Targeted Search Strategy</div>
      </footer>
    </div>
  )
}

function Stat({title,value,sub}){
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <div className="text-3xl font-extrabold text-blue-700">{value}</div>
      <div className="mt-2 text-sm text-slate-600">{title} {sub && <span className="text-xs text-slate-400">{sub}</span>}</div>
    </div>
  )
}

function ExperienceItem({title,company,dates,bullets}){
  return (
    <div className="mt-4">
      <h4 className="font-semibold">{title} <span className="text-slate-500">@ {company}</span></h4>
      <div className="text-xs text-slate-400">{dates}</div>
      <ul className="mt-2 list-disc list-inside text-slate-700">
        {bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}
