import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — HERO Observatory',
  description: 'Get in touch with the HERO Observatory team at UBC.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the HERO Observatory team"
      />

      <div className="container">
        <section className="section">
          <p>We welcome enquiries from academic institutions, policy makers, community partners, and funders interested in collaborative research, knowledge translation, or supporting our mission. Whether you're exploring research partnerships, seeking expertise in crisis response and misinformation detection, or interested in our training programmes, we'd like to hear from you.</p>
        </section>
        
        <section className="section">
          <h2>Primary Contact</h2>
          <div className="contact-card">
            <h3>Dr. Meaghan Thumath</h3>
            <p><strong>Principal Investigator</strong></p>
            <p>Email: <a href="mailto:meaghan.thumath@ubc.ca">meaghan.thumath@ubc.ca</a></p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}