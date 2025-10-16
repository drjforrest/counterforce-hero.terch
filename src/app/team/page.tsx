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
        {/* Dr. Meaghan Thumath Bio */}
        <div className="bio-section">
          <div className="bio-header">
            <div className="bio-photo">
              <Image 
                src="/Meaghan%20Thumath.jpeg" 
                alt="Dr. Meaghan Thumath"
                width={180}
                height={180}
              />
            </div>
            <div className="bio-info">
              <h2>Dr. Meaghan Thumath</h2>
              <p className="bio-title">Principal Investigator & Founder</p>
              <div className="bio-links">
                <a href="mailto:meaghan.thumath@ubc.ca">Email</a>
              </div>
            </div>
          </div>
          <div className="bio-content">
            {/* BIO CONTENT WILL GO HERE */}
            <p>[Awaiting bio content from user]</p>
          </div>
        </div>

        {/* Dr. Jamie Forrest Bio */}
        <div className="bio-section">
          <div className="bio-header">
            <div className="bio-photo">
              <Image 
                src="/Jamie%20Forrest.png" 
                alt="Dr. Jamie Forrest"
                width={180}
                height={180}
              />
            </div>
            <div className="bio-info">
              <h2>Dr. Jamie Forrest</h2>
              <p className="bio-title">Scientific Director</p>
              <div className="bio-links">
                <a href="mailto:james.forrest@ubc.ca">Email</a>
              </div>
            </div>
          </div>
          <div className="bio-content">
            {/* BIO CONTENT WILL GO HERE */}
            <p>[Awaiting bio content from user]</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}