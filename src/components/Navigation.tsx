'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            <Image 
              src="/HERO%20Lab%20Logo%20150x150.png" 
              alt="HERO Lab" 
              width={40} 
              height={40}
            />
          </Link>
          <div className="nav-org-name">
            <span className="hero-text">Health Equity & Resilience Observatory</span>
            <span className="separator"> - </span>
            <span className="counterforce-text">Counterforce AI</span>
          </div>
        </div>
        <div className="nav-links">
          <Link 
            href="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/team" 
            className={`nav-link ${isActive('/team') ? 'active' : ''}`}
          >
            Team
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation