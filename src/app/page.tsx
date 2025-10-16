import Image from 'next/image'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>HERO — Health Equity & Resilience Observatory</h1>
          <p className="tagline">Equity, Trust, and Resilience in Action</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <h2>The Challenge</h2>
          <p>In times of crisis — from pandemics to climate emergencies — the spread of misinformation can be as dangerous as the crises themselves. False or misleading information undermines trust in science, weakens emergency responses, and exacerbates health inequities. Despite billions invested in preparedness, societies remain vulnerable because evidence too often fails to reach decision-makers and communities with the speed, clarity, and trust required.</p>
          <p>Traditional research systems are not designed for this reality. They generate evidence, but lack the translational pipelines and technologies to convert knowledge into timely, actionable solutions. Meanwhile, adversaries exploit information environments to spread disinformation at scale. The stakes are clear: without resilient systems rooted in equity and trust, the next crisis will deepen divides and cost lives.</p>
        </section>

        <hr />

        <section className="section">
          <h2>Our Solution</h2>
          <p>The Health Equity & Resilience Observatory (HERO) is dedicated to closing this gap. HERO brings together frontline clinical expertise, cutting-edge AI, and global health leadership to transform evidence into action.</p>
          
          <div className="solution-grid">
            <div className="solution-item">
              <div className="solution-icon">
                <Image 
                  src="/academic-icon.png" 
                  alt="Academic Excellence" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="solution-content">
                <h3>Academic depth, frontline credibility</h3>
                <p>HERO is founded by Dr. Meaghan Thumath, a clinician and global health leader with two decades of experience across HIV, Ebola, and COVID-19.</p>
              </div>
            </div>
            
            <div className="solution-item">
              <div className="solution-icon">
                <Image 
                  src="/directions-icon.png" 
                  alt="Strategic Direction" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="solution-content">
                <h3>Scientific direction in frontier tech</h3>
                <p>Led by Dr. Jamie Forrest, HERO integrates crisis informatics and data science to create next-generation intelligence for resilience.</p>
              </div>
            </div>
            
            <div className="solution-item">
              <div className="solution-icon">
                <Image 
                  src="/globe-icon.png" 
                  alt="Global Impact" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="solution-content">
                <h3>Bridge to real-world deployment</h3>
                <p>HERO innovations seed Counterforce AI, a venture spin-out building tools that counter misinformation and strengthen decision-making in real time.</p>
              </div>
            </div>
          </div>
          
          <p>Together, HERO and Counterforce form a unique pipeline: from evidence → to observatory insights → to actionable systems deployed at scale.</p>
        </section>

        <hr />

        <section className="section">
          <h2>Research Pillars</h2>
          
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">
                <Image 
                  src="/shield-checkmark-icon.png" 
                  alt="Trust & Security" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="pillar-content">
                <h3>1. Trust & Crisis Intelligence</h3>
                <ul>
                  <li>AI-powered detection of misinformation and harmful narratives.</li>
                  <li>Decision-support dashboards for governments, NGOs, and health systems.</li>
                </ul>
              </div>
            </div>
            
            <div className="pillar-item">
              <div className="pillar-icon">
                <Image 
                  src="/users-gear-icon.png" 
                  alt="Health Systems" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="pillar-content">
                <h3>2. Resilient & Equitable Health Systems</h3>
                <ul>
                  <li>Implementation science to test and scale interventions in emergencies.</li>
                  <li>Equity frameworks that ensure marginalized populations are prioritized.</li>
                </ul>
              </div>
            </div>
            
            <div className="pillar-item">
              <div className="pillar-icon">
                <Image 
                  src="/toolbox-icon.png" 
                  alt="Intervention Tools" 
                  width={60} 
                  height={60}
                />
              </div>
              <div className="pillar-content">
                <h3>3. Equity-Driven Interventions</h3>
                <ul>
                  <li>Co-designed solutions across HIV, addictions, reproductive health, and humanitarian response.</li>
                  <li>Translation of research into policies and practices that reduce disparities.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="section">
          <h2>Impact</h2>
          <p>HERO will:</p>
          <ul>
            <li>Protect trust in science and democracy by countering harmful narratives during crises.</li>
            <li>Strengthen health and humanitarian systems to act quickly and fairly.</li>
            <li>Advance global health equity by ensuring vulnerable communities are not left behind.</li>
            <li>Train the next generation of scholars and practitioners in "Trust-Tech" — a new field at the intersection of equity, resilience, and AI.</li>
          </ul>
        </section>

        <hr />

        <section className="section">
          <h2>Why Now</h2>
          <p>The world is facing a convergence of crises — pandemics, climate change, political instability — all amplified by information disorder. The window to build resilient, equitable systems is narrow, but the opportunity is historic. HERO is uniquely positioned to act now, leveraging global networks and innovation ecosystems.</p>
        </section>

        <Footer />
      </div>
    </>
  )
}
