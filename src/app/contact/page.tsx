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
        <div className="contact-grid">
          <div className="contact-card">
            <h3>General Inquiries</h3>
            <p>For general questions about HERO Observatory and our research:</p>
            <p><a href="mailto:hero.observatory@ubc.ca">hero.observatory@ubc.ca</a></p>
          </div>

          <div className="contact-card">
            <h3>Research Collaborations</h3>
            <p>Interested in partnering with us?</p>
            <p><strong>Dr. Meaghan Thumath</strong><br />
            Principal Investigator<br />
            <a href="mailto:meaghan.thumath@ubc.ca">meaghan.thumath@ubc.ca</a></p>
          </div>

          <div className="contact-card">
            <h3>Technology & Data Science</h3>
            <p>Questions about our AI and data science work?</p>
            <p><strong>Dr. Jamie Forrest</strong><br />
            Scientific Director<br />
            <a href="mailto:james.forrest@ubc.ca">james.forrest@ubc.ca</a></p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p><strong>HERO Observatory</strong><br />
            Remote-first organization<br />
            Operating globally to advance health equity</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}