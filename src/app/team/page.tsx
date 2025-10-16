import Image from 'next/image'
import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Team — HERO Observatory',
  description: 'Meet the HERO Observatory leadership team.',
}

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title="Our Team" 
        subtitle="Leadership driving equity, resilience, and innovation"
      />

      <div className="container">
        <section className="section">
          <p>The HERO Observatory brings together researchers, practitioners, and partners from institutions across Canada and globally. Our work is grounded in collaboration, equity, and a shared commitment to transforming how societies respond to crises.</p>
        </section>

        {/* Dr. Meaghan Thumath Bio */}
        <div className="bio-section">
          <div className="bio-header">
            <div className="bio-photo">
              <Image 
                src="/Meaghan Thumath.jpeg" 
                alt="Dr. Meaghan Thumath"
                width={180}
                height={180}
              />
            </div>
            <div className="bio-info">
              <h2>Dr. Meaghan Thumath, DPhil, MPH, RN</h2>
              <p className="bio-title">Principal Investigator, Founder, HERO Observatory<br />Assistant Professor, School of Nursing, Faculty of Applied Science</p>
              <div className="bio-links">
                <a href="mailto:meaghan.thumath@ubc.ca">Email</a>
              </div>
            </div>
          </div>
          <div className="bio-content">
            <p>Dr. Meaghan Thumath is an Assistant Professor at the University of British Columbia and founder of the HERO Lab, a research hub dedicated to applying artificial intelligence to protect communities during public health and climate emergencies. Her interdisciplinary program—funded by CIHR, SSHRC, and international agencies—has advanced equity-focused interventions that counter misinformation, improve health outcomes, and rebuild trust in institutions during crises.</p>
            <p>Meaghan has advised governments, the UN, and WHO on epidemic response, bringing both scholarly rigor and practical experience from the front lines of HIV, Ebola, and COVID-19. Her research program integrates nursing, epidemiology, and AI to produce actionable frameworks for defense, pharmaceutical, and emergency management sectors.</p>
            <p>She is recognized internationally for advancing responsible, equity-centered AI, ensuring that innovation in crisis technology reflects cultural safety, human rights, and systemic resilience. Her vision is to bridge research, policy, and practice to strengthen public trust in an era defined by global shocks.</p>
          </div>
        </div>

        {/* Dr. Jamie Forrest Bio */}
        <div className="bio-section">
          <div className="bio-header">
            <div className="bio-photo">
              <Image 
                src="/Jamie Forrest.png" 
                alt="Dr. Jamie Forrest"
                width={180}
                height={180}
              />
            </div>
            <div className="bio-info">
              <h2>Dr. Jamie Forrest, PhD, MPH</h2>
              <p className="bio-title">Scientific Director, HERO Observatory<br />Postdoctoral Research Fellow, Faculty of Applied Science</p>
              <div className="bio-links">
                <a href="mailto:james.forrest@ubc.ca">Email</a>
              </div>
            </div>
          </div>
          <div className="bio-content">
            <p>Dr. Jamie I. Forrest is a global health researcher and implementation scientist with interests and expertise in clinical research operations, AI, and digital health equity. As a Postdoctoral Fellow in the UBC Faculty of Applied Science and Scientific Director of the HERO Observatory, he co-leads research investigating how artificial intelligence and digital technologies help, harm, and strengthen operational capacity for public health, particular during health emergencies.</p>
            <p>Dr. Forrest has over 15 years of experience leading international health research partnerships, and brings particular expertise in global health research operations between Canadian and African institutions. As Executive Director of the TOGETHER Trial Consortium, he coordinated clinical research operations across global sites, where the team successfully recruited over 12,000 patients and generated landmark evidence published in the New England Journal of Medicine and other high-impact medical journals.</p>
            <p>His work spans health analytics platform development, adaptive clinical trial design and implementation, and research capacity-building initiatives through North-South academic and industry partnerships. Dr. Forrest holds a PhD in Population and Public Health from the University of British Columbia, MPH from Simon Fraser University and BSc in Microbiology from the University of Guelph.</p>
          </div>
        </div>

        {/* Shafaq */}
        <div className="bio-section">
          <div className="bio-header">
            <div className="bio-photo">
              <Image 
                src="/blurred-placeholder.png" 
                alt="Shafaq"
                width={180}
                height={180}
              />
            </div>
            <div className="bio-info">
              <h2>Shafaq</h2>
              <p className="bio-title">MPH Practicum Student<br />School of Population & Public Health, Faculty of Medicine</p>
            </div>
          </div>
          <div className="bio-content">
            <p>Bio coming soon.</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}